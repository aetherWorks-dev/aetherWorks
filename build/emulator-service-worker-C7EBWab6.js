function generateChunkUrl(spec, chunk) {
  return `${spec.baseUrl}/${spec.chunks[chunk]}.chunk#${chunk}`;
}
function generateNextChunkUrl(url, specs) {
  const match = url.match(/.*\/([0-9a-f]+)\.chunk#(\d+)$/);
  if (!match) {
    console.warn(`Could not parse chunk URL ${url}`);
    return void 0;
  }
  const [chunkSignature, chunkStr] = match.slice(1);
  const chunkIndex = parseInt(chunkStr, 10);
  const spec = specs.find((spec2) => spec2.chunks[chunkIndex] === chunkSignature);
  if (!spec) {
    console.warn(`Could not find spec that served ${url}`);
    return void 0;
  }
  if (chunkIndex + 1 >= spec.chunks.length) {
    return void 0;
  }
  const nextChunkSignature = spec.chunks[chunkIndex + 1];
  if (!nextChunkSignature) {
    return void 0;
  }
  return generateChunkUrl(spec, chunkIndex + 1);
}
let workerCommands = [];
function constructJsonResponse(json) {
  return new Response(JSON.stringify(json), {
    status: 200,
    statusText: "OK",
    headers: {
      "Content-Type": "application/json"
    }
  });
}
const DISK_CACHE_NAME = "disk-cache";
const diskCacheSpecs = [];
self.addEventListener("message", (event) => {
  const { data } = event;
  if (data.type === "worker-command") {
    workerCommands.push(data.command);
  } else if (data.type === "init-disk-cache") {
    const diskFileSpec = data.spec;
    diskCacheSpecs.push(diskFileSpec);
    event.waitUntil(
      async function() {
        const cache = await caches.open(DISK_CACHE_NAME);
        const prefetchChunkUrls = [];
        for (const chunkIndex of diskFileSpec.prefetchChunks) {
          const chunkSignature = diskFileSpec.chunks[chunkIndex];
          if (!chunkSignature) {
            continue;
          }
          const chunkUrl = generateChunkUrl(diskFileSpec, chunkIndex);
          const cachedResponse = await cache.match(
            new Request(chunkUrl)
          );
          if (!cachedResponse) {
            prefetchChunkUrls.push(chunkUrl);
          }
        }
        if (prefetchChunkUrls.length) {
          return cache.addAll(prefetchChunkUrls);
        }
      }()
    );
  }
});
self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);
  if (requestUrl.pathname.endsWith("/worker-commands")) {
    handleWorkerCommands(event);
  } else if (requestUrl.pathname.endsWith("/worker-idlewait")) {
    handleIdleWait(event);
  } else if (diskCacheSpecs.some(
    (spec) => decodeURIComponent(requestUrl.pathname).startsWith(spec.baseUrl)
  )) {
    event.respondWith(handleDiskCacheRequest(event.request));
  }
});
function handleWorkerCommands(event) {
  const fetchResponse = constructJsonResponse(workerCommands);
  workerCommands = [];
  event.respondWith(fetchResponse);
}
function handleIdleWait(event) {
  const requestUrl = new URL(event.request.url);
  const timeout = parseInt(requestUrl.searchParams.get("timeout"), 10);
  const endTime = performance.now() + timeout - 1;
  event.respondWith(
    new Promise((resolve) => {
      const interval = self.setInterval(() => {
        if (workerCommands.length || performance.now() >= endTime) {
          self.clearInterval(interval);
          resolve(constructJsonResponse({}));
        }
      }, 1);
    })
  );
}
async function handleDiskCacheRequest(request) {
  let cache;
  try {
    cache = await caches.open(DISK_CACHE_NAME);
  } catch (e) {
    console.error("Error opening cache:", e);
  }
  if (cache) {
    prefetchNextChunk(cache, request.url);
    const match = await cache.match(request);
    if (match) {
      return match;
    }
  }
  const response = await fetch(request);
  try {
    cache == null ? void 0 : cache.put(request, response.clone());
  } catch (e) {
    console.error("Ignoring cache error: ", e);
  }
  return response;
}
async function prefetchNextChunk(cache, url) {
  const nextChunkUrl = generateNextChunkUrl(url, diskCacheSpecs);
  if (!nextChunkUrl) {
    return;
  }
  const nextChunkRequest = new Request(nextChunkUrl);
  const cachedResponse = await cache.match(nextChunkRequest);
  if (!cachedResponse) {
    await cache.add(nextChunkRequest);
  }
}
self.addEventListener("install", (event) => {
  self.skipWaiting();
});
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

import {
    type SystemDiskDef,
    type PlaceholderDiskDef,
    DISKS_BY_YEAR,
    NOTABLE_DISKS_BY_YEAR,
    isPlaceholderDiskDef,
    NOTABLE_DISKS,
    ALL_DISKS,
    NEXT_DISKS,
    NEXT_DISKS_BY_YEAR,
} from "./disks";

import {canSaveDisks} from "./canSaveDisks";

import React, {Suspense, useEffect, useMemo, useState} from "react";
import "./App.css";
import {Browser} from "./Browser";
import {Footer} from "./Footer";
import RunDefMac from "./RunDefMac"; 
import {type RunDef, runDefFromUrl, runDefToUrl} from "./run-def";
import {flushSync} from "react-dom";
import {startViewTransition} from "./view-transitions";
import {type RunDefMacProps} from "./RunDefMac";

const disk = ALL_DISKS[0];

const prefRunDef = {
    disks: [disk],
    screenSize: "auto",
    includeInfiniteHD: true,
    includeSavedHD: true,
    machine: disk.machines[0],
    cdromURLs: [],
    diskFiles: [],
} satisfies RunDef;

function App() {
    const [initialRunDef, editInitialRunDef] = useMemo(() => {
        const runDef = prefRunDef;
        const isEdit = new URL(location.href).searchParams.has("edit");
        return [runDef, isEdit];
    }, []);
    const [runDef, setRunDef] = useState<RunDef | undefined>(
        editInitialRunDef ? undefined : initialRunDef
    );
    const [initialBrowserCustomRunDef, setInitialBrowserCustomRunDef] =
        useState<RunDef | undefined>(
            editInitialRunDef ? initialRunDef : undefined
        );
    useEffect(() => {
        const listener = () => {
            setRunDef(runDefFromUrl(location.href));
        };
        window.addEventListener("popstate", listener);
        return () => window.removeEventListener("popstate", listener);
    }, []);

    let contents;
    let footer: React.ReactElement | undefined = <Footer />;
    if (runDef) {
        const handleDone = () => {
            startViewTransition(async () => {
                // Going back in the history is preferred over resetting the
                // state because the browser will restore the scroll position.
                if (runDef !== initialRunDef) {
                    history.back();
                    await new Promise(resolve => {
                        window.addEventListener("popstate", resolve, {
                            once: true,
                        });
                    });
                } else {
                    history.pushState({}, "", "/");
                    flushSync(() => {
                        setRunDef(undefined);
                    });
                }
                setInitialBrowserCustomRunDef(
                    runDef.isCustom ? runDef : undefined
                );
            });
        };
        contents = (
            <Suspense fallback={<div />}>
                <RunDefMac runDef={runDef} onDone={handleDone} />
            </Suspense>
        );
        footer = (
            <Footer
                onLogoClick={handleDone}
                showFullscreenButton={runDef.screenSize === "fullscreen"}
            />
        );
    } else {
        contents = (
            <React.StrictMode>
                <Browser
                    initialCustomRunDef={initialBrowserCustomRunDef}
                    onRun={(runDef, inNewWindow) => {
                        const runDefUrl = runDefToUrl(runDef);
                        if (inNewWindow) {
                            window.open(runDefUrl, "_blank");
                            return;
                        }
                        history.pushState({}, "", runDefUrl);
                        startViewTransition(() => {
                            flushSync(() => {
                                setRunDef(runDef);
                            });
                        });
                    }}
                />
            </React.StrictMode>
        );
        footer = undefined;
    }

    return (
        <div className="App">
            {contents}
            {footer}
        </div>
    );
}

// Lazy load to avoid the bundle hit, but prefetch and replace with the
// implementation so that we can use view transitions and not worry about
// suspense boundaries.
// const runDefMacLoader = () => import("./RunDefMac");
// let RunDefMac: React.ComponentType<RunDefMacProps> =
//     React.lazy(runDefMacLoader);
// setTimeout(async () => {
//     RunDefMac = (await runDefMacLoader()).default;
// }, 1000);

export default App;

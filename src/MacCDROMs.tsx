import {useRef, useState} from "react";
import "./MacCDROMs.css";
import {type EmulatorCDROM} from "./emulator/emulator-common";
import {Button} from "./controls/Button";
import classNames from "classnames";
import {Dialog} from "./controls/Dialog";
import {cdromLibrary, getCDROMInfo, systemCDROMCompare} from "./cdroms";
import {Input} from "./controls/Input";
import {type Appearance} from "./controls/Appearance";
import {type MachinePlatform} from "./machines";
import defaultCDROMImage from "./Images/DefaultCDROM.png";
import defaultCDROMNeXTImage from "./Images/DefaultCDROM-NeXT.png";

export function MacCDROMs({
    onRun,
    appearance,
    platform,
}: {
    onRun: (cdrom: EmulatorCDROM) => void;
    appearance: Appearance;
    platform?: MachinePlatform;
}) {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => setExpanded(value => !value);
    const className = classNames("Mac-CDROMs", `Mac-CDROMs-${appearance}`, {
        "Mac-CDROMs-Expanded": expanded,
    });

    // return (
    //     <div className={className}>
    //         <div className="Mac-CDROMs-Title" onClick={toggleExpanded}>
    //             CD-ROMs
    //         </div>
    //         {expanded && (
    //             <MacCDROMsContents
    //                 onRun={cdrom => {
    //                     setExpanded(false);
    //                     onRun(cdrom);
    //                 }}
    //                 appearance={appearance}
    //                 platform={platform}
    //             />
    //         )}
    //     </div>
    // );
}

function MacCDROMsContents({
    onRun,
    appearance,
    platform = "Macintosh",
}: {
    onRun: (cdrom: EmulatorCDROM) => void;
    appearance: Appearance;
    platform?: MachinePlatform;
}) {
    const [search, setSearch] = useState("");
    const cdroms = cdromLibrary;
    const folderPaths = Array.from(Object.keys(cdroms)).sort();
    const cdromsByCategory: {[category: string]: EmulatorCDROM[]} = {};
    let lastCategory;
    for (const folderPath of folderPaths) {
        if (
            search &&
            !folderPath.toLowerCase().includes(search.toLowerCase())
        ) {
            continue;
        }
        const cdrom = cdroms[folderPath];
        const {platform: cdromPlatform = "Macintosh"} = cdrom;
        if (cdromPlatform !== platform) {
            continue;
        }
        const category = folderPath.substring(
            0,
            folderPath.length - cdrom.name.length - 1
        );
        if (category !== lastCategory) {
            cdromsByCategory[category] = [];
            lastCategory = category;
        }
        cdromsByCategory[category].push(cdrom);
    }
    const sortedCategories = Object.keys(cdromsByCategory).sort((a, b) => {
        if (a === b) {
            return 0;
        }
        if (a.startsWith(b)) {
            return 1;
        }
        if (b.startsWith(a)) {
            return -1;
        }
        return a.localeCompare(b);
    });
    const sortedCdromsByCategory = Object.fromEntries(
        sortedCategories.map(category => [category, cdromsByCategory[category]])
    );
    for (const [category, cdroms] of Object.entries(sortedCdromsByCategory)) {
        cdroms.sort((a, b) =>
            a.name.localeCompare(b.name, undefined, {numeric: true})
        );
        if (category === "System Software") {
            cdroms.sort(systemCDROMCompare);
        }
    }

    const [customCDROMVisible, setCustomCDROMVisible] = useState(false);

    return (
        <div className="Mac-CDROMs-Contents">
            {customCDROMVisible && (
                <MacCustomCDROM
                    onRun={onRun}
                    onDone={() => setCustomCDROMVisible(false)}
                    appearance={appearance}
                />
            )}
            <div className="Mac-CDROMs-Header">
                <div className="Mac-CDROMs-Instructions">
                    Load CD-ROM images into the emulated Mac to access software
                    that is too large to pre-install on Infinite HD.
                </div>
                <Button
                    appearance={appearance}
                    onClick={() => setCustomCDROMVisible(true)}
                >
                    Load from URL…
                </Button>
                <Input
                    appearance={appearance}
                    type="search"
                    placeholder="Filter…"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
            <div className="Mac-CDROMs-List">
                {Object.entries(sortedCdromsByCategory).map(
                    ([category, cdroms]) => (
                        <div key={category} className="Mac-CDROMs-Category">
                            <h3>{category}</h3>
                            <div className="Mac-CDROMs-Category-Contents">
                                {cdroms.map(cdrom => (
                                    <MacCDROM
                                        key={cdrom.name}
                                        cdrom={cdrom}
                                        onRun={() => {
                                            onRun(cdrom);
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

function MacCustomCDROM({
    onRun,
    onDone,
    appearance,
}: {
    onRun: (cdrom: EmulatorCDROM) => void;
    onDone: () => void;
    appearance: Appearance;
}) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [url, setUrl] = useState("");
    const handleLoad = async () => {
        try {
            const cdrom = await getCDROMInfo(url);
            history.replaceState(
                {},
                "",
                location.pathname + "?cdrom_url=" + encodeURIComponent(url)
            );
            onRun(cdrom);
            onDone();
        } catch (err) {
            alert("Could not load CD-ROM: " + (err as Error).message);
        }
    };
    return (
        <Dialog
            title="Run Custom CD-ROM…"
            onDone={handleLoad}
            doneLabel="Run"
            doneEnabled={url !== "" && inputRef.current?.validity.valid}
            onCancel={onDone}
            appearance={appearance}
        >
            <p>
                Infinite Mac supports loading of CD-ROM images from URLs. Be
                aware of the following caveats:
            </p>
            <ul>
                <li>
                    The CD-ROM image must be a raw .iso, .img, .toast or .bin
                    file (i.e. not compressed, or a .dmg)
                </li>
                <li>
                    Only a subset of sites are supported (currently archive.org,
                    macintoshgarden.org and macintoshrepository.org). If there
                    is another site that you wish to be supported, please
                    contact the maintainer. Be aware that the HTTP server that
                    serves the image has to support{" "}
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests">
                        range requests
                    </a>{" "}
                    so that the image can be streamed in.
                </li>
            </ul>
            <p>
                <Input
                    appearance={appearance}
                    className="Mac-Custom-CDROM-URL"
                    type="url"
                    value={url}
                    placeholder="URL"
                    size={40}
                    onChange={e => setUrl(e.target.value)}
                    onKeyDown={e => {
                        if (
                            e.key === "Enter" &&
                            inputRef.current?.validity.valid
                        ) {
                            handleLoad();
                        }
                    }}
                    ref={inputRef}
                />
            </p>
        </Dialog>
    );
}

function MacCDROM({cdrom, onRun}: {cdrom: EmulatorCDROM; onRun: () => void}) {
    const {
        name,
        coverImageHash,
        coverImageSize,
        coverImageType = "round",
    } = cdrom;
    let coverClassName, coverImageUrl, coverImageWidth, coverImageHeight;
    if (coverImageHash && coverImageSize) {
        coverImageUrl = `/Covers/${coverImageHash}.jpeg`;
        [coverImageWidth, coverImageHeight] = coverImageSize;
        coverClassName = classNames("Mac-CDROM-Cover", {
            "Mac-CDROM-Cover-Round": coverImageType === "round",
        });
    } else {
        const isNext = cdrom.platform === "NeXT";
        coverImageUrl = isNext ? defaultCDROMNeXTImage : defaultCDROMImage;
        coverImageWidth = isNext ? 48 : 32;
        coverImageHeight = isNext ? 48 : 32;
        coverClassName = classNames("Mac-CDROM-Cover", "Default");
    }
    return (
        <div className="Mac-CDROM" onClick={onRun}>
            <img
                className={coverClassName}
                src={coverImageUrl}
                width={coverImageWidth}
                height={coverImageHeight}
                loading="lazy"
            />
            <div className="Mac-CDROM-Name">{name}</div>
        </div>
    );
}

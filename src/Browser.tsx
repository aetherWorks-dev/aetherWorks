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
import {type MachineDef} from "./machines";
import {ScreenFrame} from "./ScreenFrame";
import {useState} from "react";
import {Button} from "./controls/Button";
import {About} from "./About";
import {Donate} from "./Donate";
import {useWindowWidth} from "./useWindowWidth";
import "./Browser.css";
import {Changelog} from "./Changelog";
import {type RunDef} from "./run-def";
import {Custom} from "./Custom";
import classNames from "classnames";
import {canSaveDisks} from "./canSaveDisks";
import {usePersistentState} from "./usePersistentState";
import {viewTransitionNameForDisk} from "./view-transitions";

type BrowserRunFn = (def: RunDef, inNewWindow?: boolean) => void;

export function Browser({
    onRun,
    initialCustomRunDef,
}: {
    onRun: BrowserRunFn;
    initialCustomRunDef?: RunDef;
}) {
    const [diskFilter, setDiskFilter] = useDiskFilter();
    const {byYear: disksByYear} = disks[diskFilter];

    return (
        <div className="Browser">
            <header>
                <div className="Logo">
                    <h1>aetherWorks</h1>
                </div>
            </header>
            <div className="Disks-Container">
                <DiskFilters value={diskFilter} onChange={setDiskFilter} />
                {Array.from(Object.entries(disksByYear), ([year, disks]) => (
                    <div className="Year" key={year}>
                        <h2>{year}</h2>
                        <div className="Disks">
                            {disks.map((disk, i) => (
                                <Disk disk={disk} onRun={onRun} key={i} />
                            ))}
                        </div>
                    </div>
                ))}
                <div className="Year">
                    <h2>{new Date().getFullYear()}</h2>
                    <div className="Disks">
                        <CustomDisk onRun={onRun} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Description({
    onRun,
    initialCustomRunDef,
}: {
    onRun: BrowserRunFn;
    initialCustomRunDef?: RunDef;
}) {
    const [aboutVisible, setAboutVisible] = useState(false);
    const [changelogVisible, setChangelogVisible] = useState(false);
    const [donateVisible, setDonateVisible] = useState(false);
    const [customVisible, setCustomVisible] = useState(
        location.pathname === "/run" || initialCustomRunDef !== undefined
    );

}

const disks = {
    "all": {label: "All", all: ALL_DISKS, byYear: DISKS_BY_YEAR},
    "notable": {
        label: "Notable",
        all: NOTABLE_DISKS,
        byYear: NOTABLE_DISKS_BY_YEAR,
    },
    "next": {label: "NeXT", all: NEXT_DISKS, byYear: NEXT_DISKS_BY_YEAR},
};
type DiskFilter = keyof typeof disks;

function useDiskFilter() {
    const filterParam = new URLSearchParams(location.search).get("filter");
    let defaultValue: DiskFilter = "notable";
    let useClientState = false;
    // If using query params, we go into a temporary client state.
    if (filterParam && filterParam.toLowerCase() in disks) {
        defaultValue = filterParam as DiskFilter;
        useClientState = true;
    }

    const clientState = useState<DiskFilter>(defaultValue);
    const persistentState = usePersistentState<DiskFilter>(
        defaultValue,
        "diskFilter"
    );
    return useClientState ? clientState : persistentState;
}

function DiskFilters({
    value,
    onChange,
}: {
    value: DiskFilter;
    onChange: (v: DiskFilter) => void;
}) {
    return (
        <div className="Disk-Filters-Container">
            <div className="Disk-Filters">
                <span className="Disk-Filters-Label">Releases:</span>
                {Object.entries(disks).map(([filter, {label, all}]) => (
                    <DiskFiltersButton
                        key={filter}
                        onClick={() => onChange(filter as DiskFilter)}
                        selected={filter === value}
                        label={label}
                        count={all.length}
                    />
                ))}
            </div>
        </div>
    );
}

function DiskFiltersButton({
    onClick,
    selected,
    label,
    count,
}: {
    onClick: () => void;
    selected: boolean;
    label: string;
    count: number;
}) {
    return (
        <button
            onClick={onClick}
            className={classNames("Disk-Filters-Button", {
                "selected": selected,
            })}
        >
            <span className="name-container">
                <span className="name">{label}</span>
                <span className="name-sizer">{label}</span>
            </span>{" "}
            <span className="count">({count})</span>
        </button>
    );
}

type DiskProps = {
    disk: SystemDiskDef | PlaceholderDiskDef;
    onRun: BrowserRunFn;
};

function Disk({disk, onRun}: DiskProps) {
    let {bezelStyle} = disk.machines[0];
    // This is wrong, but it makes the 9.1 and 9.2 images that run the
    // DingusPPC-powered Beige G3 fit in with the B&W one used for
    // SheepShaver-based 8.5-9.0.4 ones.
    if (disk.machines[0].emulatorType === "DingusPPC") {
        bezelStyle = "Pinstripes";
    }
    return (
        <DiskFrame
            bezelStyle={bezelStyle}
            viewTransitionName={viewTransitionNameForDisk(disk)}
            screen={
                isPlaceholderDiskDef(disk) ? (
                    <PlaceholderDiskContents disk={disk} />
                ) : (
                    <DiskContents disk={disk} onRun={onRun} />
                )
            }
        />
    );
}

function DiskFrame({
    bezelStyle,
    screen,
    viewTransitionName,
}: {
    bezelStyle: MachineDef["bezelStyle"];
    screen: React.ReactElement;
    viewTransitionName?: string;
}) {
    const windowWidth = useWindowWidth();

    // Match 10 vs. 40px padding chosen via the media query.
    let screenWidth = windowWidth - (windowWidth <= 400 ? 110 : 180);
    const bezelSize = windowWidth <= 440 ? "Small-ish" : "Medium";
    screenWidth = Math.max(Math.min(screenWidth, 320), 200);
    const screenHeight = Math.round(screenWidth * 0.75);

    return (
        <ScreenFrame
            className="Disk"
            bezelStyle={bezelStyle}
            width={screenWidth}
            height={screenHeight}
            bezelSize={bezelSize}
            screen={screen}
            viewTransitionName={viewTransitionName}
        />
    );
}

type DiskContentsProps = {
    disk: SystemDiskDef;
    onRun: BrowserRunFn;
};

function DiskContents({disk, onRun}: DiskContentsProps) {
    const {bezelStyle} = disk.machines[0];
    const [customVisible, setCustomVisible] = useState(false);
    const run = (event: React.MouseEvent) => {
        const runDef = {
            disks: [disk],
            screenSize: "auto",
            includeInfiniteHD: true,
            includeSavedHD: canSaveDisks(),
            machine: disk.machines[0],
            cdromURLs: [],
            diskFiles: [],
        } satisfies RunDef;
        const inNewWindow =
            event.button === 2 || event.metaKey || event.ctrlKey;
        onRun(runDef, inNewWindow);
    };

    const {appearance = "Classic"} = disk;

    return (
        <div
            className={classNames("DiskContents", `DiskContents-${bezelStyle}`)}
        >
            <DiskHeader disk={disk} />
            <div className="Row DiskDescription">{disk.description}</div>
            <div className="Row Buttons">
                <Button
                    appearance={appearance}
                    className="CustomizeButton"
                    onClick={() => setCustomVisible(true)}
                >
                    Customize…
                </Button>
                <Button appearance={appearance} onClick={run}>
                    Run
                </Button>
            </div>

            {customVisible && (
                <Custom
                    defaultDisk={disk}
                    onRun={onRun}
                    onDone={() => setCustomVisible(false)}
                />
            )}
        </div>
    );
}

type PlaceholderDiskContentsProps = {
    disk: PlaceholderDiskDef;
};

function PlaceholderDiskContents({disk}: PlaceholderDiskContentsProps) {
    return (
        <div className="DiskContents DiskContents-Placeholder">
            <DiskHeader disk={disk} />
            <div className="Row DiskDescription">{disk.description}</div>
        </div>
    );
}

function CustomDisk({onRun}: {onRun: BrowserRunFn}) {
    const [customVisible, setCustomVisible] = useState(false);
    const today = new Date();
    return (
        <DiskFrame
            bezelStyle="Pinstripes"
            screen={
                <div className="DiskContents">
                    {customVisible && (
                        <Custom
                            onRun={onRun}
                            onDone={() => setCustomVisible(false)}
                        />
                    )}
                    <DiskHeader
                        disk={{
                            releaseDate: [
                                today.getFullYear(),
                                today.getMonth() + 1,
                                today.getDate(),
                            ],
                            displayName: "Custom",
                        }}
                    />
                    <div className="Row DiskDescription">
                        Build a custom instance, using your choice of emulated
                        machine and disk images.
                    </div>
                    <div className="Row Buttons">
                        <Button
                            appearance="Platinum"
                            onClick={() => setCustomVisible(true)}
                        >
                            Run…
                        </Button>
                    </div>
                </div>
            }
        />
    );
}

function DiskHeader({
    disk,
}: {
    disk: Pick<
        SystemDiskDef,
        "releaseDate" | "displayName" | "displaySubtitle" | "isUnstable"
    >;
}) {
    const [year, month, day] = disk.releaseDate;
    const releaseDateString = new Date(year, month - 1, day).toLocaleDateString(
        undefined,
        {
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );
    return (
        <>
            <h3 className="Row">
                {disk.displayName}
                {disk.displaySubtitle && (
                    <span className="Subtitle"> ({disk.displaySubtitle})</span>
                )}
                <div className="ReleaseDate">
                    {releaseDateString}
                    {disk.isUnstable && (
                        <div className="Unstable-Warning">Unstable</div>
                    )}
                </div>
            </h3>
        </>
    );
}

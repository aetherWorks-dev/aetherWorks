import {type Appearance} from "./controls/Appearance";
import {type EmulatorChunkedFileSpec} from "./emulator/emulator-common";
import {
    type MachineDef,
    MAC_128K,
    MAC_512KE,
    MAC_SE,
    MAC_II,
    MAC_IIFX,
    MAC_PLUS,
    POWER_MACINTOSH_G3_BW,
    POWER_MACINTOSH_9500,
    QUADRA_650,
    POWER_MACINTOSH_6100,
    NEXT_COMPUTER,
    NEXT_CUBE,
    NEXT_STATION,
    NEXT_STATION_TURBO_COLOR,
    POWER_MACINTOSH_G3_BEIGE,
} from "./machines";

type GeneratedChunkedFileSpec = Omit<
    EmulatorChunkedFileSpec,
    "prefetchChunks" | "baseUrl"
>;

export type EmulatorDiskDef = {
    // Dynamically imported since some manifests can be quite large, and we
    // don't want to incur the cost of loading all of them up-front.
    generatedSpec: () => Promise<{default: GeneratedChunkedFileSpec}>;
    // prefetchChunks are semi-automatically generated -- we will get a
    // warning via validateSpecPrefetchChunks() if these are incorrect.
    prefetchChunks: number[];
    // Changes to this file will be persisted in the origin private file
    // system.
    persistent?: boolean;
    // Will be mounted as a floppy disk in emulators that make the distinction
    // between disk types.
    isFloppy?: boolean;
};

export type SystemDiskDef = EmulatorDiskDef & {
    displayName: string;
    displaySubtitle?: string;
    releaseDate: [year: number, month: number, date: number];
    description: string;
    machines: MachineDef[];
    appleTalkSupported?: boolean;
    infiniteHdSubset?: "mfs" | "system6";
    delayAdditionalDiskMount?: boolean;
    appearance?: Appearance;
    isUnstable?: boolean;
    notable?: boolean;
};

export type DiskFile = {
    file: File;
    treatAsCDROM: boolean;
};

export type PlaceholderDiskDef = {
    type: "placeholder";
    displayName: string;
    displaySubtitle?: string;
    releaseDate: [year: number, month: number, date: number];
    description: string;
    machines: MachineDef[];
    appearance?: Appearance;
};

export function isPlaceholderDiskDef(
    disk: SystemDiskDef | PlaceholderDiskDef
): disk is PlaceholderDiskDef {
    return "type" in disk && disk.type === "placeholder";
}
function isSystemDiskDef(
    disk: SystemDiskDef | PlaceholderDiskDef
): disk is SystemDiskDef {
    return !isPlaceholderDiskDef(disk);
}

const SYSTEM_1_0: SystemDiskDef = {
    displayName: "System 1.0",
    description: "Initial system software release, shipped with the Mac 128K.",
    releaseDate: [1984, 1, 24],
    prefetchChunks: [0, 1],
    machines: [MAC_128K],
    infiniteHdSubset: "mfs",
    // Loading the Infinite HD disk as part of the initial set of images does
    // appear to work in System 1.0 under Mini vMac, but if we delay it until
    // after the system is booted, it appears to work.
    delayAdditionalDiskMount: true,
    generatedSpec: () => import("./Data/System 1.0.dsk.json"),
    notable: true,
};

const SYSTEM_1_0_ORIGINAL: SystemDiskDef = {
    displayName: "System 1.0 (System Disk)",
    description: "Initial system software release, shipped with the Mac 128K.",
    releaseDate: [1984, 1, 24],
    prefetchChunks: [0, 1],
    machines: [MAC_128K],
    infiniteHdSubset: "mfs",
    delayAdditionalDiskMount: true,
    generatedSpec: () => import("./Data/System 1.0 (Original).dsk.json"),
    isFloppy: true,
};

const SYSTEM_1_1: SystemDiskDef = {
    displayName: "System 1.1",
    description:
        "Maintenance release that improved disk copying speeds and added the “Set Startup” command and the Finder about box.",
    releaseDate: [1984, 5, 5],
    prefetchChunks: [0, 1],
    machines: [MAC_128K],
    infiniteHdSubset: "mfs",
    generatedSpec: () => import("./Data/System 1.1.dsk.json"),
};

const SYSTEM_2_0: SystemDiskDef = {
    displayName: "System 2.0",
    description:
        "Introduced the ”New Folder” and ”Shut Down” commands, the MiniFinder, and the Choose Printer DA. Also added icons to list view and the Command-Shift-3 screenshot FKEY.",
    releaseDate: [1985, 4, 8],
    prefetchChunks: [0, 1],
    machines: [MAC_128K],
    infiniteHdSubset: "mfs",
    generatedSpec: () => import("./Data/System 2.0.dsk.json"),
    notable: true,
};

const SYSTEM_2_1: SystemDiskDef = {
    displayName: "System 2.1",
    description:
        "Added support for the Hard Disk 20 drive and the HFS file system.",
    releaseDate: [1985, 9, 17],
    prefetchChunks: [0, 1, 2],
    // The Mac 128K is supported, but HFS is not loaded in that case.
    machines: [MAC_512KE, MAC_128K],
    infiniteHdSubset: "system6",
    generatedSpec: () => import("./Data/System 2.1.dsk.json"),
    notable: true,
};

const SYSTEM_3_0: SystemDiskDef = {
    displayName: "System 3.0",
    description:
        "Added more complete support for HFS, a RAM disk cache, zoom boxes for windows and a redesigned control panel. Introduced with the Mac Plus.",
    releaseDate: [1986, 1, 16],
    prefetchChunks: [0, 1, 2],
    machines: [MAC_PLUS, MAC_512KE],
    infiniteHdSubset: "system6",
    generatedSpec: () => import("./Data/System 3.0.dsk.json"),
    notable: true,
};

const SYSTEM_3_1: PlaceholderDiskDef = {
    type: "placeholder",
    displayName: "System 3.1",
    releaseDate: [1986, 2, 14], // Precise date is not known
    description:
        "Caused data corruption and was superseded by 3.2 shortly after release.",
    machines: [MAC_PLUS, MAC_512KE],
};

const SYSTEM_3_2: SystemDiskDef = {
    displayName: "System 3.2",
    description:
        "Includes redesigned Calculator and Chooser desktop accessories.",
    releaseDate: [1986, 6, 2],
    prefetchChunks: [0, 1, 2],
    machines: [MAC_PLUS, MAC_512KE],
    infiniteHdSubset: "system6",
    generatedSpec: () => import("./Data/System 3.2.dsk.json"),
};

const SYSTEM_3_3: SystemDiskDef = {
    displayName: "System 3.3",
    description:
        "Enhanced AppleShare file serving support. The Trash can icon now bulges when it's not empty.",
    releaseDate: [1987, 1, 12],
    prefetchChunks: [0, 1, 2],
    machines: [MAC_PLUS, MAC_512KE],
    infiniteHdSubset: "system6",
    generatedSpec: () => import("./Data/System 3.3.dsk.json"),
};

const SYSTEM_4_0: SystemDiskDef = {
    displayName: "System 4.0",
    description:
        "Added the Find File desktop accessory and the Restart command. Features a redesigned control panel. Released with the Mac SE.",
    releaseDate: [1987, 3, 2],
    prefetchChunks: [0, 1, 2],
    machines: [MAC_SE],
    infiniteHdSubset: "system6",
    generatedSpec: () => import("./Data/System 4.0.dsk.json"),
};

const SYSTEM_4_1: SystemDiskDef = {
    displayName: "System 4.1",
    description:
        "Added Easy Access accessibility features. Improved compatibility with larger hard drives. Released with the Mac II.",
    releaseDate: [1987, 4, 14],
    prefetchChunks: [0, 1, 2],
    machines: [MAC_II, MAC_SE, MAC_PLUS, MAC_512KE],
    infiniteHdSubset: "system6",
    generatedSpec: () => import("./Data/System 4.1.dsk.json"),
};

const SYSTEM_5_0: SystemDiskDef = {
    displayName: "System 5.0",
    description:
        "Introduced the MultiFinder, revised the Finder about box, and improved printing support.",
    releaseDate: [1987, 10, 8],
    prefetchChunks: [0, 1, 2],
    machines: [MAC_SE, MAC_II, MAC_PLUS, MAC_512KE],
    infiniteHdSubset: "system6",
    generatedSpec: () => import("./Data/System 5.0 HD.dsk.json"),
    notable: true,
};

const SYSTEM_5_1: SystemDiskDef = {
    displayName: "System 5.1",
    description: "Updated the LaserWriter Driver and Apple HD SC Setup.",
    releaseDate: [1987, 12, 1],
    prefetchChunks: [0, 1, 2],
    machines: [MAC_SE, MAC_II, MAC_PLUS, MAC_512KE],
    infiniteHdSubset: "system6",
    generatedSpec: () => import("./Data/System 5.1 HD.dsk.json"),
};

const SYSTEM_6_0: SystemDiskDef = {
    displayName: "System 6.0",
    description: "Added MacroMaker, Map and CloseView utilities.",
    releaseDate: [1988, 4, 30],
    prefetchChunks: [0, 1, 2, 3, 4, 5, 6, 8],
    machines: [MAC_SE, MAC_II, MAC_PLUS, MAC_512KE],
    infiniteHdSubset: "system6",
    generatedSpec: () => import("./Data/System 6.0 HD.dsk.json"),
    notable: true,
};

const SYSTEM_6_0_1: PlaceholderDiskDef = {
    type: "placeholder",
    displayName: "System 6.0.1",
    description: "Released with the Mac IIx, buggy and short-lived.",
    releaseDate: [1988, 9, 19],
    machines: [MAC_SE, MAC_II, MAC_PLUS, MAC_512KE],
};

const SYSTEM_6_0_2: SystemDiskDef = {
    displayName: "System 6.0.2",
    description: "Updated LaserWriter and other printing-related utilites.",
    releaseDate: [1988, 9, 19],
    prefetchChunks: [0, 1, 2, 3, 4, 5, 6, 8],
    machines: [MAC_SE, MAC_II, MAC_PLUS, MAC_512KE],
    infiniteHdSubset: "system6",
    generatedSpec: () => import("./Data/System 6.0.2 HD.dsk.json"),
};

const SYSTEM_6_0_3: SystemDiskDef = {
    displayName: "System 6.0.3",
    description: "Added support for the Mac IIcx and SE/30.",
    releaseDate: [1989, 3, 7],
    prefetchChunks: [0, 1, 2, 3, 4, 5, 6, 8],
    machines: [MAC_SE, MAC_II, MAC_PLUS, MAC_512KE],
    infiniteHdSubset: "system6",
    generatedSpec: () => import("./Data/System 6.0.3 HD.dsk.json"),
};

const SYSTEM_6_0_4: SystemDiskDef = {
    displayName: "System 6.0.4",
    description:
        "Added support for the Mac IIci and Portable. Improved the installer. Holding down the option key when double-clicking in the Finder closes the parent window.",
    releaseDate: [1989, 9, 20],
    prefetchChunks: [0, 1, 2, 3, 4, 5, 6, 8],
    machines: [MAC_SE, MAC_II, MAC_PLUS, MAC_512KE],
    infiniteHdSubset: "system6",
    generatedSpec: () => import("./Data/System 6.0.4 HD.dsk.json"),
};

const SYSTEM_6_0_5: SystemDiskDef = {
    displayName: "System 6.0.5",
    description:
        "Bundled 32-bit QuickDraw (previously a separate package). Added support for the Mac IIfx.",
    releaseDate: [1990, 3, 19],
    prefetchChunks: [0, 1, 2, 3, 4, 5, 6, 8],
    machines: [MAC_SE, MAC_II, MAC_PLUS, MAC_512KE],
    infiniteHdSubset: "system6",
    generatedSpec: () => import("./Data/System 6.0.5 HD.dsk.json"),
    notable: true,
};

const SYSTEM_6_0_6: PlaceholderDiskDef = {
    type: "placeholder",
    displayName: "System 6.0.6.",
    releaseDate: [1990, 10, 15], // Official release date is not known.
    description: "Never officially released due to an AppleTalk bug.",
    machines: [MAC_SE, MAC_II, MAC_PLUS, MAC_512KE],
};

const SYSTEM_6_0_7: SystemDiskDef = {
    displayName: "System 6.0.7",
    description:
        "First release to ship on 1440K disks. Added support for the Classic, LC and IIsi.",
    releaseDate: [1990, 10, 15],
    prefetchChunks: [0, 1, 2, 3, 4, 5, 6, 8],
    machines: [MAC_SE, MAC_II, MAC_PLUS, MAC_512KE],
    infiniteHdSubset: "system6",
    generatedSpec: () => import("./Data/System 6.0.7 HD.dsk.json"),
};

const SYSTEM_6_0_8: SystemDiskDef = {
    displayName: "System 6.0.8",
    description:
        "Final release of System 6, updated printing software to match the printing software of System 7.",
    releaseDate: [1991, 4, 17],
    prefetchChunks: [0, 1, 2, 3, 4, 5, 6, 8],
    machines: [MAC_SE, MAC_II, MAC_PLUS, MAC_512KE],
    infiniteHdSubset: "system6",
    generatedSpec: () => import("./Data/System 6.0.8 HD.dsk.json"),
};

const SYSTEM_7_0: SystemDiskDef = {
    displayName: "System 7.0",
    description:
        "Fully 32-bit clean, the MultiFinder is now mandatory, reorganized the System Folder into subfolders, made the Apple menu customizable, revamped the window appearance, and much more.",
    releaseDate: [1991, 5, 13],
    prefetchChunks: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
    machines: [MAC_IIFX, MAC_PLUS, MAC_SE, MAC_II],
    appleTalkSupported: true,
    generatedSpec: () => import("./Data/System 7.0 HD.dsk.json"),
    notable: true,
};

const SYSTEM_7_1: SystemDiskDef = {
    displayName: "System 7.1",
    description:
        "Added the Fonts folder, introduced system enablers to support new Mac models and improved internationalization support.",
    releaseDate: [1992, 8, 28],
    prefetchChunks: [
        0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22,
        25, 26,
    ],
    machines: [QUADRA_650, MAC_IIFX, MAC_PLUS, MAC_SE, MAC_II],
    appleTalkSupported: true,
    generatedSpec: () => import("./Data/System 7.1 HD.dsk.json"),
};

const SYSTEM_7_1_1: SystemDiskDef = {
    displayName: "System 7.1.1",
    displaySubtitle: "Pro",
    description: "Bundled PowerTalk and AppleScript.",
    releaseDate: [1993, 10, 21],
    prefetchChunks: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 21, 22, 23,
        24, 25, 26, 27, 28, 29, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
        44,
    ],
    machines: [QUADRA_650, MAC_IIFX, MAC_PLUS, MAC_SE, MAC_II],
    appleTalkSupported: true,
    generatedSpec: () => import("./Data/System 7.1.1 HD.dsk.json"),
};

const SYSTEM_7_1_2: SystemDiskDef = {
    displayName: "System 7.1.2",
    description:
        "Initial system software for the first Power Macintosh computers.",
    releaseDate: [1994, 3, 14],
    prefetchChunks: [0, 1, 2],
    machines: [POWER_MACINTOSH_6100],
    isUnstable: true,
    generatedSpec: () => import("./Data/System 7.1.2 HD.dsk.json"),
};

const SYSTEM_7_1_2_DISK_TOOLS: SystemDiskDef = {
    displayName: "System 7.1.2 Disk Tools",
    description:
        "Disk Tools startup disk from the floppy disk version of System 7.1.2.",
    releaseDate: [1994, 3, 14],
    prefetchChunks: [0],
    machines: [POWER_MACINTOSH_6100],
    generatedSpec: () => import("./Data/System 7.1.2 Disk Tools FD.dsk.json"),
    isFloppy: true,
};

const SYSTEM_7_5: SystemDiskDef = {
    displayName: "System 7.5",
    description:
        "Featured a new startup screen, drag-and-drop support and the Launcher. Included a hierarchical Apple menu, Extensions Manager, menu bar clock, Find File, Stickies, WindowShade, all based on licensed third-party utilities.",
    releaseDate: [1994, 9, 12],
    prefetchChunks: [
        0, 1, 2, 6, 7, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 33, 39, 40, 41, 43, 44, 45, 46, 47, 48, 50, 51, 54, 55, 56,
        57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 70, 71, 72,
    ],
    machines: [QUADRA_650, MAC_IIFX, MAC_PLUS, MAC_SE, MAC_II],
    appleTalkSupported: true,
    generatedSpec: () => import("./Data/System 7.5 HD.dsk.json"),
    notable: true,
};

const SYSTEM_7_5_DISK_TOOLS: SystemDiskDef = {
    displayName: "System 7.5 Disk Tools",
    description:
        "Disk Tools startup disk from the floppy disk version of System 7.5.",
    releaseDate: [1994, 9, 12],
    prefetchChunks: [0],
    machines: [POWER_MACINTOSH_6100],
    generatedSpec: () => import("./Data/System 7.5 Disk Tools FD.dsk.json"),
    isFloppy: true,
};

const SYSTEM_7_5_1: SystemDiskDef = {
    displayName: "System 7.5.1",
    description:
        "Bug fixes and small tweaks. Startup screen now now features the Mac OS logo.",
    releaseDate: [1995, 3, 23],
    prefetchChunks: [
        0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23,
        27, 28, 29, 31, 32, 33, 34, 35, 39, 41, 48, 50, 51, 54, 55, 57, 58, 59,
        64, 65, 66, 67, 68, 69, 70, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
        90, 91, 92, 93, 94,
    ],
    machines: [QUADRA_650, MAC_IIFX, MAC_PLUS, MAC_SE, MAC_II],
    appleTalkSupported: true,
    generatedSpec: () => import("./Data/System 7.5.1 HD.dsk.json"),
};

const SYSTEM_7_5_2: SystemDiskDef = {
    displayName: "System 7.5.2",
    description:
        "Introduced the Open Transport networking stack. Added support for PCI-based Power Macs.",
    releaseDate: [1995, 6, 19],
    prefetchChunks: [
        0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23,
        27, 28, 29, 31, 32, 33, 34, 35, 39, 41, 48, 50, 51, 54, 55, 57, 58, 59,
        64, 65, 66, 67, 68, 69, 70, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
        90, 91, 92, 93, 94,
    ],
    machines: [POWER_MACINTOSH_9500],
    appleTalkSupported: true,
    isUnstable: true,
    generatedSpec: () => import("./Data/System 7.5.2 HD.dsk.json"),
};

const SYSTEM_7_5_3: SystemDiskDef = {
    displayName: "System 7.5.3",
    description:
        "Brought Open Transport and other improvements released with the PCI Power Mac-only 7.5.2 release to a broader set of Macs.",
    releaseDate: [1996, 3, 11],
    prefetchChunks: [
        0, 3, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24,
        25, 26, 27, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
        59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 79, 80, 88, 89, 90, 92, 93,
        94, 96, 98, 99, 100, 102, 103, 104, 106, 107, 108, 109, 110, 111, 113,
        114, 116, 117, 166,
    ],
    machines: [QUADRA_650, MAC_PLUS, MAC_SE, MAC_II, MAC_IIFX],
    appleTalkSupported: true,
    generatedSpec: () => import("./Data/System 7.5.3 HD.dsk.json"),
    notable: true,
};

const SYSTEM_7_5_3_PPC: SystemDiskDef = {
    displayName: "System 7.5.3",
    displaySubtitle: "PowerPC",
    description:
        "Installation with OpenDoc, QuickDraw GX and other PowerPC-only software.",
    releaseDate: [1996, 3, 11],
    prefetchChunks: [
        0, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23,
        24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
        43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 55, 56, 57, 58, 59, 60, 61, 62,
        63, 64, 68, 69, 70, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 96, 97, 98,
        99, 100, 101, 102, 103, 106, 107, 108, 109, 110, 111, 112, 114, 120,
        121, 122, 123, 124, 125, 129, 130, 131, 133, 134, 135, 136, 137, 139,
        140, 141, 142, 143, 144, 145, 146, 147, 148, 152, 153, 155,
    ],
    machines: [POWER_MACINTOSH_9500],
    appleTalkSupported: true,
    generatedSpec: () => import("./Data/System 7.5.3 (PPC) HD.dsk.json"),
    notable: true
};

const KANJITALK_7_5_3: SystemDiskDef = {
    displayName: "KanjiTalk 7.5.3",
    description: "Japanese edition of System 7.5.3.",
    releaseDate: [1996, 3, 11],
    prefetchChunks: [
        0, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 27, 28,
        29, 30, 31, 32, 33, 34, 35, 43, 44, 45, 46, 47, 49, 50, 51, 52, 54, 62,
        63, 64, 65, 66, 67, 69, 70, 71, 72, 73, 76, 77, 78, 79, 80, 81, 82, 83,
        84, 85, 89, 90, 94, 114, 116, 142, 147, 159, 161, 168, 169, 170, 171,
        172, 174, 175, 176, 177, 179, 180, 181, 182, 183, 185, 186, 187, 189,
        190, 191, 192, 193, 194, 195, 196, 197, 399,
    ],
    machines: [QUADRA_650, MAC_PLUS, MAC_SE, MAC_II, MAC_IIFX],
    appleTalkSupported: true,
    generatedSpec: () => import("./Data/KanjiTalk 7.5.3 HD.dsk.json"),
    notable: true,
};

const SYSTEM_7_5_4: PlaceholderDiskDef = {
    type: "placeholder",
    displayName: "System 7.5.4",
    description:
        "Withdrawn from release at the last minute due a showstopper bug.",
    releaseDate: [1996, 9, 18],
    machines: [QUADRA_650, MAC_PLUS, MAC_SE, MAC_II, MAC_IIFX],
};

const SYSTEM_7_5_5: SystemDiskDef = {
    displayName: "System 7.5.5",
    description: "Improved memory system performance and reliability.",
    releaseDate: [1996, 9, 18],
    prefetchChunks: [
        0, 2, 5, 6, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
        24, 25, 27, 28, 30, 31, 32, 33, 34, 35, 38, 45, 46, 49, 50, 51, 57, 59,
        61, 64, 66, 70, 71, 79, 83, 84, 86, 87, 88, 89, 90, 95, 96, 97, 100,
        103, 107, 114, 115, 125, 126, 130, 131, 132, 150, 151, 159, 161, 162,
        163, 164, 165, 168, 170, 171, 172, 180, 181, 182, 183, 184, 185, 186,
        187, 188, 189, 190,
    ],
    machines: [
        QUADRA_650,
        MAC_PLUS,
        MAC_SE,
        MAC_II,
        MAC_IIFX,
        POWER_MACINTOSH_9500,
    ],
    appleTalkSupported: true,
    generatedSpec: () => import("./Data/System 7.5.5 HD.dsk.json"),
};

const MAC_OS_7_6: SystemDiskDef = {
    displayName: "Mac OS 7.6",
    description:
        "First to be officially called “Mac OS”. Improved performance and reliability. Featured a revamped Extensions Manager and speech support.",
    releaseDate: [1997, 1, 7],
    prefetchChunks: [
        0, 3, 6, 11, 12, 13, 18, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 54,
        55, 56, 57, 58, 59, 60, 61, 64, 65, 66, 67, 68, 69, 70, 78, 79, 80, 81,
        82, 84, 85, 86, 88, 92, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
        109, 110, 112, 113, 114, 115, 116, 117, 119, 120, 121, 122, 126, 127,
        128, 134, 136, 139, 140, 141, 145, 146, 147, 148, 149, 150, 151, 152,
        153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166,
        167, 168, 169, 170, 171,
    ],
    machines: [QUADRA_650, MAC_IIFX, POWER_MACINTOSH_9500],
    appleTalkSupported: true,
    generatedSpec: () => import("./Data/Mac OS 7.6 HD.dsk.json"),
    notable: true,
};

const MAC_OS_8_0: SystemDiskDef = {
    displayName: "Mac OS 8.0",
    description:
        "Introduced the Platinum appearance, multi-threaded Finder, context menus, popup windows, and other features.",
    releaseDate: [1997, 7, 26],
    prefetchChunks: [
        0, 3, 6, 7, 10, 11, 12, 22, 23, 25, 28, 29, 30, 31, 33, 34, 35, 36, 37,
        39, 40, 42, 44, 56, 58, 59, 60, 62, 63, 65, 66, 67, 68, 70, 71, 72, 73,
        74, 75, 80, 81, 82, 83, 84, 85, 86, 87, 88, 94, 95, 96, 97, 100, 101,
        102, 103, 104, 105, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
        123, 124, 126, 130, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149,
        150, 151, 152, 153, 154, 155, 156, 157, 158, 160, 165, 166, 172, 173,
        174, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188,
        189, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204,
        205, 206, 208,
    ],
    machines: [QUADRA_650, POWER_MACINTOSH_9500],
    appleTalkSupported: true,
    appearance: "Platinum",
    generatedSpec: () => import("./Data/Mac OS 8.0 HD.dsk.json"),
    notable: true,
};

const MAC_OS_8_1: SystemDiskDef = {
    displayName: "Mac OS 8.1",
    description: "Added support for the HFS+ file system.",
    releaseDate: [1998, 1, 19],
    prefetchChunks: [
        0, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 22, 23, 24, 25, 26, 27, 28, 29,
        30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
        49, 50, 51, 52, 54, 55, 56, 57, 58, 60, 61, 63, 64, 65, 66, 67, 68, 69,
        70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 85, 86, 87, 88,
        89, 90, 91, 92, 93, 94, 95, 96, 97, 108, 119, 120, 122, 123, 124, 125,
        126, 129, 130, 131, 132, 137, 138, 143, 144, 145, 151, 152, 153, 154,
        155, 158, 159, 160, 161, 162, 163, 169, 170, 171, 172, 175, 176, 177,
        179, 181,
    ],
    machines: [QUADRA_650, POWER_MACINTOSH_9500],
    appleTalkSupported: true,
    appearance: "Platinum",
    generatedSpec: () => import("./Data/Mac OS 8.1 HD.dsk.json"),
    notable: true,
};

const MAC_OS_8_1_DISK_TOOLS_68K: SystemDiskDef = {
    displayName: "Mac OS 8.1 Disk Tools (68K)",
    description:
        "Disk Tools startup disk from the floppy disk version of Mac OS 8.1.",
    releaseDate: [1998, 1, 19],
    prefetchChunks: [0],
    machines: [QUADRA_650],
    generatedSpec: () => import("./Data/Mac OS 8.1 Disk Tools 68K FD.dsk.json"),
    isFloppy: true,
};

const MAC_OS_8_1_DISK_TOOLS_PPC: SystemDiskDef = {
    displayName: "Mac OS 8.1 Disk Tools (PPC)",
    description:
        "Disk Tools startup disk from the floppy disk version of Mac OS 8.1.",
    releaseDate: [1998, 1, 19],
    prefetchChunks: [0],
    machines: [POWER_MACINTOSH_9500],
    generatedSpec: () => import("./Data/Mac OS 8.1 Disk Tools PPC FD.dsk.json"),
    isFloppy: true,
};

const MAC_OS_8_5: SystemDiskDef = {
    displayName: "Mac OS 8.5",
    description:
        "Introduced Sherlock, 32-bit icons in the Finder, font smoothing, a new help system and the application palette.",
    releaseDate: [1998, 10, 17],
    prefetchChunks: [
        0, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 22, 23, 24, 25,
        26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
        45, 46, 47, 48, 49, 51, 52, 53, 54, 55, 56, 57, 58, 62, 68, 69, 70, 71,
        72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 87, 88, 89, 90, 91,
        92, 93, 94, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113,
        114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
        128, 129, 130, 131, 132, 134, 135, 136, 137, 138, 139, 140, 181, 182,
        183, 184, 185, 186, 187, 191, 192, 194, 195, 196, 197, 198, 200, 204,
        205, 207, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220,
        221, 222, 223, 224, 225, 228, 229, 230, 231, 232, 234, 240, 241, 243,
        244, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259,
        260, 261, 263, 264, 270, 272, 273, 280, 281, 334, 345, 347, 349, 350,
        351, 352, 353, 354, 363, 364, 414, 415, 416, 421, 422, 423, 425, 426,
        427, 428, 432, 453, 454, 458,
    ],
    machines: [POWER_MACINTOSH_9500, POWER_MACINTOSH_G3_BW],
    appleTalkSupported: true,
    appearance: "Platinum",
    generatedSpec: () => import("./Data/Mac OS 8.5 HD.dsk.json"),
    notable: true,
};

const MAC_OS_8_6: SystemDiskDef = {
    displayName: "Mac OS 8.6",
    description:
        "Added a revised nanokernel for improved multi-processing and multi-threading.",
    releaseDate: [1999, 5, 10],
    prefetchChunks: [
        0, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
        24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 39, 40, 41, 42,
        43, 44, 45, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 68, 69, 72, 78,
        80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
        98, 99, 100, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119,
        120, 122, 124, 125, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136,
        137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
        151, 152, 193, 194, 195, 198, 199, 200, 201, 203, 204, 205, 208, 209,
        211, 212, 213, 214, 216, 220, 221, 222, 223, 228, 229, 230, 231, 237,
        238, 241, 242, 243, 244, 245, 246, 247, 248, 249, 251, 252, 253, 254,
        255, 256, 259, 260, 261, 262, 263, 264, 265, 266, 267, 269, 271, 272,
        279, 280, 281, 283, 284, 286, 347, 357, 358, 359, 360, 361, 362, 363,
        364, 365, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378,
        379, 380, 381, 382, 383, 384, 391, 392, 393, 399, 400, 401, 447, 448,
        449, 456, 457, 458, 483, 488,
    ],
    machines: [POWER_MACINTOSH_9500, POWER_MACINTOSH_G3_BW],
    appleTalkSupported: true,
    appearance: "Platinum",
    generatedSpec: () => import("./Data/Mac OS 8.6 HD.dsk.json"),
};

const MAC_OS_9_0: SystemDiskDef = {
    displayName: "Mac OS 9.0",
    description:
        "Introduced the Keychain, multiple user support, iTools integration, Sherlock internet channels and online software updates.",
    releaseDate: [1999, 10, 23],
    prefetchChunks: [
        0, 4, 5, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 38, 39, 41,
        42, 43, 44, 45, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
        61, 62, 63, 64, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
        81, 82, 83, 84, 85, 87, 88, 89, 92, 97, 102, 103, 104, 105, 106, 107,
        108, 116, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
        130, 131, 132, 133, 134, 135, 136, 137, 138, 140, 141, 142, 144, 145,
        147, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162,
        163, 165, 166, 167, 168, 169, 170, 172, 173, 174, 175, 176, 177, 178,
        179, 180, 181, 182, 183, 185, 251, 252, 253, 254, 255, 256, 258, 259,
        260, 261, 262, 263, 264, 272, 273, 274, 275, 277, 278, 280, 282, 284,
        285, 286, 287, 306, 308, 309, 310, 311, 313, 314, 318, 320, 321, 322,
        324, 325, 327, 331, 337, 338, 339, 342, 343, 347, 352, 353, 354, 356,
        357, 359, 360, 361, 365, 368, 369, 370, 371, 373, 374, 378, 379, 380,
        381, 383, 384, 385, 386, 387, 388, 389, 397, 399, 400, 406, 408, 409,
        410, 411, 412, 413, 416, 417, 419, 422, 424, 428, 429, 430, 431, 432,
        433, 441, 446, 492, 494, 499, 500, 501, 502, 503, 506, 507, 508, 511,
        512, 515, 554, 559, 560, 562, 563, 564, 565, 566, 567, 568,
    ],
    machines: [POWER_MACINTOSH_G3_BW, POWER_MACINTOSH_9500],
    appearance: "Platinum",
    generatedSpec: () => import("./Data/Mac OS 9.0 HD.dsk.json"),
    notable: true,
};

const MAC_OS_9_0_1: PlaceholderDiskDef = {
    type: "placeholder",
    displayName: "Mac OS 9.0.1",
    description: "Under development but never released.",
    releaseDate: [2000, 1, 1], // Planned release date unknown
    machines: [POWER_MACINTOSH_G3_BW, POWER_MACINTOSH_9500],
};

const MAC_OS_9_0_2: PlaceholderDiskDef = {
    type: "placeholder",
    displayName: "Mac OS 9.0.2",
    description: "Released with the PowerBook G3 (FireWire) only.",
    releaseDate: [2000, 2, 16],
    machines: [POWER_MACINTOSH_G3_BW, POWER_MACINTOSH_9500],
};

const MAC_OS_9_0_3: PlaceholderDiskDef = {
    type: "placeholder",
    displayName: "Mac OS 9.0.3",
    description: "Released with iMacs only.",
    releaseDate: [2000, 3, 1], // Exact date unknown
    machines: [POWER_MACINTOSH_G3_BW, POWER_MACINTOSH_9500],
};

const MAC_OS_9_0_4: SystemDiskDef = {
    displayName: "Mac OS 9.0.4",
    description:
        "Bug fixes, final release supported by the SheepShaver emulator.",
    releaseDate: [2000, 4, 4],
    prefetchChunks: [
        0, 4, 5, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
        34, 35, 38, 39, 40, 44, 46, 47, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58,
        59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 74, 75, 76, 77, 78,
        79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 90, 91, 92, 93, 94, 95, 99, 103,
        104, 105, 106, 110, 111, 112, 113, 114, 115, 116, 125, 126, 127, 128,
        129, 130, 131, 132, 133, 134, 135, 136, 137, 140, 141, 145, 146, 149,
        150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163,
        164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177,
        178, 179, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192,
        193, 194, 195, 272, 273, 275, 276, 277, 278, 279, 280, 281, 286, 287,
        288, 291, 292, 294, 295, 296, 297, 298, 299, 300, 303, 304, 305, 306,
        307, 308, 309, 310, 311, 312, 315, 316, 317, 319, 320, 330, 332, 333,
        334, 335, 336, 340, 346, 349, 350, 351, 352, 353, 355, 356, 359, 360,
        361, 363, 364, 365, 366, 367, 368, 369, 370, 373, 374, 380, 382, 385,
        386, 387, 391, 392, 394, 395, 396, 398, 399, 400, 401, 411, 412, 413,
        416, 417, 418, 419, 422, 423, 424, 425, 479, 480, 481, 482, 483, 484,
        493, 496, 497, 500, 501, 502, 504, 507, 511, 559, 567, 571, 572, 574,
        575, 577, 579, 580, 583, 586, 587, 588, 589, 591, 593, 595, 596, 597,
        598,
    ],
    machines: [POWER_MACINTOSH_G3_BW, POWER_MACINTOSH_9500],
    appearance: "Platinum",
    generatedSpec: () => import("./Data/Mac OS 9.0.4 HD.dsk.json"),
};

const MAC_OS_9_1: SystemDiskDef = {
    displayName: "Mac OS 9.1",
    description:
        "Integrated Disc Burning within Finder and added a “Window” menu.",
    releaseDate: [2001, 1, 9],
    prefetchChunks: [
        0, 4, 5, 6, 8, 9, 10, 12, 13, 15, 17, 18, 19, 20, 21, 22, 28, 29, 30,
        31, 32, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 52,
        54, 55, 63, 64, 65, 66, 67, 68, 69, 70, 71, 74, 75, 80, 82, 83, 87, 88,
        89, 93, 95, 96, 98, 99, 100, 102, 103, 114, 115, 117, 118, 119, 120,
        121, 122, 123, 124, 125, 126, 128, 129, 132, 134, 135, 136, 137, 138,
        139, 165, 166, 167, 169, 170, 171, 172, 173, 185, 186, 187, 190, 191,
        192, 194, 195, 196, 200, 201, 202, 203, 204, 205, 206, 207, 212, 214,
        219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232,
        233, 235, 236, 238, 239, 240, 241, 242, 245, 246, 250, 258, 259, 260,
        262, 263, 274, 275, 276, 278, 279, 280, 281, 294, 295, 296, 297, 307,
        308, 309, 310, 311, 312, 314, 315, 316, 319, 329, 330, 331, 334, 335,
        336, 337, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 379,
        440, 441, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454,
        455, 456, 457, 458, 459, 460, 463, 464, 465, 473, 474, 475, 476, 477,
        478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491,
        492, 493, 494, 495, 496, 500, 501, 503, 504, 517, 638, 639, 640, 641,
        642, 643, 644, 645, 646, 647, 648, 655, 656, 661, 816, 817, 818, 819,
        856, 859, 860, 861, 868, 869, 891, 910, 911, 912, 913, 914, 915, 916,
        918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931,
        932, 933, 937, 938, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952,
        953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966,
        967, 968, 969, 970, 971, 972, 973, 974, 977, 978, 979, 980, 984, 985,
        986, 987, 988, 989, 990,
    ],
    machines: [POWER_MACINTOSH_G3_BEIGE],
    appearance: "Platinum",
    generatedSpec: () => import("./Data/Mac OS 9.1 HD.dsk.json"),
    notable: true,
    isUnstable: true,
};

const MAC_OS_9_2: PlaceholderDiskDef = {
    type: "placeholder",
    displayName: "Mac OS 9.2",
    description:
        "Improved performance. Only distributed with mid-2001 G4 (QuickSilver) Power Macs.",
    releaseDate: [2001, 7, 18],
    machines: [POWER_MACINTOSH_G3_BEIGE],
};

const MAC_OS_9_2_1: PlaceholderDiskDef = {
    type: "placeholder",
    displayName: "Mac OS 9.2.1",
    description: "Improved Classic application compatibility under Mac OS X.",
    releaseDate: [2001, 8, 21],
    machines: [POWER_MACINTOSH_G3_BEIGE],
};

const MAC_OS_9_2_2: SystemDiskDef = {
    displayName: "Mac OS 9.2.2",
    description:
        "Bug fixes relating to Classic Environment. Final Mac OS 9 release.",
    releaseDate: [2001, 12, 5],
    prefetchChunks: [
        0, 4, 5, 6, 8, 9, 10, 15, 16, 17, 18, 19, 20, 29, 31, 32, 34, 36, 37,
        38, 45, 46, 47, 48, 49, 51, 53, 54, 56, 57, 58, 59, 60, 62, 63, 64, 65,
        68, 70, 71, 72, 80, 81, 82, 84, 85, 86, 90, 91, 96, 98, 99, 104, 105,
        109, 112, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125,
        127, 128, 139, 140, 142, 143, 144, 145, 146, 149, 151, 152, 153, 154,
        155, 158, 160, 161, 162, 165, 167, 168, 169, 170, 171, 172, 173, 175,
        178, 183, 184, 186, 187, 188, 189, 191, 203, 204, 205, 209, 210, 212,
        213, 214, 218, 219, 220, 221, 222, 223, 224, 225, 230, 232, 238, 239,
        240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 254,
        255, 257, 258, 259, 260, 261, 266, 267, 279, 280, 281, 282, 283, 295,
        296, 297, 299, 300, 301, 302, 314, 316, 317, 318, 328, 329, 330, 337,
        340, 351, 352, 355, 356, 358, 359, 363, 364, 365, 369, 370, 371, 372,
        373, 374, 375, 376, 377, 378, 379, 397, 398, 456, 457, 458, 459, 460,
        461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474,
        475, 476, 477, 478, 479, 480, 481, 482, 483, 498, 500, 501, 502, 503,
        504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 517, 518,
        519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 532, 533, 551,
        553, 554, 556, 647, 651, 656, 776, 777, 778, 779, 780, 781, 782, 783,
        784, 785, 786, 787, 794, 795, 799, 800, 958, 959, 960, 961, 998, 1001,
        1002, 1003, 1010, 1033, 1052, 1053, 1054, 1055, 1056, 1057, 1059, 1114,
        1117, 1118, 1119, 1120, 1124, 1126, 1127, 1128, 1129, 1130, 1131, 1132,
        1133, 1134, 1135, 1136, 1137, 1138, 1140, 1142, 1145, 1146, 1147, 1148,
        1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163,
        1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175,
        1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1185, 1186, 1187, 1197,
        1198, 1199,
    ],
    machines: [POWER_MACINTOSH_G3_BEIGE],
    appearance: "Platinum",
    generatedSpec: () => import("./Data/Mac OS 9.2.2 HD.dsk.json"),
    notable: true,
    isUnstable: true,
};

const NEXTSTEP_0_8: SystemDiskDef = {
    displayName: "NeXTStep 0.8",
    description:
        "First publicly-available preview release. Included the Mach kernel, an object-oriented API based on Objective-C, a Display PostScript-powered UI, and several applications.",
    releaseDate: [1988, 10, 12],
    prefetchChunks: [
        0, 1, 2, 3, 40, 41, 42, 43, 44, 45, 79, 80, 84, 85, 86, 118, 119, 121,
        122, 123, 124, 125, 126, 127, 128, 158, 159, 160, 197, 198, 236, 238,
        315, 317, 474, 477, 591, 593, 710, 711, 712, 748, 749, 788, 789, 906,
        907, 908, 945, 947, 985, 986, 1142, 1143, 1181, 1183, 1852, 1853, 1890,
        1892, 1930, 1931, 1932, 1933, 1935, 2481, 2483, 2520, 2522, 2523, 2524,
        2560, 2561, 2639, 2640, 2835, 2837, 2914, 2915, 2916, 2954, 3350, 3351,
        3390, 3391, 3392, 3393, 3394, 3395, 3396, 3403, 3404, 3405, 3429, 3430,
        3431, 3432, 3468, 3469, 3470, 3471, 3472, 3477, 3478, 3485, 3494, 3495,
        3496, 3497, 3508, 3509, 3512, 3513, 3514, 3515, 3516, 3517, 3518, 3519,
        3520, 3547, 3548, 3549, 3550, 3551, 3552, 3553, 3554, 3555, 3557, 3558,
        3559, 3560, 3562, 3565, 3566, 3572, 3587, 3588, 3589, 3602, 3603, 3604,
        3605, 3608, 3609, 3610, 3611, 3612, 3630, 3631, 3632, 3633, 3665, 3705,
        3706, 3707, 3708, 3709, 3710, 3714, 3715, 3716, 3717, 3718, 3720, 3722,
        3723, 3724, 3725, 3726, 3727, 3728, 3730, 3731, 3732, 3745, 3750, 3752,
        3753, 3784, 3786, 3787, 3823, 3824, 3825, 3826, 3827, 3828, 3833, 3834,
        3846, 3863, 3871, 3877, 3903, 3911, 3912,
    ],
    machines: [NEXT_COMPUTER],
    appearance: "NeXT",
    generatedSpec: () => import("./Data/NeXTStep 0.8 HD.dsk.json"),
    notable: true,
};

const NEXTSTEP_0_9: SystemDiskDef = {
    displayName: "NeXTStep 0.9",
    description:
        "Introduces the Preferences application, a window resize control, indicator in the dock of running apps, and other UI polish. Bundles FrameMaker, Mathematica and additional demo apps.",
    releaseDate: [1989, 5, 1],
    prefetchChunks: [
        0, 1, 2, 3, 9, 10, 11, 12, 13, 14, 16, 17, 435, 436, 437, 438, 442, 443,
        444, 445, 446, 450, 451, 452, 458, 459, 460, 461, 462, 464, 465, 466,
        467, 468, 474, 475, 489, 490, 491, 495, 496, 497, 498, 513, 514, 520,
        521, 528, 536, 543, 544, 551, 552, 553, 554, 559, 560, 575, 576, 599,
        691, 753, 754, 776, 784, 807, 808, 815, 816, 822, 823, 824, 830, 831,
        832, 833, 834, 837, 838, 839, 840, 841, 846, 854, 855, 856, 884, 885,
        886, 900, 901, 1001, 1002, 1003, 1133, 1134, 1148, 1149, 1150, 1151,
        1152, 1156, 1157, 1158, 1159, 1160, 1163, 1164, 1165, 1166, 1188, 1189,
        1242, 1244, 1257, 1258, 1287, 1289, 1311, 1318, 1326, 1327, 1334, 1335,
        1342, 1343, 1351, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362,
        1363, 1364, 1365, 1366, 1367, 1371, 1372, 1373, 1374, 1377, 1388, 1389,
        1390, 1391, 1423, 1424, 1427, 1428, 1652, 1659, 1660, 1667, 1668, 1683,
        1684, 1690, 1691, 1692, 1698, 1699, 1700, 1706, 1707, 1714, 1715, 1721,
        1722, 1723, 1729, 1731, 1745, 1746, 1752, 1753, 1760, 1761, 1776, 1783,
        1784, 1800, 1892, 1893, 1907, 1908, 1910, 2109, 3070, 3071, 3079, 3080,
        3081, 3082, 3087, 3088, 3089, 3093, 3094, 3095, 3098, 3099, 3100, 3233,
        3234, 3241, 3807,
    ],
    machines: [NEXT_COMPUTER],
    appearance: "NeXT",
    generatedSpec: () => import("./Data/NeXTStep 0.9 HD.dsk.json"),
};

const NEXTSTEP_1_0: SystemDiskDef = {
    displayName: "NeXTStep 1.0",
    description:
        "Includes the ability to kill applications from Workspace Manager, a redesigned Preferences application with additional features and other polish.",
    releaseDate: [1989, 9, 11],
    prefetchChunks: [
        0, 1, 2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 125, 141, 142, 143, 144,
        149, 156, 158, 159, 160, 162, 164, 166, 168, 334, 336, 342, 343, 344,
        350, 351, 352, 365, 367, 373, 381, 382, 383, 384, 386, 387, 388, 389,
        391, 392, 393, 397, 398, 401, 402, 403, 404, 405, 406, 412, 413, 414,
        427, 428, 435, 436, 443, 444, 450, 451, 452, 474, 475, 489, 491, 512,
        513, 520, 521, 536, 543, 544, 551, 552, 576, 590, 591, 598, 599, 615,
        714, 715, 723, 724, 725, 726, 731, 732, 736, 737, 738, 739, 740, 743,
        744, 745, 746, 747, 748, 749, 750, 753, 754, 784, 838, 839, 900, 901,
        902, 903, 915, 916, 924, 931, 932, 939, 940, 941, 942, 943, 946, 947,
        948, 954, 955, 962, 963, 970, 971, 1016, 1017, 1024, 1026, 1032, 1035,
        1039, 1041, 1042, 1047, 1048, 1055, 1056, 1194, 1196, 1202, 1203, 1204,
        1241, 1264, 1265, 1304, 1307, 1583, 1587, 1589, 1594, 1791, 1792, 1800,
        1808, 1822, 1824, 1825, 1826, 1827, 1828, 1830, 1831, 1832, 1838, 1839,
        1845, 1846, 1847, 1853, 1854, 1855, 1861, 1862, 1863, 1870, 1876, 1877,
        1878, 1884, 1885, 1886, 1892, 1893, 1895, 1900, 1907, 1908, 1915, 1916,
        1928, 1954, 1955, 2481, 2482, 2483, 2489, 2490, 3318, 3319, 3807,
    ],
    machines: [NEXT_COMPUTER],
    appearance: "NeXT",
    generatedSpec: () => import("./Data/NeXTStep 1.0 HD.dsk.json"),
    notable: true,
};

const NEXTSTEP_1_0a: SystemDiskDef = {
    displayName: "NeXTStep 1.0a",
    description: "Bugfix release.",
    releaseDate: [1989, 12, 21],
    prefetchChunks: [
        0, 1, 2, 3, 4, 5, 6, 7, 9, 24, 25, 156, 164, 172, 174, 175, 179, 180,
        182, 184, 185, 186, 188, 357, 359, 365, 367, 373, 389, 390, 391, 392,
        394, 395, 396, 397, 399, 400, 401, 404, 405, 406, 409, 410, 411, 412,
        413, 414, 420, 421, 422, 435, 436, 443, 444, 450, 452, 458, 459, 460,
        481, 483, 497, 520, 521, 528, 543, 544, 551, 552, 559, 560, 598, 599,
        621, 722, 723, 731, 732, 733, 734, 738, 739, 742, 743, 745, 746, 747,
        748, 751, 752, 753, 754, 755, 756, 757, 758, 761, 776, 777, 778, 779,
        791, 792, 847, 848, 924, 932, 940, 946, 947, 948, 949, 950, 954, 955,
        956, 962, 970, 971, 977, 978, 979, 1032, 1039, 1040, 1041, 1047, 1049,
        1055, 1063, 1070, 1071, 1204, 1210, 1211, 1256, 1257, 1272, 1273, 1312,
        1314, 1591, 1595, 1597, 1602, 1800, 1808, 1816, 1830, 1831, 1832, 1833,
        1834, 1835, 1836, 1839, 1840, 1845, 1846, 1847, 1853, 1855, 1861, 1862,
        1863, 1869, 1870, 1871, 1877, 1884, 1885, 1886, 1892, 1893, 1900, 1901,
        1903, 1907, 1908, 1915, 1916, 1923, 1924, 1935, 1963, 2489, 2490, 2496,
        2497, 2498, 2504, 2505, 3807,
    ],
    machines: [NEXT_COMPUTER],
    appearance: "NeXT",
    generatedSpec: () => import("./Data/NeXTStep 1.0a HD.dsk.json"),
};

const NEXTSTEP_2_0: SystemDiskDef = {
    displayName: "NeXTStep 2.0",
    description:
        "Added support for the NeXTstation and NeXTCube and associated hardware (floppy disks, CD-ROM drives). Also included a revamped Workspace Manager with the Recycler replacing the black hole and an improved browser.",
    releaseDate: [1990, 9, 18],
    prefetchChunks: [
        0, 1, 2, 3, 4, 5, 16, 64, 65, 864, 865, 866, 867, 868, 869, 870, 871,
        872, 897, 900, 901, 902, 903, 912, 913, 929, 960, 961, 976, 977, 993,
        1008, 1009, 1010, 1056, 1088, 1089, 1136, 1137, 1152, 1153, 1184, 1185,
        1200, 1201, 1216, 1217, 1296, 1344, 1345, 1472, 1473, 1552, 1568, 1569,
        1570, 1571, 1584, 1590, 1591, 1592, 1594, 1600, 1601, 1602, 1603, 1604,
        1605, 1606, 1616, 1617, 1632, 1633, 1648, 1649, 1651, 1652, 1665, 1680,
        1681, 1682, 1683, 1685, 1697, 1700, 1703, 1713, 1714, 1745, 1746, 1760,
        1761, 1762, 1763, 1765, 1766, 1767, 1770, 1776, 1777, 1778, 1779, 1780,
        1781, 1792, 1793, 1794, 1795, 1796, 1797, 1824, 1826, 1840, 1856, 1858,
        1872, 1874, 1904, 1905, 1906, 1920, 1921, 1922, 1969, 2016, 2033, 2192,
        2193, 2256, 2257, 2272, 2273, 2288, 2289, 2291, 2688, 2689, 2690, 3745,
        3749, 3760, 3761, 3766, 3770, 3792, 3793, 3808, 3809, 3824, 3825, 3840,
        3856, 3872, 3888, 3937, 3984, 3985, 4001, 4032, 4033, 4624, 5825, 5873,
        7665,
    ],
    machines: [NEXT_STATION, NEXT_COMPUTER, NEXT_CUBE],
    appearance: "NeXT",
    generatedSpec: () => import("./Data/NeXTStep 2.0 HD.dsk.json"),
    notable: true,
};

const NEXTSTEP_2_1: SystemDiskDef = {
    displayName: "NeXTStep 2.1",
    description:
        "Added support for the NeXTdimension board and improved internationalization support.",
    releaseDate: [1991, 3, 25],
    prefetchChunks: [
        0, 1, 2, 3, 4, 5, 6, 7, 32, 64, 65, 96, 97, 128, 129, 160, 161, 288,
        289, 320, 322, 705, 834, 835, 1184, 1185, 1504, 1505, 1506, 1536, 1539,
        1540, 1760, 1761, 1762, 1763, 1764, 1765, 1766, 1767, 1768, 1769, 1770,
        1825, 1828, 1829, 1830, 1831, 1857, 1858, 1889, 1890, 1920, 1921, 1954,
        1986, 1987, 2016, 2018, 2048, 2049, 2050, 2144, 2145, 2208, 2209, 2304,
        2305, 2336, 2337, 2400, 2402, 2432, 2434, 2435, 2464, 2466, 2624, 2625,
        2626, 2720, 2721, 2976, 2978, 3136, 3137, 3168, 3169, 3170, 3172, 3201,
        3206, 3207, 3209, 3215, 3218, 3232, 3233, 3234, 3235, 3236, 3264, 3265,
        3296, 3297, 3329, 3330, 3331, 3361, 3362, 3363, 3424, 3425, 3426, 3427,
        3428, 3458, 3459, 3460, 3490, 3491, 3520, 3521, 3522, 3523, 3524, 3553,
        3554, 3555, 3556, 3557, 3584, 3585, 3648, 3649, 3650, 3651, 3652, 3653,
        3654, 3712, 3714, 3776, 3778, 3809, 3840, 3841, 3905, 3936, 3937, 3938,
        3939, 3940, 3941, 3942, 3943, 3944, 3947, 3968, 3969, 3970, 4064, 4225,
        4544, 4546, 4672, 4673, 4704, 4705, 4706, 4708, 4737, 4865, 4867, 4896,
        4897, 4928, 4929, 4930, 4962, 5120, 5216, 5217, 5248, 5249, 5280, 5281,
        5282, 5312, 5313, 5536, 5537, 5538, 5761, 7618, 7620, 7649, 7650, 7654,
        7657,
    ],
    machines: [NEXT_STATION, NEXT_COMPUTER, NEXT_CUBE],
    appearance: "NeXT",
    generatedSpec: () => import("./Data/NeXTStep 2.1 HD.dsk.json"),
};

const NEXTSTEP_2_2: SystemDiskDef = {
    displayName: "NeXTStep 2.2",
    description: "Added support for the NeXTstation Turbo.",
    releaseDate: [1992, 3, 25],
    prefetchChunks: [
        0, 1, 2, 3, 4, 5, 6, 32, 64, 65, 768, 769, 962, 992, 994, 1024, 1056,
        1057, 1089, 1184, 1185, 1216, 1217, 1248, 1249, 1280, 1281, 1664, 1665,
        1666, 1667, 1669, 1670, 1671, 1672, 1673, 1674, 1728, 1729, 1730, 1731,
        1732, 1733, 1761, 1792, 1793, 1856, 1858, 1888, 1890, 1920, 1922, 1952,
        1953, 1954, 2048, 2112, 2113, 2208, 2209, 2240, 2241, 2304, 2305, 2336,
        2337, 2368, 2369, 2370, 2528, 2530, 2560, 2624, 2625, 2880, 2882, 3040,
        3042, 3072, 3073, 3074, 3076, 3104, 3105, 3106, 3107, 3109, 3110, 3136,
        3137, 3138, 3139, 3140, 3168, 3169, 3200, 3201, 3232, 3233, 3234, 3264,
        3265, 3328, 3329, 3330, 3331, 3333, 3361, 3362, 3364, 3394, 3395, 3458,
        3459, 3460, 3461, 3462, 3490, 3491, 3552, 3553, 3554, 3618, 3648, 3651,
        3713, 3715, 3744, 3745, 3746, 3776, 3777, 3778, 3779, 3780, 3781, 3782,
        3783, 3784, 3785, 3788, 3808, 3809, 3810, 3811, 3812, 3813, 3814, 3840,
        3841, 3842, 3843, 3844, 3845, 3872, 3873, 3904, 4128, 4448, 4450, 4576,
        4578, 4608, 4609, 4610, 4611, 5024, 5025, 5026, 5793, 5798, 5801, 5825,
        5829, 5920, 5921, 5952, 5954, 5984, 5985, 5986, 6016, 6018, 6048, 6050,
        6498, 6562, 6563, 6944, 6945, 7200, 7201, 7202, 7232, 7233, 7234, 7392,
        7393, 7520, 7521, 7522, 7650,
    ],
    machines: [
        NEXT_STATION_TURBO_COLOR,
        NEXT_COMPUTER,
        NEXT_CUBE,
        NEXT_STATION,
    ],
    appearance: "NeXT",
    generatedSpec: () => import("./Data/NeXTStep 2.2 HD.dsk.json"),
};

const NEXTSTEP_3_0: SystemDiskDef = {
    displayName: "NeXTStep 3.0",
    description:
        "Introduced Distributed Objects, Project Builder and several development kits. Improved compatibility with other networking and file systems.",
    releaseDate: [1992, 9, 8],
    prefetchChunks: [
        0, 1, 2, 16, 17, 18, 19, 20, 21, 22, 32, 48, 96, 97, 240, 241, 288, 289,
        290, 384, 385, 464, 465, 496, 512, 513, 514, 515, 518, 519, 528, 530,
        531, 544, 546, 547, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569,
        570, 571, 572, 608, 609, 610, 611, 612, 613, 672, 673, 784, 785, 880,
        881, 960, 961, 1024, 1025, 1184, 1185, 1200, 1201, 1216, 1217, 1218,
        1409, 1410, 1411, 1412, 1472, 1473, 1520, 1521, 1536, 1584, 1616, 1617,
        1632, 1633, 1680, 1681, 1696, 1697, 1712, 1824, 1840, 1872, 1874, 2064,
        2065, 2176, 2177, 2192, 2800, 2801, 2832, 2833, 2944, 2945, 2960, 3088,
        3104, 3120, 3184, 3185, 3232, 3233, 3376, 3377, 3408, 3409, 3456, 3457,
        3760, 3761, 3840, 3841, 3888, 3889, 3936, 3937, 4064, 4065, 4080, 4081,
        4096, 4112, 4144, 4272, 4273, 4288, 4289, 4304, 4305, 4320, 4321, 4336,
        4337, 4400, 4401, 4402, 4403, 4404, 4405, 4416, 4417, 4432, 4433, 4448,
        4449, 4464, 4465, 4480, 4481, 4528, 4529, 4576, 4577, 4592, 4593, 4608,
        4609, 4624, 4625, 4640, 4641, 4642, 4656, 4672, 4673, 4704, 4705, 4720,
        4721, 4784, 4785, 4848, 4849, 4880, 4992, 4993, 5008, 5009, 5088, 5089,
        5216, 5217, 5232, 5233, 5249, 5265, 5266, 5269, 5270, 5273, 5274, 5275,
        5285, 5287, 5297, 5298, 5299, 5300, 5301, 5302, 5303, 5304, 5305, 5306,
        5307, 5308, 5309, 5310, 5314, 5315, 5329, 5330, 5345, 5346, 5360, 5361,
        5376, 5377, 5378, 5392, 5393, 5394, 5395, 5396, 5440, 5441, 5442, 5443,
        5696, 5697, 5698, 5712, 5713, 5728, 5729, 5745, 5746, 5760, 5761, 5762,
        5776, 5777, 5808, 5809, 5810, 5811, 5812, 5813, 5814, 5815, 5816, 6048,
        6049, 6304, 6305, 6320, 6321, 6352, 6353, 6354, 6355, 6356, 6368, 6369,
        6385, 6386, 6387, 6388, 6389, 6390, 6464, 6465, 6496, 6497, 6512, 6513,
        6592, 6593, 6672, 6720, 6721, 6864, 6865, 6880, 6881, 7040, 7041, 7056,
        7057, 7152, 7153, 7280, 7281, 7296, 7440, 7441, 7520, 7521, 7536, 7537,
        7539, 7552, 7553, 7554, 7555, 7568, 7569, 7570, 7665,
    ],
    machines: [
        NEXT_STATION_TURBO_COLOR,
        NEXT_STATION,
        NEXT_CUBE,
        NEXT_COMPUTER,
    ],
    appearance: "NeXT",
    generatedSpec: () => import("./Data/NeXTSTEP 3.0 HD.dsk.json"),
    notable: true,
};

export const ALL_DISKS = [

    SYSTEM_7_5_3_PPC

];

export const FLOPPY_DISKS = [
    SYSTEM_1_0_ORIGINAL,
    SYSTEM_7_1_2_DISK_TOOLS,
    SYSTEM_7_5_DISK_TOOLS,
    MAC_OS_8_1_DISK_TOOLS_68K,
    MAC_OS_8_1_DISK_TOOLS_PPC,
];

export const SYSTEM_DISKS_BY_NAME: {[name: string]: SystemDiskDef} =
    Object.fromEntries(
        ALL_DISKS.filter(isSystemDiskDef).map(disk => [
            systemDiskName(disk),
            disk,
        ])
    );

export const FLOPPY_DISKS_BY_NAME: {[name: string]: SystemDiskDef} =
    Object.fromEntries(FLOPPY_DISKS.map(disk => [systemDiskName(disk), disk]));

export function systemDiskName(disk: SystemDiskDef) {
    return (
        disk.displayName +
        (disk.displaySubtitle ? " - " + disk.displaySubtitle : "")
    );
}

export const NOTABLE_DISKS: SystemDiskDef[] = [];
export const NEXT_DISKS: (SystemDiskDef | PlaceholderDiskDef)[] = [];

export const DISKS_BY_YEAR: {
    [year: number]: (SystemDiskDef | PlaceholderDiskDef)[];
} = {};
export const NOTABLE_DISKS_BY_YEAR: {
    [year: number]: (SystemDiskDef | PlaceholderDiskDef)[];
} = {};
export const NEXT_DISKS_BY_YEAR: {
    [year: number]: (SystemDiskDef | PlaceholderDiskDef)[];
} = {};

ALL_DISKS.forEach(disk => {
    const [year] = disk.releaseDate;
    if (!DISKS_BY_YEAR[year]) {
        DISKS_BY_YEAR[year] = [];
    }
    DISKS_BY_YEAR[year].push(disk);
    if ("notable" in disk && disk.notable) {
        NOTABLE_DISKS.push(disk);
        if (!NOTABLE_DISKS_BY_YEAR[year]) {
            NOTABLE_DISKS_BY_YEAR[year] = [];
        }
        NOTABLE_DISKS_BY_YEAR[year].push(disk);
    }
    if (disk.machines.some(m => m.platform === "NeXT")) {
        NEXT_DISKS.push(disk);
        if (!NEXT_DISKS_BY_YEAR[year]) {
            NEXT_DISKS_BY_YEAR[year] = [];
        }
        NEXT_DISKS_BY_YEAR[year].push(disk);
    }
});

export const INFINITE_HD: EmulatorDiskDef = {
    prefetchChunks: [0, 3692, 3696, 3697, 3698],
    generatedSpec: () => import("./Data/Infinite HD.dsk.json"),
};

export const INFINITE_HD6: EmulatorDiskDef = {
    prefetchChunks: [0, 2271, 2274, 2275],
    generatedSpec: () => import("./Data/Infinite HD6.dsk.json"),
};

export const INFINITE_HD_MFS: EmulatorDiskDef = {
    prefetchChunks: [0, 1, 2],
    generatedSpec: () => import("./Data/Infinite HD (MFS).dsk.json"),
};

export const INFINITE_HD_NEXT: EmulatorDiskDef = {
    prefetchChunks: [0, 1, 2],
    generatedSpec: () => import("./Data/Infinite HD (NeXT).dsk.json"),
};

export const SAVED_HD: EmulatorDiskDef = {
    prefetchChunks: [0],
    generatedSpec: () => import("./Data/Saved HD.dsk.json"),
    persistent: true,
};

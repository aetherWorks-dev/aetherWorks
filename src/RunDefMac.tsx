import {useEffect, useState} from "react";
import {type EmulatorCDROM} from "./emulator/emulator-common";
import {type RunDef} from "./run-def";
import Mac from "./Mac";
import {getCDROMInfo} from "./cdroms";

export type RunDefMacProps = {
    runDef: RunDef;
    onDone: () => void;
};

export default function RunDefMac({runDef, onDone}: RunDefMacProps) {
    const [cdroms, setCDROMs] = useState<EmulatorCDROM[] | undefined>(
        runDef.cdromURLs.length ? undefined : []
    );
    const [cdromErrorText, setCDROMErrorText] = useState<string | undefined>(
        undefined
    );
    useEffect(() => {
        if (runDef.cdromURLs.length) {
            Promise.all(runDef.cdromURLs.map(getCDROMInfo))
                .then(setCDROMs)
                .catch(error => {
                    setCDROMErrorText(`Could not load the CD-ROM: ${error}`);
                    setCDROMs([]);
                });
        }
    }, [runDef.cdromURLs]);
    runDef.disks.forEach(disk => disk.generatedSpec()); // Prefetch the disk definition
    return cdroms ? (
        <Mac
            disks={runDef.disks}
            includeInfiniteHD={runDef.includeInfiniteHD}
            includeSavedHD={runDef.includeSavedHD}
            diskFiles={runDef.diskFiles}
            cdroms={cdroms}
            initialErrorText={cdromErrorText}
            machine={runDef.machine}
            ramSize={runDef.ramSize}
            screenSize={runDef.screenSize}
            ethernetProvider={runDef.ethernetProvider}
            customDate={runDef.customDate}
            debugFallback={runDef.debugFallback}
            debugAudio={runDef.debugAudio}
            debugPaused={runDef.debugPaused}
            debugLog={runDef.debugLog}
            debugTrackpad={runDef.debugTrackpad}
            onDone={onDone}
        />
    ) : (
        <div style={{color: "#aaa"}}>Loading CD-ROM Metadata…</div>
    );
}

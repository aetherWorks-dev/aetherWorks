import {useCallback, useEffect, useState} from "react";
import {type EmulatorSettings} from "./emulator/emulator-ui";
import {
    type EmulatorSpeed,
    type EmulatorType,
    emulatorSupportsSpeedSetting,
    EMULATOR_SPEEDS,
    emulatorSupportsMouseDeltas,
} from "./emulator/emulator-common-emulators";
import {Dialog} from "./controls/Dialog";
import {type Appearance} from "./controls/Appearance";
import {Select} from "./controls/Select";
import {Checkbox} from "./controls/Checkbox";
import {Button} from "./controls/Button";
import "./MacSettings.css";

export function MacSettings({
    emulatorType,
    emulatorSettings,
    appearance,
    setEmulatorSettings,
    onStorageReset,
    onStorageExport,
    onStorageImport,
    onSaveImage,
    hasSavedHD,
    onDone,
}: {
    emulatorType: EmulatorType;
    emulatorSettings: EmulatorSettings;
    appearance: Appearance;
    setEmulatorSettings: (settings: EmulatorSettings) => void;
    hasSavedHD: boolean;
    onStorageReset: () => void;
    onStorageExport: () => void;
    onStorageImport: () => void;
    onSaveImage: (deviceImage?: boolean) => void;
    onDone: () => void;
}) {

    const [storagePersistenceStatus, setStoragePersistenceStatus] = useState<
        "unknown" | "persistent" | "transient" | "error"
    >("unknown");

    const storagePersistenceStatusLabel = {
        "unknown": "Unknown",
        "persistent": "Persistent",
        "transient": "Transient",
        "error": <div style={{color: "#ff9999"}}>error</div>,
    }[storagePersistenceStatus];

    const handlePersistencePromise = useCallback((p: Promise<boolean>) => {
        p.then(persistent =>
            setStoragePersistenceStatus(persistent ? "persistent" : "transient")
        ).catch(e => {
            console.error("Could not use storage persistence API", e);
            setStoragePersistenceStatus("error");
        });
    }, []);


    useEffect(() => {
        handlePersistencePromise(navigator.storage.persisted());
    }, [handlePersistencePromise]);
    const handleRequestPersistence = useCallback(() => {
        handlePersistencePromise(navigator.storage.persist());
    }, [handlePersistencePromise]);

    const [storageResetVisible, setStorageResetVisible] = useState(false);
    const [storageExportVisible, setStorageExportVisible] = useState(false);
    const [storageImportVisible, setStorageImportVisible] = useState(false);
    const [saveImageVisible, setSaveImageVisible] = useState(false);

    return (
        <Dialog title="Settings" onDone={onDone} appearance={appearance}>
            <label>
                <Checkbox
                    appearance={appearance}
                    checked={emulatorSettings.swapControlAndCommand}
                    onChange={() =>
                        setEmulatorSettings({
                            ...emulatorSettings,
                            swapControlAndCommand:
                                !emulatorSettings.swapControlAndCommand,
                        })
                    }
                />
                Swap Control and Command Keys
                <div className="Dialog-Description">
                    Makes it easier to use shortcuts like Command-W, Command-Q
                    or Command-Shift-3 (which are otherwise handled by the host
                    browser or OS).
                </div>
            </label>
            {emulatorSupportsMouseDeltas(emulatorType) &&
                !emulatorSettings.trackpadMode && (
                    <label>
                        <Checkbox
                            appearance={appearance}
                            checked={emulatorSettings.useMouseDeltas}
                            onChange={() =>
                                setEmulatorSettings({
                                    ...emulatorSettings,
                                    useMouseDeltas:
                                        !emulatorSettings.useMouseDeltas,
                                })
                            }
                        />
                        Use relative mouse movements
                        <div className="Dialog-Description">
                            Send relative mouse movements to the emulator
                            instead of absolute positions. This can help with
                            compatibility of games such as Apeiron.
                        </div>
                    </label>
                )}
            {emulatorSupportsSpeedSetting(emulatorType) && (
                <label>
                    Speed:
                    <Select
                        appearance={appearance}
                        value={emulatorSettings.speed}
                        onChange={event =>
                            setEmulatorSettings({
                                ...emulatorSettings,
                                speed: parseInt(
                                    event.target.value
                                ) as EmulatorSpeed,
                            })
                        }
                    >
                        {Array.from(
                            EMULATOR_SPEEDS.entries(),
                            ([speed, label]) => (
                                <option key={`speed-${speed}`} value={speed}>
                                    {label}
                                </option>
                            )
                        )}
                    </Select>
                    <div className="Dialog-Description">
                        Very old software may be timing dependent and thus only
                        work at 1x speeds.
                    </div>
                </label>
            )}
            {hasSavedHD && (
                <>
                    <h2>Saved HD</h2>
                    <div className="MacSettings-Row">
                        <div className="MacSettings-Row-Label">Contents:</div>
                        <Button
                            appearance={appearance}
                            onClick={() => setStorageExportVisible(true)}
                        >
                            Export…
                        </Button>
                        <StorageConfirmDialog
                            appearance={appearance}
                            visible={storageExportVisible}
                            setVisible={setStorageExportVisible}
                            title="Export Disk"
                            body="Exporting the contents of Saved HD requires that the Mac be shut down. The export will take a little while to generate, and will be downloaded as a .infinitemacdisk file. Are you sure you want to export?"
                            onAccept={() => {
                                onStorageExport();
                                onDone();
                            }}
                        />{" "}
                        <Button
                            appearance={appearance}
                            onClick={() => setStorageImportVisible(true)}
                        >
                            Import…
                        </Button>
                        <StorageConfirmDialog
                            appearance={appearance}
                            visible={storageImportVisible}
                            setVisible={setStorageImportVisible}
                            title="Import Disk"
                            body="Importing a previously exported .infinitemacdisk file HD will overwrite the existing Saved HD contents and requires that the Mac be shut down. Are you sure you want to import?"
                            onAccept={() => {
                                onStorageImport();
                                onDone();
                            }}
                        />{" "}
                        <Button
                            appearance={appearance}
                            onClick={() => setStorageResetVisible(true)}
                        >
                            Reset
                        </Button>
                        <StorageConfirmDialog
                            appearance={appearance}
                            visible={storageResetVisible}
                            setVisible={setStorageResetVisible}
                            title="Reset Disk"
                            body="Are you sure you want to reset the contents of Saved HD? The contents be removed and the Mac will be restarted."
                            onAccept={() => {
                                onStorageReset();
                                onDone();
                            }}
                        />
                        <div className="Dialog-Description">
                            The contents of Saved HD as persisted across page
                            loads and between emulator instances in this
                            browser. You can import/export it to have backups
                            and to move it from one browser to another.
                        </div>
                    </div>
                    <div className="MacSettings-Row">
                        <div className="MacSettings-Row-Label" />
                        <Button
                            appearance={appearance}
                            onClick={() => setSaveImageVisible(true)}
                        >
                            Save Disk Image…
                        </Button>
                        <StorageConfirmDialog
                            appearance={appearance}
                            visible={saveImageVisible}
                            setVisible={setSaveImageVisible}
                            title="Save Image"
                            body="Saving a disk image requires that the Mac be shut down. It will take a little while to generate, and will be downloaded as a .dsk or .hda file. Generate the disk image now?"
                            onAccept={() => {
                                onSaveImage();
                                onDone();
                            }}
                            otherLabel="Save Device Image (.hda)"
                            onOther={() => {
                                onSaveImage(true);
                                onDone();
                            }}
                        />
                        <div className="Dialog-Description">
                            You can also save the contents of Saved HD as a
                            <code>.dsk</code> or <code>.hda</code> file that can
                            be loaded into other emulators.
                        </div>
                    </div>
                    <div className="MacSettings-Row">
                        <div className="MacSettings-Row-Label">
                            Persistence:
                        </div>
                        {storagePersistenceStatusLabel}
                        {storagePersistenceStatus !== "persistent" && (
                            <>
                                {" "}
                                <Button
                                    appearance={appearance}
                                    onClick={handleRequestPersistence}
                                >
                                    Request Persistence
                                </Button>
                            </>
                        )}
                        <div className="Dialog-Description">
                            Ensures that the browser will try to keep the Saved
                            HD data even when running low on disk space (
                            <a
                                href="https://web.dev/persistent-storage/"
                                target="_blank"
                            >
                                more info
                            </a>
                            ).
                        </div>
                    </div>
                </>
            )}
        </Dialog>
    );
}

function StorageConfirmDialog({
    visible,
    setVisible,
    title,
    body,
    onAccept,
    onOther,
    otherLabel,
    appearance,
}: {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    title: string;
    body: string;
    onAccept: () => void;
    onOther?: () => void;
    otherLabel?: string;
    appearance: Appearance;
}) {
    if (!visible) {
        return null;
    }
    return (
        <Dialog
            title={title}
            onDone={() => {
                setVisible(false);
                onAccept();
            }}
            doneLabel={title}
            onOther={onOther}
            otherLabel={otherLabel}
            onCancel={() => setVisible(false)}
            appearance={appearance}
        >
            <div style={{maxWidth: 400}}>{body}</div>
        </Dialog>
    );
}

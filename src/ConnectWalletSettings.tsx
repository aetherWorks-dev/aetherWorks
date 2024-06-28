import {useCallback, useEffect, useState} from "react";

import OnchainProviders from "./OnchainProviders"

// import WalletComponents from "./walletConnection"
// import { showWalletAddress } from "./walletConnection";

import * as WalletFunctions from "./walletConnection"

import {Dialog} from "./controls/Dialog";
import {type Appearance} from "./controls/Appearance";
import {Select} from "./controls/Select";
import {Checkbox} from "./controls/Checkbox";
import {Button} from "./controls/Button";
import "./MacSettings.css";

export function ConnectWalletSettings({
    appearance,
    onDone,
}: {
    appearance: Appearance;
    onDone: () => void;
}) {

    return (
        <Dialog title="Wallet Connection" onDone={onDone} appearance={appearance}>
            <label>
                <OnchainProviders>
                    <WalletFunctions.WalletComponents />
                    <WalletFunctions.showWalletAddress />
                </OnchainProviders>
                Connect Your Wallet
                <div className="Dialog-Description">
                    Connect your wallet to see the CSS in action.
                </div>
            </label>
        </Dialog>
    );
}


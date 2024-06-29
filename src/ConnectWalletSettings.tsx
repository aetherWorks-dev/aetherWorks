import {useCallback, useEffect, useState} from "react";

import OnchainProviders from "./OnchainProviders"

import { Address, Avatar, Name, Badge, Identity, EthBalance } from '@coinbase/onchainkit/identity';


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

    function generateColors() {

        const seed = document.getElementById("curAddress").textContent.toString()
        //const seed = "0x02feeb0AdE57b6adEEdE5A4EEea6Cf8c21BeB6B1"

        if (seed === null) {
            return (
                console.log("You should connect your wallet first.")
            )
        } else {

        let seedNumber = parseInt(seed, 16);
    
        // Define a basic PRNG function
        function basicPRNG(seed) {
            return function() {
                seed = Math.sin(seed) * Math.random() * 1000;
                return seed - Math.floor(seed);
            };
        }
    
        // Initialize a PRNG instance with the seed
        let rand = basicPRNG(seedNumber);
    
        // Generate 4 random colors in hexadecimal format
        let colors = [];
        for (let i = 0; i < 4; i++) {
            let randomColor = Math.floor(rand() * 0xFFFFFF); // Generate random color number
            let colorString = '#' + ('000000' + randomColor.toString(16)).slice(-6); // Pad with zeros and slice to get 6 characters
            colors.push(colorString);
        }
    
        let gradientToYield = `repeating-linear-gradient(45deg, ${colors[0]}, ${colors[1]} 15%, ${colors[2]} 20%, ${colors[3]} 30%)`;
        console.log(gradientToYield);

        document.body.style.background=gradientToYield;
        }
        

    }

    return (
        <Dialog title="Wallet Connection" onDone={onDone} appearance={appearance}>
            <label>
                <OnchainProviders>
                    <WalletFunctions.WalletComponents />
                </OnchainProviders>
                
            </label>

            <div className="MacSettings-Row">
                        <div className="MacSettings-Row-Label">PRNG Magic:</div>
                        <Button
                        appearance={appearance}
                        onClick={() => {
                        console.log('Button clicked');

                        generateColors();
                        }
                        }
                        >Generate
                        </Button>
                        
                        <div className="Dialog-Description">
                            After connecting your wallet, you will be able
                            to generate CSS gradient backgrounds, randomized
                            using your wallet address as the seed.
                        </div>
                    </div>
            
            
        </Dialog>

       
        
    );
}


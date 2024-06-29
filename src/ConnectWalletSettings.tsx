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

        const seedText = document.getElementById("curAddress").textContent.toString()
        //const seedText = "0x02feeb0AdE57b6adEEdE5A4EEea6Cf8c21BeB6B9"

        if (seedText === null) {
            return (
                console.log("You should connect your wallet first.")
            )
        } else {

        let seeding = parseInt(seedText, 16);

        const now = new Date();
        const subSeeding = now.getMilliseconds();
    
        // Define a basic PRNG function
        // function basicPRNG(seed) {
        //     return function() {
        //         seed = Math.sin(seed) * Math.random() * 1000;
        //         return seed - Math.floor(seed);
        //     };
        // }

        // Linear Congruential Generator (LCG) PRNG
        function LCG(seed: number, subSeed: number) {
            const a = 1664525;
            const c = 1013904223;
            const m = Math.pow(2, 32);
            let state = seed;

            function mixStateAndSubseed(state, subseed) {
                // Combine state and subseed using XOR and bitwise shifts
                let mixed = (state ^ subseed) >>> 0;
                mixed = (mixed ^ (mixed >>> 21)) ^ (mixed << 7) ^ (mixed << 4);
                return mixed >>> 0;
            }

            return function() {

                state = mixStateAndSubseed(state, subSeed);
                state = (a * state + c) % m;
                return state / m;
            }
            };

    
        // Initialize a PRNG instance with the seed
        let rand = LCG(seeding, subSeeding);

        function getRandomColor() {
            let randomColor = Math.floor(rand() * 0xFFFFFF); // Generate random color number
            let colorString = '#' + ('000000' + randomColor.toString(16)).slice(-6); // Pad with zeros and slice to get 6 characters
            return colorString;
        }

        // function getRandomColor() {
        //     const r = Math.floor(0 + rand() * (256 - 0));
        //     const g = Math.floor(0 + rand() * (256 - 0));
        //     const b = Math.floor(0 + rand() * (256 - 0));

        //     const colorString = '#' + ('00' + r.toString(16)).slice(-2) +
        //                           ('00' + g.toString(16)).slice(-2) +
        //                           ('00' + b.toString(16)).slice(-2);
        //     return colorString;
        // }
            
        let gradientToYield = `repeating-linear-gradient(${0 + rand() * (360 - 0)}deg, ${getRandomColor()}, ${getRandomColor()} 15%, ${getRandomColor()} 20%, ${getRandomColor()} 30%)`;
        console.log(gradientToYield);

        document.body.style.background=gradientToYield;
        }
        

    }

    return (
        <Dialog title="Wallet Connection" onDone={onDone} appearance={appearance}>

            <div className="MacSettings-Row">

                        {/* <div className="MacSettings-Row-Label">Connect:</div> */}
                        
                        <OnchainProviders>
                        <WalletFunctions.WalletComponents />
                        </OnchainProviders>
                        
                        {/* <div className="Dialog-Description">
                            The connection is powered by Coinbase Smart Wallet.
                        </div> */}
            </div>

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
                            After connecting, you will be able
                            to generate CSS gradient backgrounds, randomized
                            using your wallet address as a seed.
                        </div>
            </div>
            
            
        </Dialog>

       
        
    );
}


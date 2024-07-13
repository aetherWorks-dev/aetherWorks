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
import {Input} from "./controls/Input";
import "./MacSettings.css";
import { background } from "@coinbase/onchainkit/theme";

export function ConnectWalletSettings({
    appearance,
    onDone,
}: {
    appearance: Appearance;
    onDone: () => void;
}) {

    function generateColors() {

        const addressElement = document.getElementById("curAddress");
        //const seedText = "0x02feeb0AdE57b6adEEdE5A4EEea6Cf8c21BeB6B9"

        if (!addressElement) {
            return (
                console.log("You should connect your wallet first.")
            )
        } else {

        const seedText = document.getElementById("curAddress").textContent.toString();
        let seeding = parseInt(seedText, 16);

        //const now = new Date();
        const subSeeding = Date.now();
    
        function LCG(seed: number, subSeed: number) {
            const a = 1664525;
            const c = 1013904223;
            const m = Math.pow(2, 32);
            let state = seed;

            function mixStateAndSubseed(state, subseed) {
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


        let rand = LCG(seeding, subSeeding);

        function getRandomColor() {
            let randomColor = Math.floor(rand() * 0xFFFFFF);
            let colorString = '#' + ('000000' + randomColor.toString(16)).slice(-6);
            return colorString;
        }

        const deg = Math.floor(0 + rand() * (360 - 0));

        const color1 = getRandomColor();
        const color2 = getRandomColor();
        const color3 = getRandomColor();
        const color4 = getRandomColor();

        // saving the palette on localStorage

        window.localStorage.setItem("colorI", color1);
        window.localStorage.setItem("colorII", color2);
        window.localStorage.setItem("colorIII", color3);
        window.localStorage.setItem("colorIV", color4);

        window.localStorage.setItem("degree", deg.toString());

        //

        document.getElementById("deg").value = deg + "deg";

        document.getElementById("color1").value = color1;
        document.getElementById("color2").value = color2;
        document.getElementById("color3").value = color3;
        document.getElementById("color4").value = color4;

        document.getElementById("color1").style.backgroundColor = color1;
        document.getElementById("color2").style.backgroundColor = color2;
        document.getElementById("color3").style.backgroundColor = color3;
        document.getElementById("color4").style.backgroundColor = color4;

        let gradientToYield = `repeating-linear-gradient(${deg}deg, ${color1}, ${color2} 15%, ${color3} 20%, ${color4} 30%)`;
        console.log(gradientToYield);

        document.body.style.background=gradientToYield;
        }
        

    }

    return (
        <Dialog title="Smart Wallet Module" onDone={onDone} appearance={appearance}>

            <div className="MacSettings-Row">
                        <div className="MacSettings-Row-Label">Connection:</div>
                        
                        <OnchainProviders>
                        <WalletFunctions.WalletComponents />
                        </OnchainProviders>
                        
                        <div className="Dialog-Description">
                            This connection is powered by Coinbase Smart Wallet,
                            available thanks to OnchainKit.
                        </div>
            </div>


            <div className="MacSettings-Row">
                        <div className="MacSettings-Row-Label">Palette:</div>
                        
                        <Input
                        appearance={appearance}
                        type="text"
                        value={window.localStorage.getItem("degree") ? window.localStorage.getItem("degree")?.toString() + "deg" : "0deg"}
                        size="7"
                        id="deg"
                        />&nbsp;

                        <Input
                        appearance={appearance}
                        type="text"
                        value={window.localStorage.getItem("colorI") ? window.localStorage.getItem("colorI")?.toString() : "#000000"}
                        size="7"
                        id="color1"
                        style={{backgroundColor: window.localStorage.getItem("colorI") ? window.localStorage.getItem("colorI")?.toString() : "#000000"}}
                        />&nbsp;
                        <Input
                        appearance={appearance}
                        type="text"
                        value={window.localStorage.getItem("colorII") ? window.localStorage.getItem("colorII")?.toString() : "#000000"}
                        size="7"
                        id="color2"
                        style={{backgroundColor: window.localStorage.getItem("colorII") ? window.localStorage.getItem("colorII")?.toString() : "#000000"}}
                        />&nbsp;
                        <Input
                        appearance={appearance}
                        type="text"
                        value={window.localStorage.getItem("colorIII") ? window.localStorage.getItem("colorIII")?.toString() : "#000000"}
                        size="7"
                        id="color3"
                        style={{backgroundColor: window.localStorage.getItem("colorIII") ? window.localStorage.getItem("colorIII")?.toString() : "#000000"}}
                        />&nbsp;
                        <Input
                        appearance={appearance}
                        type="text"
                        value={window.localStorage.getItem("colorIV") ? window.localStorage.getItem("colorIV")?.toString() : "#000000"}
                        size="7"
                        id="color4"
                        style={{backgroundColor: window.localStorage.getItem("colorIV") ? window.localStorage.getItem("colorIV")?.toString() : "#000000"}}
                        />

                        <div className="Dialog-Description">
                            The generated palette will be displayed here. 
                        </div>

            </div>

            <div className="MacSettings-Row">

                        <div className="MacSettings-Row-Label">PRNG Magic:</div>

                        <Button
                        appearance={appearance}
                        onClick={() => {
                        // console.log('Button clicked');
                        generateColors();
                        }
                        }
                        >Generate
                        </Button>
                        
                        <div className="Dialog-Description">
                            After connecting, you can generate random CSS gradients, the algorithm
                            being seeded by your wallet address and the current Unix time. The last generated one will be persistent
                            throughout the session.
                        </div>
            </div>
            
            
        </Dialog>

       
        
    );
}


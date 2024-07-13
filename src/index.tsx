import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App";
import {canSaveDisks} from "./canSaveDisks";

const globalColor1 = window.localStorage.getItem("colorI");
const globalColor2 = window.localStorage.getItem("colorII");
const globalColor3 = window.localStorage.getItem("colorIII");
const globalColor4 = window.localStorage.getItem("colorIV");

const globalDegree = Number(window.localStorage.getItem("degree"));

document.body.style.background = `repeating-linear-gradient(${globalDegree}deg, ${globalColor1}, ${globalColor2} 15%, ${globalColor3} 20%, ${globalColor4} 30%)`;

try {
    canSaveDisks();
} catch (e) {
    // Ignore.
}

const root = createRoot(document.getElementById("root")!);


root.render(
        
        <App />


);

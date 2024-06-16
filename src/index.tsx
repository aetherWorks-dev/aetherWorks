
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App";
import {canSaveDisks} from "./canSaveDisks";


// const gradients = [
//       'background-1', 'background-2', 'background-3', 
//       'background-4', 'background-5', 'background-6', 
//       'background-7', 'background-8', 'background-9', 
//       'background-10'
//     ];
// const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
// document.body.classList.add(randomGradient);

// Determining if we can save data is an async operation, kick off the request
// now so that we're more likely to have the answer by the time the we actually
// need to decide if we can mount the saved disk.
try {
    canSaveDisks();
} catch (e) {
    // Ignore.
}

const root = createRoot(document.getElementById("root")!);

root.render(<App />);

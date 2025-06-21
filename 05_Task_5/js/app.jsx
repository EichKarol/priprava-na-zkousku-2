import React from "react";
import { createRoot } from "react-dom/client";



function App() {
    return (
        <>
        <Animal name="Žofka" type="Žirafa" age="7" />
        </>
    )
}


function Animal({name, type, age}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Typ: {type}</p>
            <p>Věk: {age} let</p>
        </div>
    )
}


/**
 * Do not modify the code below!
 */
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

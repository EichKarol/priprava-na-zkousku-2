import React from "react";
import { createRoot } from "react-dom/client";


function App() {
 // ... Your code goes here ...
 return (
    <>
      <h1>Welcome to the React App!</h1>
      <p>This is a simple React application.</p>
      <img src="dff" alt="ddd" />
      <button onClick={() => alert("Button clicked!")}>Click Me!</button>
    </>
 )
};


/**
 * Do not modify the code below!
 */
 const container = document.getElementById("app");
 const root = createRoot(container);
 root.render(<App />);
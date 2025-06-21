import React from "react";
import { createRoot } from "react-dom/client";
import animalData from './data/animals';

function Animal({name, type, age}) {
    return (
        <li>
            <h3>{name}</h3>
            <p>Type: {type}</p>
            <p>Věk: {age} let</p>
        </li>
    )
}

function AnimalList({animals}) {
  return (
    <div>
      <h2>Seznam zvířat</h2>
        <ul>
         {
            animals.map( (animal) => <Animal
                                        key={animal.id} 
                                        name={animal.name} 
                                        type={animal.type} 
                                        age={animal.age} 
                                        />)
         }
        </ul> 
   </div>
  );
}


function App() {
  return (
    <>
      <AnimalList animals={ animalData } />
      
    </>
  );
}



/**
 * Do not modify the code below!
 */
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);



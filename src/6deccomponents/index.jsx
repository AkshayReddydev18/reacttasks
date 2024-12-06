import React, { useState } from "react";

export default function Counterfc() {
  const [counter, setCounter] = useState(0);
  // const increment =()=>{setCounter(counter+1)}
  // const decrement =()=>{setCounter(counter-1)}

  //state lifting:: it is a technique in react where moving state from child component to a parent component , lifting it up the component tree.
  //benefits of  state lifting:
  //1. shared state: multiple state components can access and update the shared state.
  //2. easier state management:parent component maneges the state, reducing complexity in chikd components.

  const counterhandler = (action) => {
    switch (action) {
      case "increment":
        setCounter(counter + 1);
        break;
      case "decrement":
        setCounter(counter - 1);
        break;
      case "reset":
        setCounter(( 0));
        break;
      default:
        setCounter(0);
    }
  };

  return (
    <>
      <div>
        <h1>{counter}</h1>
        <button
          onClick={() => {
            counterhandler("increment");
          }}
        >
          INCREMENT
        </button>
        <button
          onClick={() => {
            counterhandler("reset");
          }}
        >
          RESET
        </button>
        <button
          onClick={() => {
            counterhandler("decrement");
          }}
        >
          DECREMENT
        </button>
        
      </div>
      <hr />
    </>
  );
}

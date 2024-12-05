import React, { useState } from "react";

export default function FuncLifeCycle() {
  const [text, setState] = useState(0); //it is in intialize stage
  const [Color, setColor] = useState("red");
  const reset = () => {
    setState(0);
  };
  useState("blue");
  const handledecre = () => setState(text - 1);
  setColor("orange");

  const handleincre = () => setState(text + 1);
  setColor("green");
  return (
    <div>
      <h1 style={{ color: Color }}>{text}</h1>
      <button style={{ color: "red" }} onClick={handledecre}>
        
        Text -1
      </button>
      <button onClick={reset}> Reset</button>
      <button style={{ color: "green" }} onClick={handleincre}>
        
        Text +1
      </button>
    </div>
  );
}

// useState is the hook of functional component
// used to ontialize/access the state

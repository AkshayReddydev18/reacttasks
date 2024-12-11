import React, { useState } from "react";
import "./index.css";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setDisplayValue("0");
    } else if (value === "D") {
      setDisplayValue(
        displayValue.length > 1 ? displayValue.slice(0, -1) : "0"
      );
    } // Delete last character
    else if (value === "=") {
      try {
        setDisplayValue(eval(displayValue).toString());
      } catch (error) {
        setDisplayValue("Error");
      }
    } else {
      setDisplayValue(displayValue === "0" ? value : displayValue + value);
    }
  };

  return (<>
  <h2>Calaculator</h2>
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button class="c" onClick={() => handleButtonClick("C")}>C</button>
        <button onClick={() => handleButtonClick("()")}>()</button>
        <button onClick={() => handleButtonClick("%")}>%</button>
        <button onClick={() => handleButtonClick("/")}>/</button>

        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>

        <button onClick={() => handleButtonClick("*")}>*</button>

        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("D")}>D</button>
        <button class="equal" onClick={() => handleButtonClick("=")}>=</button>
      </div>
    </div>
    </>
  );
}

export default Calculator;

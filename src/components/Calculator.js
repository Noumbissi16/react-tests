import React, { useState } from "react";
import { divide, multiply, substract, sum } from "utils/math-functions";

const OPERATOR = ["+", "-", "*", "/"];

function Calculator({ defaultA, defaultB, defaultOperator }) {
  const [inputValueA, setInputValueA] = useState(
    !defaultA || isNaN(defaultA) ? 0 : Number(defaultA)
  );
  const [inputValueB, setInputValueB] = useState(
    !defaultB || isNaN(defaultB) ? 0 : Number(defaultB)
  );
  const [operator, setOperator] = useState(
    OPERATOR.includes(defaultOperator) ? defaultOperator : "+"
  );

  const renderInputA = () => {
    return (
      <input
        data-testid="inputA"
        value={inputValueA}
        type="number"
        onChange={(e) =>
          setInputValueA(
            e.target.value ? Number.parseFloat(e.target.value) : ""
          )
        }
      />
    );
  };

  const renderInputB = () => {
    return (
      <input
        data-testid="inputB"
        value={inputValueB}
        type="number"
        onChange={(e) =>
          setInputValueB(
            e.target.value ? Number.parseFloat(e.target.value) : ""
          )
        }
      />
    );
  };

  const renderSelectBox = () => {
    return (
      <div>
        <select
          data-testid="operator"
          value={operator}
          className="form-select"
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value={"+"}>+</option>
          <option value={"-"}>-</option>
          <option value={"*"}>*</option>
          <option value={"/"}>/</option>
        </select>
      </div>
    );
  };

  const valueA = inputValueA || 0;
  const valueB = inputValueB || 0;

  function getResult() {
    switch (operator) {
      case "+":
        return sum(valueA, valueB);
      case "-":
        return substract(valueA, valueB);
      case "*":
        return multiply(valueA, valueB);
      case "/":
        return divideSavely(valueA, valueB);
      default:
        return "No operator provided";
    }
  }

  function divideSavely(a, b) {
    try {
      return divide(a, b);
    } catch (error) {
      return error.message;
    }
  }

  return (
    <>
      <h1 style={{ marginBottom: 40 }}>Calculator</h1>
      {renderInputA()}
      {renderSelectBox()}
      {renderInputB()}
      <h2 style={{ marginTop: 20 }}>Result</h2>
      <span data-testid="result">{getResult()}</span>
    </>
  );
}

export default Calculator;

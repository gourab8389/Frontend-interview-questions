// use-memo hook to optimize performance in a React component

import React, { useState, useMemo } from "react";

export default function ExpensiveComputation() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += number;
    }
    return result;
  }, [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Result of expensive calculation: {expensiveCalculation}</p>
    </div>
  );
}
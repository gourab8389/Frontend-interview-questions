import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount = count + 1;
  };
  const decreaseCount = () => {
    setCount = count - 1;
  };
  return (
    <div>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </div>
  );
};

export default UseState;

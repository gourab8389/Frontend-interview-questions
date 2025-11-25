// usage of useCallback to memoize a function
// why useCallback: to prevent unnecessary re-creations of functions on re-renders

import { useState, useCallback } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);
  const decriment = useCallback(() => {
    setCount((c) => c - 1);
  }, []);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
        <button onClick={decriment}>Decrement</button>
    </div>
  );
}

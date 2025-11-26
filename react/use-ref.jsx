// use-ref hook to persist values across renders in a React component

import React, { useState, useRef } from "react";

export default function PersistentValue() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  React.useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <p>Component has rendered {renderCount.current} times</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Current Count: {count}</p>
    </div>
  );
}

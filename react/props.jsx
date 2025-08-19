import { useEffect } from "react";

// Parent component passing props
function App() {
  const [message, setMessage] = useState("Hello World");

  useEffect(() => {
    async function getMessage() {
      try {
        const response = await fetch(`/api/message`);
        const message = await response.json();
        setMessage(message);
      } catch (error) {
        console.error(error.message);
      }
    }
    getMessage();
  }, [
    setTimeout(() => 5000)
  ])
  
  return <ChildComponent message={message} />;
}

// Child component receiving props
function ChildComponent({ message }) {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Message from parent: {message}</p>
      <p>Local count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
    </div>
  );
}
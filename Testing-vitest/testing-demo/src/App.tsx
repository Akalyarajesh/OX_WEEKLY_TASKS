import { useState } from "react";
import "./App.css";

type User = {
  username: string;
};

// function App({ name = "Akalya" }: { name?: string }) {
function App({ name = "Akalya" }: { name?: string }) {
  const [count, setCount] = useState(0);

  const [data, setData] = useState<User | null>(null);

  const fetchUser = async () => {
    const res = await fetch("https://fakestoreapi.com/users/1");
    const data: User = await res.json();
    setData(data);
  };

  return (
    <>
      <h1>TESTING DEMO</h1>
      <h2>{name}</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      {data && <h1>{data.username}</h1>}
      <button onClick={fetchUser}>Fetch users</button>
    </>
  );
}

export default App;

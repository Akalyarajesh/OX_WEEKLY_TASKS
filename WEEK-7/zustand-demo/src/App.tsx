import Header from "./Header";
import useStore from "./store/useStore";

function App() {
  const { count, increase, decrease } = useStore();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <Header />
    </>
  );
}

export default App;


import useStore from "./store/useStore";

const Header = () => {
  const { increase } = useStore();
  return (
    <div>
      <h1>Header</h1>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default Header;

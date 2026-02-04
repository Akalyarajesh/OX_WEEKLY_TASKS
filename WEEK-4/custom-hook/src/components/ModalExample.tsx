import { useToggle } from "../hooks/useToggle";

const ModalExample = () => {
  const { value: isOpen, toggle, setFalse } = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>Open Modal</button>

      {isOpen && (
        <div className="modal">
          <p>Modal Content</p>
          <button onClick={setFalse}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ModalExample;

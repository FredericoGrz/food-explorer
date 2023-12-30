import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";

export function Counter() {
  const [number, setNumber] = useState(1);

  function decreaseNumber() {
    if (number > 1) setNumber((prevState) => --prevState);
  }

  function increaseNumber() {
    setNumber((prevState) => ++prevState);
  }

  return (
    <div className="flex gap-3">
      <button onClick={decreaseNumber}>
        <FaMinus className="text-white text-lg" />
      </button>
      <p className="text-white text-lg">{number}</p>
      <button onClick={increaseNumber}>
        <FaPlus className="text-white text-lg" />
      </button>
    </div>
  );
}

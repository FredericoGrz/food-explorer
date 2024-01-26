import { FaMinus, FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import Proptypes from "prop-types";

export function Counter({ onChange }) {
  const [number, setNumber] = useState(1);

  function decreaseNumber() {
    if (number > 1) setNumber((prevState) => --prevState);
  }

  function increaseNumber() {
    setNumber((prevState) => ++prevState);
  }

  useEffect(() => {
    if (onChange) onChange(number);
  }, [number]);

  return (
    <div className="flex gap-3 items-center">
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

Counter.propTypes = {
  onChange: Proptypes.func,
};

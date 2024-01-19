import { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
export default function CounterApp({ value }: { value: number }): JSX.Element {
  const [counter, setCounter] = useState<number>(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  }

  const handleSubstract = () => {
    setCounter(counter - 1);
  }

  const handleReset = () => {
    setCounter(value);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>
      <button>
        <span className="button_top" onClick={ handleAdd }> + 1 </span>
      </button>
      <button>
        <span className="button_top" onClick={ handleSubstract }> - 1 </span>
      </button>
      <button>
        <span className="button_top" onClick={ handleReset }> Reset </span>
      </button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

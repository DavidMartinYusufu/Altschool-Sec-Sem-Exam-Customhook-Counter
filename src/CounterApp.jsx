import { useRef } from "react";
import useCounterHook from "./Hooks/useCounterHook";
import { NavLink } from "react-router-dom";
import "./App.css";

// Counter App UI..
function CounterApp() {
  //Destructuring Custom Hook
  const { value, handleIncrement, handleDecrement, handleReset, setValue } =
    useCounterHook();

  //Points to the input tag
  const inputRef = useRef(null);

  // Handles the set value function
  const handleInput = (e) => {
    e.preventDefault();
    const newValue = parseInt(inputRef.current.value, 10);
    // Check if newValue is a valid number
    if (!isNaN(newValue)) {
      setValue(newValue);
    } else {
      throw new Error("Invalid input. Please enter a number");
    }
    // Resets the input value to null/empty
    inputRef.current.value = "";
  };

  return (
    <section className="main">
      <main className="body">
        <div>
          <h1>Counter</h1>
        </div>

        <div className="inc-dec-btn">
          <span>
            <button className="inc-btn" onClick={handleIncrement}>
              +
            </button>
          </span>
          <span className="span-h2">
            <h2>{value}</h2>
          </span>
          <span>
            <button className="dec-btn" onClick={handleDecrement}>
              -
            </button>
          </span>
        </div>

        <div>
          <button onClick={handleReset}>Reset</button>
        </div>

        <div className="set-value-section">
          <input ref={inputRef} type="" />
          <button onClick={handleInput}>set</button>
        </div>

        <div className="links">
          <NavLink className='link1' to="/404">404</NavLink>
          <NavLink className='link2' to="/Boundary">boundary</NavLink>
        </div>
      </main>
    </section>
  );
}

export default CounterApp;

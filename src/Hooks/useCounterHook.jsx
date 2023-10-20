import { useState } from "react";

// The Custom Counter Hook..
function useCounterHook() {
  const [value, setValue] = useState(0);

  // Handles the Increment function
  const handleIncrement = () => {
    setValue((prevCount) => prevCount + 1 );
  };

  // Handles the Decrement function
  const handleDecrement = () => {
    if (value > 0) {
      setValue((prevCount) => prevCount - 1);
    } else {
      return;
    }
  };

  // Handles the Reset function
  const handleReset = () => {
    setValue(0);
  };
  

  return { value, handleIncrement, handleDecrement, handleReset, setValue };
}

export default useCounterHook;
 
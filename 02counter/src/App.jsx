import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    //Interview Question:- What happens when we use 4 setCounter(counter + 1) at same time.
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    //Ans:- This will update the value by 1 because so many same update goes in batch and answer will be only 1 update
    // To solve this we use prevCounter (as a callback in setCounter to get the prevCounter value ) it will update ui after all callbacks

    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;

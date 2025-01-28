import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  };
  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
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

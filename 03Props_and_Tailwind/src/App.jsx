// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Card from "./components/Card";
import "./App.css";

function App() {
  // let myObj = {
  //   username: "Varnit",
  //   age: 21,
  // };

  let newArr = ["Varnit", "Himanshu"];
  let btnTexts = newArr.map((name) => `Message ${name}`);
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <div className="space-y-4">
        {newArr.map((name, index) => (
          <Card key={index} username={name} btnText={btnTexts[index]} />
        ))}
      </div>
    </>
  );
}

export default App;

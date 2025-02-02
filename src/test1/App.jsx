import React, { useState } from "react";
import s from "./App.module.css";

function App() {

  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter((prevConter) => {
      return prevConter + 1
    })

    setCounter((prevConter) => prevConter + 1)
  }

  function decrement() {
    setCounter((prevConter) => {
      return prevConter - 1
    })
  }


  return (
    <div className={s.container}>
      <h1>Счетчик :{counter}</h1>
      <button onClick={increment} className={s.buttonUp}>Up</button>
      <button onClick={decrement} className={s.buttonDown}>Down</button>
    </div>);
}

export default App;

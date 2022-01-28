import { useState } from "react";

const title ="Counter App";
const counterTitle= "The counter is ";
function Counter() {
  const [counter,setCounter]=useState(0);
  const [showErro,setShowError]=useState(false);
  const dicrement =()=>{
    counter==0? setShowError(true):setCounter(counter-1);

  }
    return (
        <div className="counter-app" data-test="component-counter-app">
          <h1>{title} </h1>
          <h3>{counterTitle}  <span data-test="count">{counter}</span></h3>
          {showErro && <h1>Don't let the counter go below zero</h1>}
          <button data-test="increment-button" onClick={()=>{setCounter(counter+1); setShowError(false);}}>increment</button>
          <button data-test="dicrement-button" onClick={dicrement}>dicrement</button>
        </div>
      );
}
export default Counter;
import { useState } from "react";

export function Counter(){

  const [counter, setCounter] = useState(0);
  
  function increment(){
    setCounter(counter + 1)

  }

    return (
      <div>
        <h1>Counter</h1>
        <h2>{counter}</h2>

        <button className="btn-increment" type="button" onClick={increment}>
          Increment 
        </button>

      </div>
    )
}
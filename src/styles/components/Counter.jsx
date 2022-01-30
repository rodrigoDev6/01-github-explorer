import { useState } from "react";

export function Counter(){

  const [counter, setCounter] = useState(0);
  
  function increment(){
    
    setCounter(counter + 1)
    
    //console.log('incrementing')
  }

  return (
    <div>
      <h1>Counter basic in react</h1>
      <h2>{counter}</h2>

      <button type="button" onClick={increment}>
        Increment
      </button>

    </div>
  )
}
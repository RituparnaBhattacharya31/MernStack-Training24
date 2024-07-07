import React, { useReducer } from 'react'
import { CountReducer } from './CountReducer'

function Counter() {
  let countState = { count: 0, sum: 0 };
  const [state, dispatch] = useReducer(CountReducer, countState);
  console.log("currentState", state)
  return (
    <div>
      Count : {state.count} <br></br>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button><br></br>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  )
}

export default Counter
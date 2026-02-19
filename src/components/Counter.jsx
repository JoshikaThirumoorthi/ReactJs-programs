import React, { useState } from "react";
export default function Counter(){
    const [count,setCount]=useState(0)
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    return(
        <>
          <h2>{count}</h2>
          <button onClick={increment}class="a">INCREASE +</button>
          <button onClick={decrement}class="b">DECREASE -</button>
        </>
    )
}
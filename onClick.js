// In simple js file it will not give any output but in React js file it will give the output
import React,{useState} from 'react'


const App = () => {
  const [count,setCount] = useState(0);
  return (
    <div>
      <center>
        <h1>{count}</h1>
        <button onClick = {()=> setCount(count+1)}>Increase</button>
        <button onClick = {()=> setCount(count-1)}>Decrease</button>
        <button onClick = {()=> setCount(0)}>Reset</button>
      </center>
    </div>
  )
}

export default App
// If you click the increase button the value will be increase by 1
// If you click the decrease button the value will be decrease by 1
// If you click the reset button the value will be reset t0 0
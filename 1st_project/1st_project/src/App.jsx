import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  function increaseCount(){
    setCount(count+1)
  }

  function decreaseCount(){
    if(count>0){
      setCount(count-1)
    }
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>

    </>
  )
}

export default App

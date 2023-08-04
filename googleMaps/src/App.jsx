import { useState } from 'react'
import './App.css'
import SecondComp from './components/SecondComp'
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MyComponent/>
     {/* <SecondComp/> */}
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import MapComp from './components/MapComp'
// import MapWithADirectionsRenderer from './components/Com'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <MyComponent/> */}
     {/* <MapWit  hADirectionsRenderer/> */}
     {/* <SecondComp/> */}
     {/* <MapWithADirectionsRenderer/> */}
     <MapComp/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





function App() {
  // const [count, setCount] = useState(0)
  const [count,setCount]=useState(0)
   
  function  addnumber(){
   if(count<20){
    setCount(count+1)
   }else{
    setCount(count)
    window.alert(`LAST LIMIT IS ${count}`)
   }
  }
  function removenumber(){
    
  if(count<1){
    setCount(count)
    window.alert(`LAST LIMIT IS ${count}`)
  }else{
    setCount(count-1)
  }
   
  }

  return (
    <>
      <h1>Add Numbers And Remove Numbers</h1>
      <br/>

      <h2>number is {count}</h2>
      <br/>
      <p>last limit is 20</p>
      <button onClick={addnumber}>Add-Number</button>
      <br/>
      <button onClick={removenumber}>Remove-Number</button>
      
       
      
    </>
  )
}

export default App

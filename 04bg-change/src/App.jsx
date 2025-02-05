import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setcolor]=useState('pink')

  return (
    <div className='w-full h-screen duration-200'
     style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl'>
        
       <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
       onClick={()=>setcolor('red')}
        style={{backgroundColor:"red"}}>Red</button>

       <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
       onClick={()=>setcolor('green')}
       style={{backgroundColor:"green"}}>green</button>

       <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
       onClick={()=>setcolor('black')}
       style={{backgroundColor:"black"}}>green</button>

       <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
       onClick={()=>setcolor('blue')}
       style={{backgroundColor:"Blue"}}>Blue</button>

       <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
       onClick={()=>setcolor('olive')}
       style={{backgroundColor:"olive"}}>Olive</button>

       <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
       onClick={()=>setcolor('gray')}
       style={{backgroundColor:"Gray"}}>Gray</button>

       <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
       onClick={()=>setcolor('yellow')}
       style={{backgroundColor:"Yellow"}}>Yellow</button>

       <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
       onClick={()=>setcolor('purple')}
       style={{backgroundColor:"Purple"}}>Purple</button>
       
       <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
       onClick={()=>setcolor('white')}
       style={{backgroundColor:"white"}}>white</button>
      </div>

    </div>
    </div>
  )
}

export default App

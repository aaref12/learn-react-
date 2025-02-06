import { useState ,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [lenght,setlenght]=useState('6')
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [CharAllowed,setCharAllowed]=useState(false)
  const [pasword,setpassword]=useState('')

   const passwordRef=useRef(null)


   const PasswordGenrator=useCallback(()=>{
   let pass=""
   let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
   if(numberAllowed) str +='0123456789'
   if(CharAllowed) str +='¬!@£$%^&*()_?><}{'
   for (let i = 1; i <= lenght; i++) {
    let char = Math.floor(Math.random()*str.length+1)
        pass += str.charAt(char)
   }
   setpassword(pass)

  },[lenght,numberAllowed,CharAllowed,setpassword])
  useEffect(()=>{
    PasswordGenrator()
  },[lenght,numberAllowed,CharAllowed,PasswordGenrator])
   const copypasswordClickboard=useCallback(()=>{
    passwordRef.current.select()
    passwordRef.current.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(pasword)
   },[pasword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-3xl px-4  py-6 my-8  text-orange-500 bg-gray-600' >
        <h1 className='text-white text-center my-3 font-bold'>Password Generator</h1>
        
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white '>
          <input 
          type='text'
          value={pasword}
          className='outline-none w-full py-1 px-3 '
          placeholder='password'
          readOnly
        ref={passwordRef}
          />
          <button 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-sky-500'
          onClick={copypasswordClickboard}
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type='range'
            min={6}
            max={100}
            value={lenght}
            onChange={(e)=>{setlenght(e.target.value)}}
            className='cursor-pointer '/>
            <label className='font-bold'>Lenght:  {lenght}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}/>
            <label className='font-bold'>Number  {Number}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={CharAllowed}
            id='numberInput'
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}/>
            <label className='font-bold' htmlFor='characterInput'>Charector  {CharAllowed}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

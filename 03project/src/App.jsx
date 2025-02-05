// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './componants/card'

function App() {
    
// let obj={
//   name:'shaikh',
//   age:21
// }
// let nearry=[1,2,3,4]
  return (
    <>

    <h1 className='bg-green-500 rounded-2xl mb-5 font-semibold '>tailwind test</h1>
          
        {/* { <Card newobj={nearry}/> } */}
        <Card username='Scince' title='SCINECE'  />
        <Card username='BIO' title='BIOLOGY' />
    </>
  )
}

export default App

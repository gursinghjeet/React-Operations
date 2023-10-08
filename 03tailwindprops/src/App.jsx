import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let abj ={a:1,b:56}

  return (
    <>
      <h1 className='bg-green-800 text-black p-4 rounded-xl mb-4'>TailWind Test</h1>

      <Card channel="chaiaurcode" abje={abj} />
      <Card/>


<h2
className='bg-yellow-600 p-4 font-bold text-xl rounded-2xl text-blue-950 mt-4'
>These is a footer</h2>
    </>
  )
}

export default App

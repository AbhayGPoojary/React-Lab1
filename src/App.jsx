import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState(0)

  return (
    <>
      <div className="App  rounded-3xl p-4 w-200 h-100">
        <input className='p-2 m-2 outline-1 rounded-3xl w-120 h-14'  type="text" placeholder='Type something...' value={text} onChange={(e) => setText(e.target.value)}/>

        <h3>You Typed: <strong><span className=''>{text}</span></strong></h3>
        <h4>Number of Charactors: <span className='numbers'> {text.length} </span></h4>
      </div>
    </>
  )
}

export default App

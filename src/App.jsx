import { useState } from 'react'
import './App.css'
import Login from './Components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Login />
      
    </div>
  )
}

export default App

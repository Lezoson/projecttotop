import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Login from './components/loginpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Login />
    </div>
     </>
  )
}

export default App

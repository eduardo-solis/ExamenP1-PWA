import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Pagina from './components/Pagina'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Pagina/>
    </>
  )
}

export default App

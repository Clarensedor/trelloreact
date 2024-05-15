import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dogis from '../componentes/pantallaPrincipal'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
     <Dogis/>
    </>
  )
}

export default App

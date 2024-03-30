import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BoxList from './BoxList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BoxList />
    </>
  )
}

export default App

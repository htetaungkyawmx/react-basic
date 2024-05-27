import { useState } from 'react'
import './App.css'
import { PostComponent } from './components/PostComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
     <PostComponent></PostComponent>

    </>
  )
}

export default App

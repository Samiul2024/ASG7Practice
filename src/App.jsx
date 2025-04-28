import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import { ToastContainer } from 'react-toastify'


function App() {
  // const [count, setCount] = useState(0)

  return (
   <>
   <Home></Home>
   <ToastContainer></ToastContainer>
   </>
  )
}

export default App

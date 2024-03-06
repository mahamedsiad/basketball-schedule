import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route,} from "react-router-dom"
import Home from './com/Home'
import Nav from './com/Nav'
import Teams from './com/Teams'
import Register from './com/Register'
function App() {


  return (
    <>
      <Nav />

      <Routes>
        <Route path="Teams" element={<Teams />}></Route>
        <Route path="Home" element={<Home />}></Route>
        <Route path="Register" element={<Register />}></Route>
      </Routes>
    </>
  )
}

export default App

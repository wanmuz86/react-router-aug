import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavMenu from './components/NavMenu'

function App() {
  return (
    <>
    <NavMenu/>
     <Outlet/>
    </>
  )
}

export default App


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

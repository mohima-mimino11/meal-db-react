import { Outlet } from 'react-router-dom'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  
  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App

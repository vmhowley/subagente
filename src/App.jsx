import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import PucharseWithdrawal from './routes/PucharseWithdrawal'
import Navbar from './components/NavBar'
import { BarSide } from './components/BarSide'
import PagoTc from './routes/PagoTc'
import Notfound from './routes/NotFound.jsx'
function App () {
  return (
    <>
      <Router>
        <Navbar />
        <BarSide/>
        <div className='xl:ml-[305px] m-6'>
            <div className='bg-gradient-radial from-red-600 to-red-950 rounded-b-md absolute top-0  w-screen h-[18.75rem] left-0 z-0'></div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/tc_payment' element={<PagoTc/>} />
          <Route path='/pucharse_withdrawal' element={<PucharseWithdrawal/>} />
          <Route path='*' element={<Notfound/>} />
        </Routes>
        </div>
      </Router>
    </>
  )
}

export default App

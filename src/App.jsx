import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import PucharseWithdrawal from './routes/PucharseWithdrawal'
import Navbar from './components/NavBar'
import { BarSide } from './components/BarSide'
import PagoTc from './routes/PagoTc'
import Notfound from './routes/NotFound.jsx'
import CompraRetiro from './routes/CompraRetiro.jsx'
import { AnimatePresence } from "framer-motion";

function App (isVisible) {
  return (
    <>
      <Router>
        <AnimatePresence>

          <Navbar />
        <BarSide/>
        <div className='xl:ml-[305px] m-6'>
        {isVisible && (
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>} />
          <Route path='/tc_payment' element={<PagoTc/>} />
          <Route path='/pucharse_withdrawal' element={<CompraRetiro/>} />
          <Route path='*' element={<Notfound/>} />
        </Routes>
        )}
        </div>
        </AnimatePresence>
      </Router>
    </>
  )
}

export default App

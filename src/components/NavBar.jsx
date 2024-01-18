import React from 'react'

import vitelogo from '../assets/react.svg'
function Navbar() {
  return (
    <header className='p-6'>
      <nav className='flex justify-between'>
        <div className=' transition-all opacity-0  sm:opacity-100 flex-col xl:relative xl:translate-x-72  '>
          <div className='flex gap-1'>
            <p className='text-neutral-500'>Pages / </p>
          <h1> Dashboard</h1>
          </div>
          <h1 className='font-bold'>Dashboard</h1>
        </div>
        <div className=' sm:flex  xl:-translate-y-0 overflow-y-auto antialiased transition-opacity duration-500 -translate-x-full   xl:opacity-0 cursor-pointer '>&#9776;</div>
      </nav>
    </header>
  )
}

export default Navbar
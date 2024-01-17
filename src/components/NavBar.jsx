import React from 'react'

import vitelogo from '../assets/react.svg'
function Navbar() {
  return (
    <header className='p-4'>
      <nav className='flex '>
        <div className='flex  flex-col relative left-72'>
          <div className='flex gap-1'>
            <p className='text-neutral-500'>Pages / </p>
          <h1> Dashboard</h1>
          </div>
          <h1 className='font-bold'>Dashboard</h1>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
import React from 'react'

import vitelogo from '../assets/react.svg'
function Navbar() {
  return (
    <header >
        <section>
            <div className='z-50 fixed left-64 flex p-4 bg-gray-100 shadow-md  w-full '>
              <img src={vitelogo} alt="as" />
              <div>
                <input type="text" />
              
              </div>
            
            </div>
        </section>
    </header>
  )
}

export default Navbar
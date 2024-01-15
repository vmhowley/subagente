import React from 'react'

import vitelogo from '../assets/react.svg'
function Navbar() {
  return (
    <header className='z-50 mr-36'>
        <section>
            <div>
                <img src={vitelogo} alt="as" />
            </div>
        </section>
    </header>
  )
}

export default Navbar
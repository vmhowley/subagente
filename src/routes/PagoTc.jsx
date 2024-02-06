import React from 'react'
import PayTcForm from '../components/PayTcForm'
import { Link } from 'react-router-dom'

function PagoTc () {
  return (
      <div className="rounded-lg h-[756.9px] grid  pt-72 relative">
        <div className='grid pb-10'>
          <PayTcForm />
        </div>
        <div className=''>
        </div>
       </div>
  )
}
export default PagoTc

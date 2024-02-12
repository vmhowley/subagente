import React, { useState } from "react"
import Modal from "../components/Modal"

function PagoTc () {
  const [type, setType] = useState('')
  const [data, setData] = useState({})
  const [submit, setSubmit] = useState()
  const [tab, setTab] = useState('pago')

  const handleData = (e) => {
    e.preventDefault(e)
    console.log(data)
    document.querySelector('form').reset()
    setData('')
  }

  const handleType = () => {
    setType('reverso')
  }

  return (
    <>
    <Modal />
      <div className="flex w-full  xl:pl-36 xl:pr-36 ">
        <form
          onSubmit={(e) => handleData(e)}
          className="w-full shadow-md dark:bg-[#333b44] p-4 rounded-md bg-white"
        >
          <div className="flex gap-5 h-11 font-semibold">
            <div onClick={(e) => setTab('pago')} className={`rounded-lg w-20 cursor-pointer flex justify-center items-center ${tab === 'pago' ? 'bg-blue-100/50 border text-blue-500/90' : ''} `}>
              Pago
            </div>
            <div onClick={(e) => setTab('reverso')} className={`rounded-lg w-20 cursor-pointer flex justify-center items-center ${tab === 'reverso' ? ' bg-blue-100/50 border text-blue-500/90' : ''} `} >
              Reverso
            </div>

          </div>
          <div className="mt-10 sm:grid sm:grid-cols-2 gap-x-6 gap-y-8">
            <div className="sm:col-span-1">
              <div className="mt-2 ">
              <label htmlFor="" className="font-bold">Numero de tarjeta</label>
                <input
                  onChange={(e) => setData({ ...data, tc: e.target.value })}
                  maxLength="16"
                  type="tel"
                  name="numtar"
                  id="numtar"
                  placeholder="Numero de Tarjeta Ej.(xxxx xxxx xxxx xxxx)"
                  autoComplete="numtar"
                  className="block w-full rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <div className="mt-2">
              <label htmlFor="" className="font-bold">Moneda</label>

                <input
                  onChange={(e) => setData({ ...data, moneda: e.target.value })}
                  type="text"
                  name="moneda"
                  id="moneda"
                  autoComplete="moneda"
                  placeholder="Moneda"
                  className="block w-full rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <div className="mt-2">
                <label htmlFor="" className="font-bold">Monto</label>
                <input
                  onChange={(e) => setData({ ...data, monto: e.target.value })}
                  id="monto"
                  name="monto"
                  type="monto"
                  autoComplete="monto"
                  placeholder="Monto"
                  className="block w-full rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
            </div>
            <div className={`sm:col-span-1 ${tab === 'reverso' ? 'hidden' : 'show'}`}>
              <div className="mt-2 grid ">
                <label htmlFor="" className="font-bold">Forma de pago</label>
                <select onChange={(e) => setData({ ...data, foma_pago: e.target.value })} className="block w-full rounded-md border-0 py-2 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-2">
                  <option>Forma de pago</option>
                  <option value={1}>Efectivo</option>
                  <option value={2}>Cheque</option>
                </select>
              </div>
            </div>
            <div className={`col-span-1 ${data.foma_pago === '2' && tab === 'pago' ? 'show' : 'hidden'}`}>
              <div className="mt-2">
                <input
                  onChange={(e) => setData({ ...data, cheque: e.target.value })}
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  placeholder="Numero de Cheque"
                  className="block w-full rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
            </div>
            <div className={`col-span-1  ${tab === 'reverso' ? 'show' : 'hidden'}`}>
              <div className="mt-2">
              <label htmlFor="" className="font-bold">Numero de autorizacion</label>

                <input
                  onChange={(e) => setData({ ...data, autorizacion: e.target.value })}
                  type="text"
                  name="autorizacion"
                  id="autorizacion"
                  autoComplete="aurotizacion"
                  placeholder="Numero de autorizacion"
                  className="block w-full rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center pt-6">
          <input type="submit" value="submit" className="bg-gray-300 w-16 h-10 font-semibold rounded-full border border-blue-500/30"/>
          </div>
        </form>
      </div>
    </>
  )
}

export default PagoTc

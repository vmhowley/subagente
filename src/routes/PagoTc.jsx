import React, { useState } from 'react'
import Modal from '../components/Modal'
function PagoTc () {
  const [type, setType] = useState('')
  const [data, setData] = useState({})

  function handleData (e) {
    console.log(data)
    setSubmit(true)
  }
  const [submit, setSubmit] = useState()

  function handleType () {
    setType("reverso")
  }

  return (
    <>
{submit && <Modal/>}
    <div className="flex w-full  h- pl-60 pr-60 ">
      <form onSubmit={(e) => handleData(e)} className="w-full shadow-md dark:bg-[#333b44] p-4 rounded-md bg-white">
            <div className="mt-10 sm:grid sm:grid-cols-2 gap-x-6 gap-y-8">
              <div className="sm:col-span-1">
                <div className="mt-2 ">
                  <input
                    onChange={(e) => setData({ ...data, tc: e.target.value })}
                    maxLength="19"
                    type="tel"
                    name="numtar"
                    id="numtar"
                    placeholder="Numero de Tarjeta Ej.(xxxx xxxx xxxx xxxx)"
                    autoComplete="numtar"
                    className="block w-full rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                    value={data.tc}
                  />
                </div>
              </div>
              <div className="sm:col-span-1">
                <div className="mt-2">
                  <input
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
                  <input
                    id="monto"
                    name="monto"
                    type="monto"
                    autoComplete="monto"
                    placeholder="Monto"
                    className="block w-full rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                  />
                </div>
              </div>
              <div className="sm:col-span-1">
                <div className="mt-2">
                  <input
                    type="text"
                    name="forma-pago"
                    id="forma-pago"
                    autoComplete="forma-pago"
                    placeholder="Forma de Pago"
                    className="block w-full rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                  />
                </div>
              </div>
              <div className="col-span-2 col-start-1">
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    placeholder="Numero de Cheque"
                    className="block w-full rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                  />
                </div>
              </div>
            </div>
            <input type='submit' value='submit'/>
      </form>
      </div>
    </>
  )
}

export default PagoTc

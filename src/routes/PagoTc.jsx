import React, { useState, useEffect } from 'react'
import Modal from '../components/Modal'

function PagoTc () {
  const [type, setType] = useState('')
  const [data, setData] = useState({
    numtar: '',
    moneda: '',
    monto: '',
    forma_pago: '',
    cheque: '',
    autorizacion: ''
  })
  const [submit, setSubmit] = useState(false)
  const [tab, setTab] = useState('pago')
  const [errors, setErrors] = useState({})

  const validateValues = (inputValues) => {
    if (!inputValues.numtar) {
      errors.numtar = 'Email is too short'
    }
    return errors
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validateValues(data))
    setSubmit(true)
  }
  const finishSubmit = () => {
    console.log(data)
    setData({})
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      finishSubmit()
      setData({})
    }
  }, [errors])

  return (
    <>
      <div className="flex w-full  xl:pl-36 xl:pr-36 ">
        <form
        id='formi'
        onSubmit={handleSubmit}
          className="w-full shadow-md dark:bg-[#333b44] p-4 rounded-md bg-white"
        >
          <div className="flex gap-5 h-11 font-semibold">
            <div type="button" onClick={(e) => setTab('pago')} className={`rounded-lg w-20 cursor-pointer flex justify-center items-center ${tab === 'pago' ? 'bg-red-100/50  text-red-500/90' : ''} `}>
              Pago
            </div>
            <div onClick={(e) => setTab('reverso')} className={`rounded-lg w-20 cursor-pointer flex justify-center items-center ${tab === 'reverso' ? ' bg-red-100/50  text-red-500/90' : ''} `} >
              Reverso
            </div>

          </div>
          <div className="mt-10 sm:grid sm:grid-cols-2 gap-x-6 gap-y-8 text-sm text-slate-600">
            <div className="sm:col-span-1">
              <div className="mt-2 ">
              <label htmlFor="" className="font-semibold">Numero de tarjeta</label>
                <input
                  value={ccFormat(data.numtar) ?? ''}
                  onChange={handleChange}
                  type="tel"
                  maxLength="19"
                  name="numtar"
                  id="numtar"
                  placeholder="xxxx xxxx xxxx xxxx"
                  autoComplete="numtar"
                  className="block w-full rounded-md  py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <div className="mt-2">
              <label htmlFor="" className="font-semibold">Moneda</label>
                <select name="moneda" id="moneda" value={data.moneda ?? ''} onChange={handleChange} className="block w-full rounded-md border-0 py-2 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 ps-2">
                  <option value={214}>DOP</option>
                  <option value={840}>USD</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-1">
              <div className="mt-2">
                <label htmlFor="" className="font-semibold">Monto</label>
                <input
                  value={data.monto ?? ''}
                  onChange={handleChange}
                  id="monto"
                  name="monto"
                  type="monto"
                  autoComplete="monto"
                  className="block w-full rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
            </div>
            <div className={`sm:col-span-1 ${tab === 'reverso' ? 'hidden' : 'show'}`}>
              <div className="mt-2 grid ">
                <label htmlFor="" className="font-semibold">Forma de pago</label>
                <select name="forma_pago" id="forma_pago" value={data.forma_pago ?? ''} onChange={handleChange} className="block w-full rounded-md border-0 py-2 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 ps-2">
                  <option value={1}>Efectivo</option>
                  <option value={2}>Cheque</option>
                </select>
              </div>
            </div>
            <div className={`col-span-1 ${data.forma_pago === '2' && tab === 'pago' ? 'show' : 'hidden'}`}>
              <div className="mt-2">
                <label htmlFor="cheque" className='font-semibold'>Numero de cheque</label>
                <input
                  value={data.cheque ?? ''}
                  onChange={handleChange}
                  type="tel"
                  name="cheque"
                  id="cheque"
                  autoComplete="numero-cheque"
                  className="block w-full rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
            </div>
            <div className={`col-span-1  ${tab === 'reverso' ? 'show' : 'hidden'}`}>
              <div className="mt-2">
              <label htmlFor="" className="font-semibold">Numero de autorizacion</label>

                <input
                  value={data.autorizacion ?? ''}
                  onChange={handleChange}
                  type="text"
                  name="autorizacion"
                  id="autorizacion"
                  autoComplete="autorizacion"
                  className="block w-full rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center pt-6">
          </div>{' '}
          <div className='w-full flex justify-center'>
          <button type="submit" value="submit" className="bg-red-300/20  h-10 font-semibold rounded-xl p-4 flex items-center  text-red-500">Agregar</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default PagoTc

function ccFormat (value) {
  const v = value
    .replace(/\s+/g, '')
    .replace(/[^0-9]/gi, '')
    .substr(0, 16)
  const parts = []

  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.substr(i, 4))
  }

  return parts.length > 1 ? parts.join(' ') : value
}

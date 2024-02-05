import React from 'react'

function PayTcForm () {
  return (
    <form className="">
      <div className="bg-white dark:bg-[#333b44] p-4 rounded-md">
        <div className="border-b border-gray-900/10  pb-10">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3 resize">
            <div className="sm:col-span-1 ">
              <label
                htmlFor="numtar"
                className="block text-sm  font-bold leading-6 text-gray-900 dark:text-white"
              >
                NUMERO DE TARJETA
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="numtar"
                  id="numtar"
                  placeholder=""
                  autoComplete="numtar"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="moneda"
                className="block text-sm font-bold leading-6 text-gray-900 dark:text-white"
              >
                MONEDA
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="moneda"
                  id="moneda"
                  autoComplete="moneda"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="monto"
                className="block text-sm font-bold leading-6 text-gray-900 dark:text-white"
              >
                MONTO
              </label>
              <div className="mt-2">
                <input
                  id="monto"
                  name="monto"
                  type="monto"
                  autoComplete="monto"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="forma-pago"
                className="block text-sm font-bold leading-6 text-gray-900 dark:text-white"
              >
                FORMA DE PAGO
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="forma-pago"
                  id="forma-pago"
                  autoComplete="forma-pago"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="city"
                className="block text-sm font-bold leading-6 text-gray-900 dark:text-white"
              >
                CITY
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="region"
                className="block text-sm font-bold leading-6 text-gray-900 dark:text-white"
              >
                #CHEQUE
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>

            </div>
          </div>
        </div>
        <div className='grid-cols-9 grid '>
          <div className='col-span-2 col-start-3'>
            <label htmlFor="" className='font-bold'>CODIGO RESPUESTA</label>
            <input type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"/>
          </div>
          <div className='col-span-2 col-start-7'>
            <label htmlFor="" className='font-bold'>#Autorización</label>
            <input type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"/>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PayTcForm

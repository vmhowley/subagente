import React, { useState } from 'react'

function PayTcForm () {
  const [data, setData] = useState({})
  function handleData (e) {
    console.log(data)
    document.querySelector('input').value = data
  }
  return (
    <form onSubmit={(e) => handleData(e)}>
      <div className="bg-white shadow-md dark:bg-[#333b44] p-4 rounded-md">
        <div className="border-b border-gray-900/10 pb-6 ">
          <div className="mt-10 sm:grid sm:grid-cols-2 gap-x-6 gap-y-8 ">
            <div className="sm:col-span-1 ">
              <label
                htmlFor="numtar"
                className="block text-sm  font-bold leading-6 text-slate-600 dark:text-white"
              >
                Numero Tarjeta
              </label>
              <div className="mt-2 ">
                <input
                  onChange={(e) => setData({ ...data, tc: e.target.value })}
                  type="number"
                  name="numtar"
                  id="numtar"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  autoComplete="numtar"
                  className="block w-full rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                  value={data.tc}
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="moneda"
                className="block text-sm font-bold leading-6 text-slate-600 dark:text-white"
              >
                Moneda
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="moneda"
                  id="moneda"
                  autoComplete="moneda"
                  className="block w-full rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="monto"
                className="block text-sm font-bold leading-6 text-slate-600 dark:text-white"
              >
                Monto
              </label>
              <div className="mt-2">
                <input
                  id="monto"
                  name="monto"
                  type="monto"
                  autoComplete="monto"
                  className="block w-full rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="forma-pago"
                className="block text-sm font-bold leading-6 text-slate-600 dark:text-white"
              >
                Fomar de Pago
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="forma-pago"
                  id="forma-pago"
                  autoComplete="forma-pago"
                  className="block w-full rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
            </div>

            <div className="col-span-2 col-start-1">
              <label
                htmlFor="cheque"
                className="block text-sm font-bold leading-6 text-slate-600 dark:text-white"
              >
                #Cheque
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label
              htmlFor=""
              className="text-sm font-bold leading-6 text-slate-600 dark:text-white"
            >
              Respuesta
            </label>
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Codigo de Respuesta "
              className="block w-full h-52 rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
            />
          </div>
        </div>
      </div>
      <input type="submit" />
    </form>
  )
}

export default PayTcForm

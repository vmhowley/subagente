import React, { useState } from "react";

function SubAgent() {
  const [input, setInput] = useState({});
  const [response, setResponse] = useState({});

  const sendResponse = (e) => {
    e.preventDefault();
    if (numtar.value.length === 16) {
      setResponse({ ...response, message: "1245564", code: "002" });
      document.getElementById("ret-form").reset();
    } else {
      alert("llenar numero de tarjeta");
    }
  };

  return (
    <div className="grid p-2 justify-center">
      <form
        id="ret-form"
        onSubmit={sendResponse}
        className="w-full max-w-6xl shadow-md bg-white dark:bg-slate-800  p-6 rounded-xl z-50"
      >
        <div className="flex flex-wrap -mx-3 mb-6 justify-between">
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Numero de Tarjeta
            </label>
            <input
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              value={input.numta}
              id="numtar"
              type="number"
              placeholder="xxxx xxxx xxxx xxxx"
              onChange={(e) => setInput({ ...input, numta: e.target.value })}
            />
          </div>
          <div className="w-full md:w-1/12 px-1 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Exp
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="number"
              placeholder="MM/YY"
              minLength="10"
              maxLength="40"
              required
            />
          </div>

          <div className="w-full md:w-1/12 px-2 mb-6 md:mb-0 ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Cvv2
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="password"
              placeholder="311"
            />
          </div>
          
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Moneda
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="DOP"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Categoría
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Estacion de combustible"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Cantidad de cuotas
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Tipo de transacción
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex  justify-center mt-6">
          <button
            className="bg-slate-300 bg-opacity-50 rounded-md h-10 w-20 dark:text-white"
            type="submit"
            value="submit"
          >
            Grabar
          </button>
        </div>
      </form>
      <div className="w-full flex justify-center items-center content-center">
        <div className=" bg-gray-400 shadow-xl p-6   rounded-xl  mt-8">
          <div className="flex justify-center flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Codigo de respuesta
              </label>
              <p
                className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={response.code}
                id="grid-city"
                type="number"
                placeholder="---"
              >
                {response.code}
              </p>
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Numero de autorización
              </label>
              <p className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {response.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubAgent;

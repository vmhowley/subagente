import React, { useState } from "react";

function SubAgent() {

  const [input, setInput] = useState({});
  const [response, setResponse] = useState({});

  const sendResponse = (e) => {
    e.preventDefault();
    if (!isNaN(numtar.value) || numtar.length < 1 || numtar.value > 10){ 
      setResponse({ ...response, message: '1245564', code: '002' });
      document.getElementById('ret-form').reset()
      
    }else{
      alert('llenar numero de tarjeta')
    }
     };
  const handleChange = (e) => {
    // Here we are checking if the length is equal to 10
    if (e.target.value.length === 4) {
      console.log(e.target.value);
      document.getElementById("afil").focus();
    }
    setInput({ ...input, fec_venc: e.target.value });
  };

  return (
<<<<<<< HEAD
    <div className="grid p-2 ">
      <form
      id="ret-form"
        onSubmit={sendResponse}
        className="w-full shadow-md bg-white dark:bg-slate-800  p-6 rounded-xl z-50"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Numero de Tarjeta
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              onChange={(e) => setInput({ ...input, numta: e.target.value })}
              value={input.numta}
              id="numtar"
              type="text"
              placeholder="xxxx xxxx xxxx xxxx"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Fecha de Vencimiento
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="02/10"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Afiliado
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 dark:text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                disabled
              >
                <option>Bomba Next Av.Abraham Lincoln #601</option>
                <option>Farmacia Carol Av.Abraham Lincoln</option>
                <option>
                  Super Mercado La Cadena Av.Núñez de Cáceres #400
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-black">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
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
              Moneda
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
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Cvv2
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
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={response.code}
              id="grid-city"
              type="text"
              placeholder="---"
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              htmlFor="grid-zip"
              >
              Numero de autorización
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={response.message}
              id="grid-zip"
              type="text"
              />
          </div>
=======
    <div className='flex p-2 '>
      <form className="w-full shadow-md bg-white dark:bg-slate-800  p-6 rounded-xl z-50">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
        Numero de Tarjeta
      </label>
      <input onChange={(e) => {setInput({...input, numtc_: e.target.value})}} className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="xxxx xxxx xxxx xxxx"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
        Fecha de Vencimiento
      </label>
      <input onChange={(e) => {handleChange(e)}} className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="02/10"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" htmlFor="grid-state">
        Afiliado
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 dark:text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" disabled>
          <option>Bomba Next Av.Abraham Lincoln #601</option>
          <option>Farmacia Carol Av.Abraham Lincoln</option>
          <option>Super Mercado La Cadena Av.Núñez de Cáceres #400</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-black">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
>>>>>>> 631c40ed9e069c88d293dd69643c7d73f9c55d27
        </div>
      </div>
              </div>
    </div>
<<<<<<< HEAD
  );
=======
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
        Categoría
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Estacion de combustible"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
        Cantide de cuotas
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
        Moneda
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
        Tipo de transacción
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
        Cvv2
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" htmlFor="grid-city">
        Codigo de respuesta
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" htmlFor="grid-zip">
        Numero de autorización
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder={input.numtc_}/>
    </div>
  </div>
  <div className='flex  justify-center mt-6'>
  <button className='bg-slate-300 bg-opacity-50 rounded-md h-10 w-20 dark:text-white' type='submit' value='submit' >Grabar</button>
  </div>
</form>
    </div>
  )
>>>>>>> 631c40ed9e069c88d293dd69643c7d73f9c55d27
}

export default SubAgent;

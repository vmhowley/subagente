import React from 'react'

function SubAgent() {

  const [input, setInput] = React.useState({});
  


  const sendResponse = (e) => {
    console.log(input)
    e.preventDefault();
    alert(`Esta es la tarjeta que ingresaste ${input.numta} con esta fecha ${input.fec_venc}`)
    document.querySelector('#htmlFormu').reset();
  }
  const handleChange = (e) => {
    // Here we are checking if the length is equal to 10
    if (e.target.value.length === 4) {
      console.log(e.target.value)
      document.getElementById('afil').focus()
      
    }
    setInput({...input, fec_venc: e.target.value});
};

  return (
    <div className='flex p-2 '>
      <form className="w-full shadow-md bg-white dark:bg-slate-800  p-6 rounded-xl z-50">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
        Numero de Tarjeta
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="xxxx xxxx xxxx xxxx"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
        Fecha de Vencimiento
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="02/10"/>
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
        </div>
      </div>
    </div>
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
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
    </div>
  </div>
  <div className='flex  justify-center mt-6'>
  <button className='bg-slate-300 bg-opacity-50 rounded-md h-10 w-20 dark:text-white' type='submit' value='submit' >Grabar</button>
  </div>
</form>
    </div>
  )
}

export default SubAgent

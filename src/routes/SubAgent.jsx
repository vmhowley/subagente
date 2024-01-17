import React from 'react'

function SubAgent() {

  const [input, setInput] = React.useState({});
  


  const sendResponse = (e) => {
    console.log(input)
    e.preventDefault();
    alert(`Esta es la tarjeta que ingresaste ${input.numta} con esta fecha ${input.fec_venc}`)
    document.querySelector('#formu').reset();
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
    <div className='flex  mt-14 w-screen justify-center h-2'>
      <form id='formu' action='submit' onSubmit={(e)=> {sendResponse(e)}} className="w-max max-w-6xl ">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-max md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-num-tar">
        Numero de Tarjeta
      </label>
      <input autoComplete="cc-number" name='cc-number' className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" onChange={(e)=> {setInput({...input, numta: e.target.value})}} id="r" type="number" placeholder="xxxx xxxx xxxx xxxx"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-fec-ven">
        Fecha de Vencimiento
      </label>
      <input  onChange={e => {handleChange(e)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="fec" type="number"  placeholder="12/24"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-afil">
        Afiliado
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="afil" name='afil' autoComplete='name' type="text" placeholder="..."/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-cat">
        Categoria
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-cat" type="text" placeholder="..."/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-monto-trans">
        Monto de Transaccion
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-monto-tras" type="text" placeholder="..."/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-cvv2">
        Cvv2
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-cvv2" type="password" placeholder="..."/>
    </div>  
      <input className='bg-slate-400 relative left-3 w-28 h-8 rounded-lg mt-2' type='submit' value='submit'/>
    </div>
    <div className=''>
      <p id='response' className='p-6 font-semibold'></p>
    </div>
  </form>
    </div>
  )
}

export default SubAgent

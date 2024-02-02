import React from 'react'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'

function Hero () {
  const heroItems = [
    {
      titulo: 'PAGOS REALIZADOS',
      icon: <LocalAtmIcon sx={{ color: 'white' }}/>,
      iconColor: 'from-[#591516] to-[#ef0404]',
      subtitulo: '$53,000',
      percent: '55'
    },
    {
      titulo: 'CONSULTAS DIARIAS',
      icon: <LocalAtmIcon sx={{ color: 'white' }}/>,
      iconColor: 'from-[#591516] to-[#ef0404]',
      subtitulo: '$53,000',
      percent: '55'
    },
    {
      titulo: 'PAGOS REALIZADOS',
      icon: <LocalAtmIcon sx={{ color: 'white' }}/>,
      iconColor: 'from-[#591516] to-[#ef0404]',
      subtitulo: '$53,000',
      percent: '55'
    },
    {
      titulo: 'CONSULTAS DEL DIA',
      icon: <LocalAtmIcon sx={{ color: 'white' }}/>,
      iconColor: 'from-[#5e72e4] to-[#825ee4]',
      subtitulo: '5,100',
      percent: '8'
    }
  ]
  return (
    <div className=' relative gap-3 grid sm:grid-cols-2 sm:place-items-center xl:flex justify-center'>
      {heroItems.map((_, index) => (
        <div key={index} className=' p-4 bg-white dark:bg-[#333b44] shadow-md h-[125px] w-60 sm:w-80 md:w-96 rounded-xl flex flex-col justify-center relative'>
        <h1 className='text-neutral-600 font-semibold text-sm'>
          {_.titulo}
        </h1>
        <h1 className='font-bold text-xl'>{_.subtitulo}</h1>
        <div className='flex flex- gap-1'>
          <p className='text-green-600 font-bold'>+{_.percent}%</p>
          <p className='text-neutral-600 '>since yesterday</p>
        </div>
        <div className={`flex absolute right-4 bottom-14  rounded-full bg-gradient-to-tl ${_.iconColor} items-center w-14 h-14 justify-center`}>
          {_.icon}
        </div>
      </div>
      ))}
    </div>
  )
}

export default Hero


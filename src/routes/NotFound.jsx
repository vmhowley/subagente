'use client'
import React from 'react'
import { Empty } from 'keep-react'
import { useLocation } from 'react-router-dom'
const NotFound = () => {
  const location = useLocation()
  console.log(location.pathname)
  console.log()
  return (
    <Empty className='relative -top-14 pr-20'>
      <Empty>
        <img
          src="https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      </Empty>
      <Empty.Title>Oops! Al parecer estas perdido</Empty.Title>
      <Empty.Description>
        La Ruta a la que intenta acceder no existe.
      </Empty.Description>
      <Empty.Redirect buttonText="Volver" redirectUrl="/" />
    </Empty>
  )
}
export default NotFound

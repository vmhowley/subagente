'use client'
import React from 'react'
import { Empty } from 'keep-react'
import { useLocation } from 'react-router-dom'
const NotFound = () => {
  const location = useLocation()
  console.log(location.pathname)
  console.log()
  return (
    <Empty>
      <Empty>
        <img
          src="https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      </Empty>
      <Empty.Title>Oops! You seem to be lost</Empty.Title>
      <Empty.Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </Empty.Description>
      <Empty.Redirect buttonText="Go to Home" redirectUrl="/" />
    </Empty>
  )
}
export default NotFound

import React from 'react'
import { Link } from 'react-router-dom'

function Dropdown({ submenus, dropdown }) {
  return (
    <ul className={`relative top-5 left-14 transition-all duration-500 ease-in-out transform w-max   ${dropdown ? "show " : " hidden"}`} >
        {submenus.map((submenu, index)=> ( 

            <li key={index}
            className={'list-disc'}
            >
    <Link className="" to={submenu.path}>
    {submenu.icon}
      {submenu.text}
    </Link>
  </li>
    ))}
      </ul>
  )
}

export default Dropdown
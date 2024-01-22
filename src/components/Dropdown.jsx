import React from 'react'
import { Link } from 'react-router-dom'

function Dropdown({ submenus, dropdown }) {
  return (
    <ul className={`dropdown fllex relative -bottom-12 -left-20 ${dropdown ? "show" : "hidden"}`} >
        {submenus.map((submenu, index)=> ( 

            <li key={index}
            className={''}
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
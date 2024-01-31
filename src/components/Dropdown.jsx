import React from 'react'
import { Link } from 'react-router-dom'

function Dropdown({ submenus, dropdown }) {
  return (
    <ul
      className={` list-disc transition-all duration-500 ease-in-out transform w-max   ${
        dropdown ? 'scale-1 ' : ' scale-0'
      }`}
    >
      {submenus.map((submenu, index) => (
        <li key={index} className={''}>
          <Link className='' to={submenu.path}>
            {submenu.icon}
            {submenu.text}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Dropdown

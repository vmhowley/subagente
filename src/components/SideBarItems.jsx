import React from 'react'
import { Link } from 'react-router-dom'
function SideBarItems({text, icon, active, path}) {
  return (
    <li className={`relative flex items-center py-2 px-3 my-1 h-14  rounded-xl transition-colors ${active ? "bg-blue-500 bg-opacity-10 font-semibold":null}`}>
              <Link className='w-full' to={path}>{text}</Link>
            </li>
  )
}

export default SideBarItems
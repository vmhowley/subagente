import React from 'react'
import { Link } from 'react-router-dom'
function SideBarItems({text, icon, active, path}) {
  return (
    <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md transition-colors ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800":""}`}>
              <Link to={path}>{text}</Link>
            </li>
  )
}

export default SideBarItems
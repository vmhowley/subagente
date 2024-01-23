/* eslint-disable react/prop-types */
import React, {useState} from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown"

function SideBarItems({ items, active }) {

  const [dropdown, setDropdown] = useState(false);

  return (
    <li
      className={`relative items-center py-2 px-3 my-1 h-14  rounded-md transition-all ease-in-out  duration-500 ${
        active ? "bg-blue-400 bg-opacity-10 font-semibold" : null
      }`}
    >
        {items.submenu ? 
        <>
        <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"}
      onClick={() => setDropdown((prev) => !prev)} className="w-full flex gap-2">
      {items.icon}
        {items.text}
      </button>
        <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </> 
        :
      <Link className="w-full flex gap-2" to={items.path}>
      {items.icon}
        {items.text}
      </Link>
        }
    </li>
  );
}

export default SideBarItems;

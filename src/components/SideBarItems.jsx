import React from "react";
import { Link } from "react-router-dom";

function SideBarItems({ text, icon, active, path }) {
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 h-14  rounded-md transition-all ease-in-out  duration-500 ${
        active ? "bg-blue-400 bg-opacity-10 font-semibold" : null
      }`}
    >
      <Link className="w-full flex gap-2" to={path}>
      {icon}
        {text}
      </Link>
    </li>
  );
}

export default SideBarItems;

import React from "react";
import { Link } from "react-router-dom";

function SideBarItems({ text, icon, active, path }) {
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 h-14  rounded-md transition-colors gap-3 ${
        active ? "bg-blue-400 bg-opacity-10 font-semibold" : null
      }`}
    >
      {icon}
      <Link className="w-full" to={path}>
        {text}
      </Link>
    </li>
  );
}

export default SideBarItems;

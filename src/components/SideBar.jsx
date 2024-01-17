import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { useLocation } from "react-router-dom";
import SideBarItems from "./SideBarItems";
function Sidebar() {
  const location = useLocation();

  const [active, setActive] = React.useState();

  return (
    <aside className="h-screen w-max z-40 relative">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm relative left-0 top-0">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img src={Logo} alt="" className="w-60 " />
          <button className="font-bold"></button>
        </div>
        <ul>
          <SideBarItems
            text={"INICIO"}
            path={"/"}
            active={location.pathname == "/" ? true : false}
          />
          <SideBarItems
            text={"SUB AGENTES"}
            path={"/sub_agent"}
            active={location.pathname == "/sub_agent" ? true : false}
          />
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

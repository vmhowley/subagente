import React from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.png"
import { useLocation } from "react-router-dom"
import SideBarItems from "./SideBarItems"
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo'
import GroupsIcon from '@mui/icons-material/Groups';

function Sidebar() {
  const location = useLocation();


  return (
    <aside className="fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0 ps z-10">
      <nav className="">
        <div className="p-10 pb-8 flex justify-between items-center">
          <img src={Logo} alt="" className="" />
          </div>
        <hr className="p-2"/>
        <ul className="p-2">
          <SideBarItems
            icon={<PersonalVideoIcon color="primary"/>}
            text={"Inicio"}
            path={"/"}
            active={location.pathname == "/" ? true : false}
          />
          <SideBarItems
          icon={<GroupsIcon color="secondary"/>}
            text={"Sub Agentes"}
            path={"/sub_agent"}
            active={location.pathname == "/sub_agent" ? true : false}
          />
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

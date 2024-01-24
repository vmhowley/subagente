
"use client";
import { Sidebar } from "keep-react";
import {
  Chat,
  Handbag,
  Bank ,
  FileSearch ,
  Note ,
  SquaresFour,
  CalendarX ,
  ArrowsLeftRight ,
  CreditCard,
  Receipt,
} from "phosphor-react";
import { Link  } from "react-router-dom"
import Logo from "../assets/images/logo.png"
import { useLocation } from "react-router-dom"
import SideBarItems from "./SideBarItems"
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo'
import GroupsIcon from '@mui/icons-material/GroupsOutlined'

export const BarSide = () => {
  return (
    <aside className="fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white dark:bg-slate-600 border-0 shadow-xl dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0 ps z-10  ">
      <nav className="">
        <div className="p-6 shadow-lg  flex justify-between items-center">
          <img src={Logo} alt="" className="" />
          </div>
        <hr className="pb-8"/>
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
            
              <Link to={'/'} className="flex pl-2 gap-3 hover:bg-slate-200 h-10 rounded-md items-center">
              <SquaresFour color='#536c7e' size={24}/> Dashboard
              </Link>
            
          <Sidebar.Collapse
            icon={<GroupsIcon fill='outlined' />}
            label="Sub Agentes"
            >
             <Link to={'/'} className="flex  gap-3 hover:bg-slate-200 h-9 rounded-md items-center pl-8">
              <CreditCard color='#536c7e' size={24}/> Pago de Tarjeta
              </Link>
             <Link to={'/'} className="flex  gap-3 hover:bg-slate-200 h-10 rounded-md items-center pl-8">
              <Receipt  color='#536c7e' size={24}/> Pago de Prestamo
              </Link>
             <Link to={'/sub_agent'} className="flex  gap-3 hover:bg-slate-200 h-10 rounded-md items-center pl-8">
              <ArrowsLeftRight  color='#536c7e' size={24}/> Compra y Retiro
              </Link>
             <Link to={'/'} className="flex  gap-3 hover:bg-slate-200 h-10 rounded-md items-center pl-8">
              <FileSearch  color='#536c7e' size={24}/> Consultas del Dia
              </Link>
             <Link to={'/'} className="flex  gap-3 hover:bg-slate-200 h-10 rounded-md items-center pl-8">
              <Note  color='#536c7e' size={24}/> Cuadre Diario
              </Link>
             <Link to={'/'} className="flex  gap-3 hover:bg-slate-200 h-10 rounded-md items-center pl-8">
              <CalendarX  color='#536c7e' size={24}/> Cierre
              </Link>
             
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={<Chat size={24} />}>
            Inbox
          </Sidebar.Item>

        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </nav>
    </aside>
  );
}

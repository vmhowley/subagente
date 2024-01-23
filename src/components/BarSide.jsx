
"use client";
import { Sidebar } from "keep-react";
import {
  Chat,
  Handbag,
  ShoppingBagOpen,
  ShoppingCart,
  SignIn,
  SquaresFour,
  UserPlus,
  Users,
  CreditCard,
  Swap,
} from "phosphor-react";
import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.png"
import { useLocation } from "react-router-dom"
import SideBarItems from "./SideBarItems"
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo'
import GroupsIcon from '@mui/icons-material/GroupsOutlined'

export const BarSide = () => {
  return (
    <aside className="fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white dark:bg-slate-600 border-0 shadow-xl dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0 ps z-10">
      <nav className="">
        <div className="p-6 shadow-lg  flex justify-between items-center">
          <img src={Logo} alt="" className="" />
          </div>
        <hr className="pb-8"/>
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={<SquaresFour size={24} />}>
            <Link  to={'/'}>Dashboard</Link>
          </Sidebar.Item>
          <Sidebar.Collapse
            icon={<GroupsIcon fill='outlined' />}
            label="Sub Agentes"
            >
            <Sidebar.Item href="/sub_agent" icon={<CreditCard   size={24} />}>
              <Link to={'/sub_agent'}>Pago de Tarjeta </Link>
            </Sidebar.Item>
            <Sidebar.Item href="/sub_agent" icon={<Swap  size={24} />}>
              <Link to={'/sub_agent'}>Reverso Pago Tarjeta </Link>
            </Sidebar.Item>
            <Sidebar.Item href="/sub_agent" icon={<Handbag size={24} />}>
              <Link to={'/sub_agent'}>Retiro Debito </Link>
            </Sidebar.Item>
            <Sidebar.Item href="/sub_agent" icon={<Handbag size={24} />}>
              <Link to={'/sub_agent'}>Retiro Credito </Link>
            </Sidebar.Item>
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

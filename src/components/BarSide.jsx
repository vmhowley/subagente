import React from 'react'
import { Sidebar } from 'keep-react'
import {
  Chat,
  FileSearch,
  Note,
  SquaresFour,
  CalendarX,
  ArrowsLeftRight,
  CreditCard,
  Receipt
} from 'phosphor-react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import GroupsIcon from '@mui/icons-material/GroupsOutlined'

export const BarSide = () => {
  return (
    <div className='fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full  shadow-xl dark:bg-slate-850 max-w-64 ease-nav-brand -z-1 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0 ps z-10'>
      <Sidebar className='side' >
        {/* Logo */}
        <Sidebar.Logo className='p-2 flex justify-center pb-8' img={Logo} />
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Link
              to={'/'}
              className='flex pl-2 gap-3 hover:bg-slate-200 h-10 rounded-md items-center'
            >
              <SquaresFour color='#536c7e' size={24} /> Resumen
            </Link>
            <Sidebar.Collapse
              className=''
              icon={<GroupsIcon fill='outlined' />}
              label='Sub Agentes'
            >
              <Link
                to={'/tc_payment'}
                className='flex  gap-3 hover:bg-slate-200 h-9 rounded-md items-center pl-8'
              >
                <CreditCard color='#536c7e' size={24} /> Pago de Tarjeta
              </Link>
              <Link
                to={'/'}
                className='flex  gap-3 hover:bg-slate-200 h-10 rounded-md items-center pl-8'
              >
                <Receipt color='#536c7e' size={24} /> Pago de Préstamo
              </Link>
              <Link
                to={'/pucharse_withdrawal'}
                className='flex  gap-3 hover:bg-slate-200 h-10 rounded-md items-center pl-8'
              >
                <ArrowsLeftRight color='#536c7e' size={24} /> Compra y Retiro
              </Link>
              <Link
                to={'/'}
                className='flex  gap-3 hover:bg-slate-200 h-10 rounded-md items-center pl-8'
              >
                <FileSearch color='#536c7e' size={24} /> Consultas del Dia
              </Link>
              <Link
                to={'/'}
                className='flex  gap-3 hover:bg-slate-200 h-10 rounded-md items-center pl-8'
              >
                <Note color='#536c7e' size={24} /> Cuadre Diario
              </Link>
              <Link
                to={'/'}
                className='flex  gap-3 hover:bg-slate-200 h-10 rounded-md items-center pl-8'
              >
                <CalendarX color='#536c7e' size={24} /> Cierre
              </Link>
            </Sidebar.Collapse>
            <Sidebar.Item href='#' icon={<Chat size={24} />}>
              Inbox
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  )
}

import React from 'react'
import Logo from '../assets/images/logo.png'
import { useLocation } from 'react-router-dom'
import SideBarItems from './SideBarItems'
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo'
import GroupsIcon from '@mui/icons-material/Groups'

function Sidebar () {
  const location = useLocation()
  const menuITems = [
    {
      text: 'Dashboard',
      path: '/',
      icon: <PersonalVideoIcon color='primary' />
    },
    {
      text: 'Sub Agentes',
      path: '/sub_agent',
      icon: <GroupsIcon color='secondary' />,
      submenu: [
        {
          text: 'Retiros',
          path: '/sub_agent'
        },
        {
          text: 'Depositos',
          path: '/sub_agent/depositos'
        }
      ]
    }
  ]

  return (
    <aside className='fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-[#fcfcfc] dark:bg-slate-600 border-0 shadow-xl dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0 ps z-10'>
      <nav className=''>
        <div className='p-6 shadow-lg  flex justify-between items-center'>
          <img src={Logo} alt='' className='' />
        </div>
        <hr className='pb-8' />
        <ul className='p-2'>
          {menuITems.map((menu, index) => {
            return (
              <SideBarItems
                items={menu}
                key={index}
                active={location.pathname === menu.path ? true : ''}
              />
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

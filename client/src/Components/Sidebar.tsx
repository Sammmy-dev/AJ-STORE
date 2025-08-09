"use client"

import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsSidebarCollapsed } from '@/state'
import { Menu } from 'lucide-react'
import React from 'react'

const Sidebar = () => {

    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    };

    const sidebarClassNames = `fixed flex flex-col ${ isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"} bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;
  return (
    <div className={sidebarClassNames}>

        <div className='flex gap-3 justify-between md:justify-normal items-center pt-8'>
            <div>Logo</div>

            <h1 className=' font-extrabold text-2xl uppercase'>ajstock</h1>

            <button className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={toggleSidebar}>
                <Menu className='w-4 h-4'/>
            </button>
        </div>

        <div className='flex flex-col gap-3 mt-10'>
            <button className='text-gray-700 hover:text-blue-500'>Dashboard</button>
            <button className='text-gray-700 hover:text-blue-500'>Products</button>
            <button className='text-gray-700 hover:text-blue-500'>Groups</button>
            <button className='text-gray-700 hover:text-blue-500'>Settings</button>
        </div>

        {/* footer */}
        <div className='text-center text-gray-500 text-xs'>
            <p>© 2023 Ajstock. All rights reserved.</p>
        </div>

    </div>
  )
}

export default Sidebar
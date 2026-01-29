'use client'
import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { HiMenuAlt1 } from "react-icons/hi";
import SearchBox from '../SearchBox';
import { MdLightMode } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import  Cookies from 'js-cookie';
import { MyContext } from '@/Context/ThemeProvider';
const Header = () => {
    const context=useContext(MyContext);
    
    const changeTheme=()=>{
    const newTheme=context.theme==="light"?"dark":"light";
    context.setTheme(newTheme);
    Cookies.set("theme",newTheme);
    document.documentElement.classList.toggle('dark', newTheme==="dark");
}

  return (
    <header className="flex fixed top-0 right-0 z-[100] w-[82%] px-4 py-3 justify-between shadow-md">
      <div className='flex items-center gap-3'>
         <Button className='!min-w-[40px] !w-[40px] !h-[40px] !rounded-full !text-gray-800  hover:!bg-gray-200 dark:!text-gray-200 dark:hover:!bg-gray-800' ><HiMenuAlt1 size={25} /></Button>

    <SearchBox placeholder='Search...' width='300px'/>
    
      </div>
      <div className='flex items-center gap-3'>
         <Button className='!min-w-[40px] !w-[40px] !h-[40px] !rounded-full !text-gray-800 hover:!bg-gray-200 dark:!text-gray-200 dark:hover:!bg-gray-800' onClick={()=>changeTheme()}><MdLightMode size={25}  /></Button>
  <Button className='!min-w-[40px] !w-[40px] !h-[40px] !rounded-full !text-gray-800 hover:!bg-gray-200 dark:!text-gray-200 dark:hover:!bg-gray-800' ><FaRegBell size={22} /></Button>


<div className='flex items-center gap-2'>
<Button  className='!w-[40px] !min-w-[40px] !h-[40px] !rounded-full flex items-center justify-center !bg-medium !text-white dark:!bg-blue-600'>
    R
</Button>
</div>
    
      </div>
      </header>
  )
}

export default Header

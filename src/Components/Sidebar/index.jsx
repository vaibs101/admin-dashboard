'use client'

import { sidebarMenu } from '@/data'
import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import {Collapse} from 'react-collapse';
const Sidebar = () => {

    const [isToggleSubMenu, setIsToggleSubMenu] = useState(false);
    const [toggleIndex, setToggleIndex] = useState(null);

    const toggleTab = (index) => {
        setToggleIndex(index);
        setIsToggleSubMenu(!isToggleSubMenu);
    }

  return (
    <aside className="w-[18%] h-screen max-h-screen overflow-y-scroll overflow-x-hidden p-3
    border-r-[1px] border-[rgba(0,0,0,0.1)] fixed top-0 left-0">
     <Link href="/"><Image src="/aegisLogo.webp" width={120} height={40} alt='logo'/></Link>
    <div className='sidebarMenu mt-4'>
        {sidebarMenu?.length!==0 &&
        <ul className='w-full'>
            {sidebarMenu?.map((menu, index) => {
               return ( 
               <li className='w-full relative group' key={index}>
                   {menu?.items?.length>0 ?
                   <Button variant="text" className={`w-full !capitalize text-left !justify-start !text-medium group-hover:!bg-gray-200 gap-2 !py-[8px] 
                   !font-[600] !text-[13px] dark:text-gray-200 ${toggleIndex===index && isToggleSubMenu === true? '!bg-gray-200' : ''}`}  onClick={()=>toggleTab(index)}>{menu?.icon}{menu?.title}</Button>
                   :
                   <Link href={menu?.href} >
                    <Button variant="text" className='w-full !capitalize text-left !justify-start !text-medium group-hover:!bg-gray-200 gap-2 !py-[8px] 
                   !font-[600] !text-[13px] dark:text-gray-200'>{menu?.icon}{menu?.title}</Button>
                   
                    </Link>
                }
                   {
                    menu?.items?.length>0 &&
                    <span className='!absolute !min-w-[30px] !rounded-full !w-[30px] !h-[30px] z-[50] top-[5px] right-[10px] 
                    flex items-center cursor-pointer !text-medium' onClick={()=>toggleTab(index)}>
                        <FaAngleDown size={15} className={`${toggleIndex===index && isToggleSubMenu === true? 'rotate-180' : ''}`}  /></span>
                   }
                   {
                    menu?.items?.length>0 &&
                    <Collapse isOpened={toggleIndex===index ? isToggleSubMenu : false}>
                    <div className='submenu w-full py-1 flex  flex-col'>{
                        menu?.items?.map((item, index) => (
                            <Link key={index} href={item?.href} className='block w-full'><Button className=' !capitalize w-full !text-[12px] gap-2 !pl-3 !text-left !justify-start !text-medium hover:bg-gray-200'>
                                <span className='w-[5px] h-[5px] rounded-full bg-gray-500'></span>{item?.title}</Button></Link>
                        ))
                    }</div>
                    </Collapse>
                   }
                </li>
               )
})}
        </ul>
}
    </div>
    
    </aside>
  )
}

export default Sidebar

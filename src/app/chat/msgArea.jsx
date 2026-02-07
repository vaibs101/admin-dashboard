'use client'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { CiMenuKebab } from 'react-icons/ci'
import { FiBell } from 'react-icons/fi'
import { RiShareForward2Line } from 'react-icons/ri'
import { FaRegTrashAlt } from 'react-icons/fa'
import { TiArrowRight } from 'react-icons/ti'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const MsgArea = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className='w-full h-[95vh] border border-[rgba(0,0,0,0.1)] rounded-lg overflow-hidden'>
         <div className='header_ w-full bg-gray-100 flex items-center justify-between 
         border-b-[1px] border-[rgba(0,0,0,0.1)] px-3 py-6'>
          <div className='flex items-center gap-4'>
            <span className='w-14 h-14 rounded-full overflow-hidden'>
                <img src={props?.currActiveUser?.image} className='w-full'/>
            </span>
            <div className='flex flex-col'>
          <h3 className='font-bold text-[16px] text-gray-600 leading-4'>{props?.currActiveUser?.name}</h3>
          <p className='text-[14px] text-gray-600'>Last seen recently</p>
         </div>
          </div>

          <div className='relative'>
            <Button className='!w-10 !h-10 !min-w-10 !rounded-full !text-gray-800'
            onClick={handleClick}>
                <CiMenuKebab size={20} className='text-gray-700'/>
                </Button>
                <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleClose} className='gap-1 !py-3'>
        <FiBell size={17}/>Mute</MenuItem>
        <MenuItem onClick={handleClose} className='gap-1 !py-3'><RiShareForward2Line size={17}/>Share Content</MenuItem>
        <MenuItem onClick={handleClose} className='gap-1 !py-3 !text-red-600'>
        <FaRegTrashAlt size={17}/>Delete</MenuItem>
      </Menu>
          </div>
         </div>
         <div className='w-full p-5'>
         <div className='msgAreaScroll  max-h-[65vh] overflow-y-auto pr-5 pb-10 mb-3'>
            <div className='flex justify-end py-2'>
                <span className='inline-block bg-gray-100 p-2 rounded-lg text-[15px]'>Hey, can I ask something?</span>

            </div>
            <div className='userMsg flex gap-3 py-2'>
                <span className='w-14 h-10 rounded-full overflow-hidden'>
                <img src={props?.currActiveUser?.image} className='w-full'/>
            </span>
                <div>
                <span className='inline-block bg-gray-100 p-2 rounded-lg text-[15px]'>Sure, Whatsup!</span>
</div>
            </div>
            <div className='flex justify-end py-2'>
                <span className='inline-block bg-gray-100 p-2 rounded-lg text-[15px] max-w-[300px]'>Im thinking about applying for a new job
                    but im not sure if it's right move.
                </span>

            </div>
<div className='userMsg flex gap-3 py-2'>
                <span className='w-14 h-10 rounded-full overflow-hidden'>
                <img src={props?.currActiveUser?.image} className='w-full'/>
            </span>
                <div>
                <span className='inline-block bg-gray-100 p-2 rounded-lg text-[15px] max-w-[300px]'>Whats making u hesitate?</span>
</div>
            </div>
             <div className='flex justify-end py-2'>
                <span className='inline-block bg-gray-100 p-2 rounded-lg text-[15px] max-w-[300px]'>
               It's a bigger company and a more challenging role. I'm worried it might be too much to handle.

                </span>

            </div>
            <div className='userMsg flex gap-3 py-2'>
                <span className='w-14 h-10 rounded-full overflow-hidden'>
                <img src={props?.currActiveUser?.image} className='w-full'/>
            </span>
                <div>
                <span className='inline-block bg-gray-100 p-2 rounded-lg text-[15px] max-w-[300px]'>
                    I think you should go for it. ou're more than capable and it sounds like a
                    good opportunity for growth.
                    </span>
</div>
            </div>
            <div className='flex justify-end py-2'>
                <span className='inline-block bg-gray-100 p-2 rounded-lg text-[15px] max-w-[300px]'>
              Thanks, I needed that encouragement. I'll start working on my application
                </span>

            </div>

         </div>

         <div className='relative w-full h-12 border border-[rgba(0,0,0,0.3)] rounded-lg overflow-hidden'> 
          <input type='text' 
          className='w-full h-full outline-none px-10'
          placeholder='Enter a promt here...'/>
          <Button className='!min-w-[35px] !h-[30px] !w-[35px] !rounded-full
          !bg-gray-800 !text-white !absolute top-[5px] right-2 z-50'><TiArrowRight size={20}/></Button>
         </div>
         </div>
      </div>
    </>
  )
}

export default MsgArea

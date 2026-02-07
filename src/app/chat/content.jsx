'use client'
import React, { useEffect, useState } from 'react'
import MsgArea from './msgArea';

const Content = (props) => {
    const [currActiveUser,setCurrActiveUser]=useState(null);
    useEffect(()=>{
      setCurrActiveUser(props.currActiveUser)
    },[props.currActiveUser])

  return (
    <>
      <div className='w-[75%] h-screen p-5 pl-0'>
        {currActiveUser===null ?
        <div className='box border border-[rgba(0,0,0,0.2)] h-[95vh] w-full rounded-md'>
        <div className='no-msg flex flex-col items-center justify-center h-screen gap-2'>
            <img src='./chat-content.jfif' alt='no image'></img>
            <h3 className='font-bold text-[25px] text-center'>Start Chatting!</h3>
            <p className=' text-[18px] text-center text-gray-700'>Pick a Conversation or Begin a New One</p>
        </div>
        </div>
        :
        <>
           {currActiveUser!==null && <MsgArea currActiveUser={currActiveUser}/>}
         </>
    }
        
      </div>
    </>
  )
}

export default Content

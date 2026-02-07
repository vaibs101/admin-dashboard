"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { chatUserData } from "@/data";
import { IoMdClose } from "react-icons/io";
import { Button } from "@mui/material";

const SideBar = (props) => {
    const [isActiveTab, setIsActiveTab] = useState(0);
    const [isActiveUser, setIsActiveUser] = useState(null);
    
    const [isOpenSearch,setIsOpenSearch]=useState(false);
    const [searchTerm,setSearchTerm]=useState('');

    const filterData=chatUserData.filter(item=>item?.name?.toLowerCase().includes(searchTerm?.toLowerCase()));

    const activeUser=(user,index)=>{
        setIsActiveUser(index);
      props.activeUser(user,index);
    }
  return (
    <aside className=" w-[25%] h-screen p-5 py-2">
      <div className="flex items-center justify-between relative my-5">
        <h3 className="text-[22px] font-bold">Chat</h3>
        <Button 
        className="!w-[33px] !min-w-[33px] !h-[33px] !rounded-full
         !bg-[#f1f1f1] !text-gray-700 absolute top-0 z-[55]"
         onClick={()=>{setIsOpenSearch(!isOpenSearch);
            setSearchTerm('');
         }}>
         {isOpenSearch===true ? <IoMdClose size={20} className="text-gray-700" />:
         <IoSearch size={20} className="text-gray-700" />} 
        </Button>
        {isOpenSearch &&
        <div className='search w-full h-[35px] absolute top-0 right-0 z-50'>
          <input type='text' 
          className="w-full h-full border-0 
          rounded-full focus:border-[rgba(0,0,0,0.3)] outline-none
           bg-white px-3 placeholder-gray-700" 
           value={searchTerm}
           onChange={(e)=>{setSearchTerm(e.target.value)}}
          placeholder="Search Chat"/>
        </div>
        }
        
      </div>

      <div className="bg-gray-200 w-full rounded-lg p-2 grid grid-cols-2 gap-3">
        <button
          onClick={() => setIsActiveTab(0)}
          className={`!gap-2 flex !items-center p-2 py-[8px] justify-center !capitalize !text-gray-700 !font-[600] !rounded-lg ${isActiveTab === 0 && "bg-white"}`}
        >
          <FaRegUser size={18} className="text-gray-700" />
          Personal
        </button>
        <button
          onClick={() => setIsActiveTab(1)}
          className={`!gap-2 flex !items-center p-2 py-[8px] justify-center !capitalize !text-gray-700 !font-[600] !rounded-lg ${isActiveTab === 1 && "bg-white"}`}
        >
          <FiUsers size={18} className="text-gray-700" />
          Group
        </button>
      </div>
      <div className="userChatScroll pr-3 my-4 max-h-[60vh] overflow-y-scroll">
        <div className="flex flex-col gap-2">
          {filterData?.length !== 0 &&
            filterData.map((user, index) => (
              <div
                className={`tab flex items-center  gap-3 py-3 px-2 hover:bg-gray-200 rounded-lg cursor-pointer ${isActiveUser===index?'bg-gray-200':''}`}
                key={index}
                onClick={()=>activeUser(user,index)}
              >
                <span className="flex items-center justify-center overflow-hidden w-[40px] h-[40px] rounded-full">
                  <img
                    src={user.image}
                    className="w-full h-full object-cover"
                  ></img>
                </span>

                <div className="info flex flex-col" title={user.name}>
                  <h4 className="font-[600] text-[16px] leading-4">
                    {user.name.substr(0, 10) + "..."}
                  </h4>
                  <span className="font-[600] text-[13px]">
                    {user?.msg.substr(0, 18) + "..."}
                  </span>
                </div>
                <span className=" text-[13px] ml-auto">{user.time}</span>
              </div>
            ))}
        </div>
      </div>
      <div className="my-4">
        <Button className="w-full !capitalize btn-dark" size="large">
          New Chat
        </Button>
      </div>
    </aside>
  );
};

export default SideBar;

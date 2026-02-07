"use client";
import React, { useState } from "react";
import SideBar from "./sidebar";
import Content from "./content";
const Chat = () => {

    const [currActiveUser,setCurrActiveUser]=useState(null);

    const activeUser=(user,index)=>{
      setCurrActiveUser(user);
    }
  return (
    <section className="bg-white z-[100] w-full h-screen fixed top-0 left-0 flex gap-8">
      <SideBar activeUser={activeUser}/>
      <Content currActiveUser={currActiveUser}/>
    </section>
  );
};

export default Chat;

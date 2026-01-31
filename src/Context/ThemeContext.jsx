"use client"

import { useEffect, useState } from "react";
import  Cookies from 'js-cookie';
import Sidebar from "@/Components/Sidebar";
import Header from "@/Components/Header";

const { MyContext } = require("./ThemeProvider");


const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState("light");
const [isToggleSideBar,setIsToggleSideBar]=useState(false);

    useEffect(()=>{
     const storedTheme=Cookies.get("theme");
        if(storedTheme){
            setTheme(storedTheme);
            document.documentElement.classList.toggle('dark', storedTheme==="dark");
        }
    },[]);
    const values={theme,setTheme, isToggleSideBar,setIsToggleSideBar};
return(
<MyContext.Provider value={values}>
<div className="main flex">
<div className={"sidebarWrapper  h-screen transition-all"} style={{width: isToggleSideBar===false ? '18%' : '0%' , opacity: isToggleSideBar===false ? '1' : '0'}}>
<Sidebar />
</div>
<div className={"rightContent transition-all"} style={{width: isToggleSideBar===false ? '82%' : '100%'}}>
  <Header/>
 <div className="px-4  pt-20">
 {children}
    </div>  
</div>
        </div>
</MyContext.Provider>
)
}

export default ThemeProvider;
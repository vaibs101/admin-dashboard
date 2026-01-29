"use client"
import DashboardBoxes from "@/Components/DashboardBox";
import { Button } from "@mui/material";
import { FiPlus } from "react-icons/fi";
export default function Home() {
  return (
   <>
   <div className="box_dashboard mb-4 w-full h-[250px] rounded-md border 
   border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.1)] px-5 py-1 flex items-center justify-between dark:bg-themeDark">
    <div className="leftCol flex flex-col gap-4">
      <h2 className="text-[35px] font-bold dark:text-gray-200">Welcome back, Admin!</h2>
     <p className="text-[16px] text-gray-800 dark:text-gray-200">Here's what happening on your store today, See the statistics</p>
    <div>
    <Button className="!bg-dark !text-white !capitalize !font-[600] !px-4 dark:!bg-white dark:!text-black"><FiPlus size={20} className="text-white dark:!text-black"/>Add Product</Button>
    </div>
    </div>
    <div className="rightCol w-[250px]">
<img src="/shop-logo.png" className="w-full" />
    </div>
   </div>
   <DashboardBoxes />
   </>
  );
}

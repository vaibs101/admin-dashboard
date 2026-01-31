"use client"
import DashboardBoxes from "@/Components/DashboardBox";
import { Button } from "@mui/material";
import { FiPlus } from "react-icons/fi";
import { AreaChart, Area, Tooltip } from 'recharts';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Legend, Scatter } from 'recharts';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
import { TbSocial } from "react-icons/tb";
export default function Home() {
  const profitData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const salesData = [
  {
    name: 'Jan',
    revenue: 5000,
    expense: 1500,
  },
  {
    name: 'Feb',
    revenue: 7000,
    expense: 4500,
  },
  {
    name: 'Mar',
    revenue: 3000,
    expense: 500,
  },
  {
    name: 'Apr',
    revenue: 6500,
    expense: 3500,
  },
  {
    name: 'May',
    revenue: 8000,
    expense: 2500,
  },
  {
    name: 'June',
    revenue: 7500,
    expense: 4500,
  },
  {
    name: 'July',
    revenue: 3000,
    expense: 500,
  },
  {
    name: 'August',
    revenue: 9000,
    expense: 2500,
  },
  {
    name: 'September',
    revenue: 7800,
    expense: 2200,
  },
  {
    name: 'October',
    revenue: 7000,
    expense: 2500,
  },
  {
    name: 'November',
    revenue: 9600,
    expense: 3500,
  },
  {
    name: 'December',
    revenue: 7400,
    expense: 1500,
  },
 
];
const [revenue, setRevenue] =useState('Monthly');
const [selectProfitIndex, setSelectProfitIndex] = useState(0);
  const handleChangeRevenue = (event) => {
    setRevenue(event.target.value);
  };

  const selectProfit=(index)=>{
    setSelectProfitIndex(index);
  }
  
  
  return (
   <>
   <div className="box_dashboard mt-20 mb-4 w-full h-[250px] rounded-md border 
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

   <div className="flex gap-4 my-4">
<div className="card p-0 w-[65%] dark:border-[rgba(255,255,255,0.1)]">
  <div className="flex items-center justify-between p-5">
   <div className="leftCol">
    <h2 className="text-[18px]">Total Profit</h2>
  <span className="font-bold text-[22px]">$62,435</span>
  </div>
  <div>
    <Button variant="outlined" className="!capitalize" size="small">Details</Button>
  </div>
  </div>
  <div className="p-5 pt-0">
  <div className="w-full rounded-xl border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] py-2 px-4 flex items-center justify-between">
<span className={`flex items-center justify-center p-2 px-4 rounded-md text-[14px] cursor-pointer ${selectProfitIndex===0?"bg-gray-300 dark:bg-gray-800":""}`} onClick={()=>selectProfit(0)}>5 D</span>
<span className={`flex items-center justify-center p-2 px-4 rounded-md text-[14px] cursor-pointer ${selectProfitIndex===1?"bg-gray-300 dark:bg-gray-800":""}`} onClick={()=>selectProfit(1)}>2 W</span>
<span className={`flex items-center justify-center p-2 px-4 rounded-md text-[14px] cursor-pointer ${selectProfitIndex===2?"bg-gray-300 dark:bg-gray-800":""}`} onClick={()=>selectProfit(2)}>1 M</span>
<span className={`flex items-center justify-center p-2 px-4 rounded-md text-[14px] cursor-pointer ${selectProfitIndex===3?"bg-gray-300 dark:bg-gray-800":""}`} onClick={()=>selectProfit(3)}>6 M</span>
<span className={`flex items-center justify-center p-2 px-4 rounded-md text-[14px] cursor-pointer ${selectProfitIndex===4?"bg-gray-300 dark:bg-gray-800":""}`} onClick={()=>selectProfit(4)}>1 Y</span>
  </div>
  </div>
  <div className="w-full ">
  <AreaChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '50vh', aspectRatio: 1.618 }}
      responsive
      data={profitData}
      margin={{top:0,right:0, left:0, bottom:0}}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <Tooltip />
      <Area type="monotone" dataKey="uv" strokeWidth={3} stroke="#8884d8" fill="url(#colorUv)" />
    </AreaChart>
    </div>
  </div>

  <div className="card p-5 w-[35%] dark:border-[rgba(255,255,255,0.1)]">
  <div className="flex items-center justify-between">
   <div className="leftCol">
    <h2 className="text-[22px] font-bold">Channel Revenue</h2>
  </div>
  <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={revenue}
          label="Revenue"
          onChange={handleChangeRevenue}
          size="small"
        >
          
          <MenuItem value={'Monthly'}>Monthly</MenuItem>
          <MenuItem value={'Weekly'}>Weekly</MenuItem>
          <MenuItem value={'Annualy'}>Annualy</MenuItem>
        </Select>
  </div>
  <h3 className="flex items-center gap-2"><span className="text-[30px] font-bold">3.4%</span>
  <span> Growth Rate</span>
  </h3>

  <div className="grid grid-cols-3 gap-5 mt-5 mb-4">
    <div className="box__ flex flex-col">
<span className="flex w-full h-[5px] rounded-full bg-blue-400"></span>
    <span className="font-[600]">28%</span>
    </div>
    <div className="box__ flex flex-col">
<span className="flex w-full h-[5px] rounded-full bg-green-200"></span>
    <span className="font-[600]">32%</span>
    </div>
    <div className="box__ flex flex-col">
<span className="flex w-full h-[5px] rounded-full bg-orange-200"></span>
    <span className="font-[600]">40%</span>
    </div>

    
  </div>
  <div className=" p-4 py-6 bg-gray-200 dark:bg-[rgba(255,255,255,0.050)] rounded-md w-full mt-3 grid grid-cols-3 gap-2">
<div className="col_ flex items-center justify-center flex-col">
<span className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-blue-400"><MdOutlineShoppingCart size={25} className="dark:text-black"/></span>
<h3 className="text-[16px] font-[600] mt-2">$2.3k</h3>
<p className="text-[14px]">Online Store</p>
</div>
<div className="col_ flex items-center justify-center flex-col">
<span className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-green-200"><IoStorefrontOutline size={25} className="dark:text-black"/></span>
<h3 className="text-[16px] font-[600] mt-2">$2.3k</h3>
<p className="text-[14px]">Online Store</p>
</div>
<div className="col_ flex items-center justify-center flex-col">
<span className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-orange-200"><TbSocial size={25} className="dark:text-black"/></span>
<h3 className="text-[16px] font-[600] mt-2">$2.3k</h3>
<p className="text-[14px]">Online Store</p>
</div>
    </div>
  </div>
    </div>

    <div className="salesReport card w-full p-5 dark:border-[rgba(255,255,255,0.1)]">
<h2 className="text-[20px] font-bold">Sales Report</h2>
   <div className="w-full mt-5">
    <ComposedChart
      responsive
      width={'100%'}
      height={400}
      data={salesData}
      margin={{
        top:0,
        right: 0,
        left: 0,
        bottom:0
      }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis dataKey="name" scale="band" tick={{ fontSize: 14 }} />
      <YAxis width="auto" tick={{ fontSize: 14 }}/>
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="revenue" fill="url(#colorUv)" stroke="#8884d8" strokeWidth={3} />
      <Bar dataKey="expense" barSize={20} fill="#8884d8" radius={[10,10,0,0]}/>
    </ComposedChart>
    </div>
    </div>



    <br/><br/><br/>
   </>
  );
}

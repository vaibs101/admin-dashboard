
import React from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import Link from '@mui/material/Link';
import Image from 'next/image';


const ProductSize=()=>{
   
   
    return (
        <div className='py-5 flex flex-col gap-2'>
<span className='text-[15px] font-[500] text-gray-500'>Select Size</span>
       <div className='flex items-center gap-3'>
            <span className='flex items-center justify-center border 
            border-[rgba(0,0,0,0.2)] w-[35px] h-[35px] rounded-md cursor-pointer font-[500] text-gray-600'>6</span>
                <span className='flex items-center justify-center border 
            border-[rgba(0,0,0,0.2)] w-[35px] h-[35px] rounded-md cursor-pointer font-[500] text-gray-600'>7</span>
        
            <span className='flex items-center justify-center border 
            border-[rgba(0,0,0,0.2)] w-[35px] h-[35px] rounded-md cursor-pointer font-[500] text-gray-600'>8</span>
            <span className='flex items-center justify-center border 
            border-[rgba(0,0,0,0.2)] w-[35px] h-[35px] rounded-md cursor-pointer font-[500] text-gray-600'>9</span>
                <span className='flex items-center justify-center border 
            border-[rgba(0,0,0,0.2)] w-[35px] h-[35px] rounded-md cursor-pointer font-[500] text-gray-600'>10</span>
        
        
        </div>
        </div>
        
    )
}
const ProductDetails = () => {
  return (
    <>
      <div className='flex flex-col gap-1'>
        <h1 className='text-[25px] font-bold'>Shop</h1>
<Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          E-Commerce
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/products"
        >
          Shop
        </Link>
        <Typography sx={{ color: 'text.primary' }}>F1234567</Typography>
      </Breadcrumbs>
      </div>

      <div className='grid grid-cols-2 gap-3 py-4'>
        <div className='left-sec'>
<div className='grid grid-cols-2 gap-3'>
      <div className='img overflow-hidden rounded-md group'>
        <Image src={'/product2.webp'} width={273} height={318} className='group-hover:scale-105 transition-all' alt='product image'/>

      </div>
      <div className='img overflow-hidden rounded-md group'>
        <Image src={'/product3.webp'} width={273} height={318} className='group-hover:scale-105 transition-all' alt='product image'/>

      </div>
      <div className='img overflow-hidden rounded-md group'>
        <Image src={'/product4.webp'} width={273} height={318} className='group-hover:scale-105 transition-all' alt='product image'/>

      </div>
      <div className='img overflow-hidden rounded-md group'>
        <Image src={'/product2.webp'} width={273} height={318} className='group-hover:scale-105 transition-all' alt='product image'/>

      </div>
      </div>
        </div>

        <div className='right-sec'> 
<h2 className='text-[25px] font-bold text-gray-800'>Casual Shoes</h2>
 <h3 className='text-[18px]  text-gray-500'>Classic Casual Shoes</h3>

<div className='my-4 w-full h-[1px] bg-gray-300'>

</div>
<div className='flex items-center gap-2'>
    <span className='text-[22px] text-gray-800 font-bold'>$245.00</span>
   <span className='text-[16px] text-gray-800 font-[500] line-through'>$345.00</span>
   <span className='text-[14px] text-red-600 font-[500]'>{'30% OFF'}</span>

</div>
<span className='text-[16px] text-green-600 font-[500]'>Inclusive of all taxes</span>
        
        <ProductSize/>
        </div>

      </div>
    </>
  )
}

export default ProductDetails

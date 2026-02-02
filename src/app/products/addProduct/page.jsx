'use client';
import Image from 'next/image';
import React, { useState } from 'react'
import { Editor, EditorProvider } from 'react-simple-wysiwyg';
import { FaRegEye } from 'react-icons/fa6';
import { FaRegTrashAlt } from 'react-icons/fa';
import { CiImageOn } from 'react-icons/ci';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { Button } from '@mui/material';
import { IoMdSend } from 'react-icons/io';
import { IoIosArrowRoundBack } from 'react-icons/io';
const AddProduct = () => {

  const [html, setHtml] = useState("my <b>HTML</b>");
const [category, setCategory] = useState('');
const [tags, setTags] = useState([]);

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeTags = (tags) => {
    setTags(tags);
  }
  return (
    <div>
      <h1 className='text-[24px] font-[600]'>Create Product</h1>
      <form>
      <div className='flex gap-5 mt-3'>
        <div className='w-[50%] flex flex-col gap-3'>
         <div className="card dark:bg-themeDark w-full p-4 dark:border-[rgba(255,255,255,0.1)]">
       <h2 className='text-[20px] font-bold mb-4'>Basic Information</h2>

       <div className='col_ mb-4'>
        <label className='mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]'>Product Name</label>
        <input type="text" 
        className='w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none
         focus:border-[rgba(0,0,0,0.6)] rounded-md px-3 bg-gray-100 dark:bg-gray-800'
          placeholder='Product Name'/>

       </div>

       <div className='col_ mb-4'>
        <label className='mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]'>Product Code</label>
        <input type="text" 
        className='w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none
         focus:border-[rgba(0,0,0,0.6)] rounded-md px-3 bg-gray-100 dark:bg-gray-800'
          placeholder='Product Code'/>

       </div>

       <div className='col_ mb-4'>
        <label className='mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]'>Description</label>
        <EditorProvider>
        <Editor value={html} onChange={(e) => setHtml(e.target.value)} />
        </EditorProvider>
       </div>

      

      </div>

       <div className="card dark:bg-themeDark w-full p-4 dark:border-[rgba(255,255,255,0.1)] mt-3">
       <h2 className='text-[20px] font-bold mb-4'>Pricing</h2>

       <div className='col_ mb-4'>
        <label className='mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]'>Price</label>
        <input type="text" 
        className='w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none
         focus:border-[rgba(0,0,0,0.6)] rounded-md px-3 bg-gray-100 dark:bg-gray-800'
          placeholder='$ 0.00'/>
       </div>
       <div className='col_ mb-4'>
        <label className='mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]'>Cost Price</label>
        <input type="text" 
        className='w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none
         focus:border-[rgba(0,0,0,0.6)] rounded-md px-3 bg-gray-100 dark:bg-gray-800'
          placeholder='$ 0.00'/>
       </div>

       <div className='col_ mb-4'>
        <div className='grid grid-cols-2 gap-5'>
<div className='box'>
  <label className='mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]'>Bulk Discount Price</label>
        <input type="text" 
        className='w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none
         focus:border-[rgba(0,0,0,0.6)] rounded-md px-3 bg-gray-100 dark:bg-gray-800'
          placeholder='$ 0.00'/>
       
</div>
<div className='box'>
  <label className='mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]'>Tax Rate(%)</label>
        <input type="text" 
        className='w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none
         focus:border-[rgba(0,0,0,0.6)] rounded-md px-3 bg-gray-100 dark:bg-gray-800'
          placeholder='0'/>
       
</div>

        </div>
        </div>

       

      

      </div>
</div>

 <div className='w-[50%] flex flex-col gap-3'>
         <div className="card dark:bg-themeDark w-full p-4 dark:border-[rgba(255,255,255,0.1)]">
       <h2 className='text-[18px] font-bold mb-2'>Product Image</h2>
         <p className='text-[13px] dark:text-gray-500'>Choose a product photo or simply drag and drop up to 5 photos here.</p>
       
       <div className='grid grid-cols-4 gap-3 mt-3'>
        <div className='box p-2 h-[100px] border relative group border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-md overflow-hidden'>
        <div className='relative overflow-hidden rounded-md'>
        <Image src="/product2.jfif" width={150} height={150} alt="product image"/>
       <div 
       className="overlay w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 items-center justify-center gap-3 hidden group-hover:flex">
<FaRegEye size={25} className='text-white cursor-pointer'/>
<FaRegTrashAlt size={20} className='text-white cursor-pointer'/>
       </div>
       </div>
        </div>

        <div className='box p-2 h-[100px] border relative group border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-md overflow-hidden'>
        <div className='relative overflow-hidden rounded-md'>
        <Image src="/product2.jfif" width={150} height={150} alt="product image"/>
       <div 
       className="overlay w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 items-center justify-center gap-3 hidden group-hover:flex">
<FaRegEye size={25} className='text-white cursor-pointer'/>
<FaRegTrashAlt size={20} className='text-white cursor-pointer'/>
       </div>
       </div>
        </div>

        <div className='box p-2 h-[100px] border relative group border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-md overflow-hidden'>
        <div className='relative overflow-hidden rounded-md'>
        <Image src="/product2.jfif" width={150} height={150} alt="product image"/>
       <div 
       className="overlay w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 items-center justify-center gap-3 hidden group-hover:flex">
<FaRegEye size={25} className='text-white cursor-pointer'/>
<FaRegTrashAlt size={20} className='text-white cursor-pointer'/>
       </div>
       </div>
        </div>

        <div className='box p-2 h-[100px] border relative group border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-md overflow-hidden'>
        <div className='relative overflow-hidden rounded-md'>
        <Image src="/product2.jfif" width={150} height={150} alt="product image"/>
       <div 
       className="overlay w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 items-center justify-center gap-3 hidden group-hover:flex">
<FaRegEye size={25} className='text-white cursor-pointer'/>
<FaRegTrashAlt size={20} className='text-white cursor-pointer'/>
       </div>
       </div>
        </div>

<div className='box p-2 h-[100px] border relative group border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-md overflow-hidden'>
        <div className='relative overflow-hidden rounded-md'>
        <Image src="/product2.jfif" width={150} height={150} alt="product image"/>
       <div 
       className="overlay w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 items-center justify-center gap-3 hidden group-hover:flex">
<FaRegEye size={25} className='text-white cursor-pointer'/>
<FaRegTrashAlt size={20} className='text-white cursor-pointer'/>
       </div>
       </div>
        </div>

        <div className='uploadBox relative border-dashed
         border-[rgba(0,0,0,0.3)] dark:border-[rgba(255,255,255,0.3)] 
         border-2 h-[100px] w-[100px] flex items-center justify-center flex-col gap-0 cursor-pointer overflow-hidden hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md'>
          <CiImageOn size={35} className='text-gray-500' />
       <span className='text-gray-700 dark:text-gray-400 text-[12px] text-center'>Drop your image here, or</span>
       <span className='text-sky-600 text-[12px] text-center'>Click to upload</span>
       <input type="file" className="absolute w-full h-full opacity-0 cursor-pointer top-0 left-0 z-50" id="image-upload"/>
        </div>
       </div>

       <p className='text-[13px] text-gray-600 dark:text-gray-500 mt-3'>Image formats: .jpg, .jpeg, .png, .webp, preferred sizes: 1:1, file size is restricted to a maximum of 500kb</p>

      </div>

   <div className="card dark:bg-themeDark w-full p-4 dark:border-[rgba(255,255,255,0.1)] mt-3">
  <h2 className='text-[18px] font-bold mb-2'>Attribute</h2>
     <div className='col_ mb-4'>
        <label className='mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]'>Category</label>
       <Select
          value={category}
          onChange={handleChangeCategory}
          displayEmpty
          size='small'
          className='w-full'
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
       </div>

       <div className='col_ mb-4'>
        <label className='mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]'>Tags</label>
        <TagsInput value={tags} onChange={handleChangeTags} />
        </div>

        <div className='col_ mb-4'>
        <label className='mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]'>Brand</label>
        <input type="text" 
        className='w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none
         focus:border-[rgba(0,0,0,0.6)] rounded-md px-3 bg-gray-100 dark:bg-gray-800'
          placeholder='Brand'/>
       </div>
   </div>
      
</div>

        </div>
        <br/><br/><br/><br/><br/><br/>
<div className='actionWrap w-[82%] h-[60px] fixed bottom-0 right-0 z-[99] bg-white dark:bg-dark
shadow-md flex items-center justify-between gap-5 px-4'>
  <Button variant='text' color='error' className='!font-bold !capitalize' startIcon={<IoIosArrowRoundBack/>}>Back</Button>

<Button variant='contained' className='!font-bold !capitalize' endIcon={<IoMdSend/>}>Save Product</Button>
</div>

        </form>
    </div>
  )
}

export default AddProduct

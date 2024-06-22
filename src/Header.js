import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Header = (props) => {
  const e="entertainment";
const s="sports";
const w="world";
const b="bussiness";
const t="technology";
const n="nation";
const [burger,setBurger]=useState(0);
 const [hovDesign,setHovDesign]=useState(false);
 const location =useLocation();
 const path=location.pathname;

const navigate=useNavigate();
 const hovHandler=()=>{
    setHovDesign(hovDesign=>!hovDesign)
 }
 const burgerhandler=()=>{
  setBurger(burger=>!burger);
 }
  return (
    <div>
    <div className='hidden lg:flex'>
        <div className='flex  basis-1/3 p-2  font-pop text-sm font-medium' >
            <ul className='flex space-x-6 p-2 '>
                <div  className={(path=='/news'?'hidden':'')} onMouseEnter={hovHandler} onMouseLeave={hovHandler}>
                <span   className='flex space-x-2'><li   >Categories</li><svg  className={hovDesign?` w-5 h-5 rotate-180 transform ease-in-out duration-300`:` transform ease-in-out duration-300  w-5 h-5 `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  

</svg>
</span>
                <div className={hovDesign?` transform ease-in-out duration-300 absolute p-3 shadow-lg z-50 bg-white`:`transform ease-in-out duration-300 hidden`}><ul className=' flex flex-col space-y-2  font-normal divide-y-2  '>
                    <li onClick={()=>props.setCategory(e)} className='p-2 hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300'>Entertainment</li>
                    <li onClick={()=>props.setCategory(s)} className='p-2 hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300'>Sports</li>
                    <li onClick={()=>props.setCategory(w)} className='p-2 hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300'>World</li>
                    <li  onClick={()=>props.setCategory(n)} className='p-2 hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300'>Nation</li>
                    <li  onClick={()=>props.setCategory(b)} className='p-2 hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300'>Business</li>
                    <li  onClick={()=>props.setCategory(t)} className='p-2 hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300'>Technology</li>

                    </ul>
                    </div>
                    </div>
                <li className='p-2 hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300' onClick={()=>{
                  navigate('/');
                }}>Home</li>
                <li className='p-2 hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300'>Favorite</li>
                <li className='p-2 hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300'>Jobs</li>
                <li className='p-2 hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300'>Blogs</li>
                
                
            </ul>
        </div>
<div className=' font-cinzel  basis-1/3 flex justify-center p-2 flex-shrink-2'><h1 className=' text-2xl font-semibold'>NEWS APP</h1></div>
<div className='flex basis-1/3 space-x-6 p-2 font-pop font-medium shrink-0 min-w-[400px] max-h-[60px]'>
<div className={(path=='/news')?'hidden':` rounded-full basis-2/4  flex ml-4  bg-slate-100`} >
<svg onClick={(prev)=>{
  props.ser(!prev);
}} className='basis-15 w-7 h-7 my-auto stroke-slate-500 p-1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

    <input className=' i border-none h-full w-full p-2 bg-slate-100 rounded-full  border-transparent focus:border-transparent focus:ring-0 focus-visible:ouline-none' type=' text' value={props.search}  onChange={(e)=>{
      props.setSearch(e.target.value);
    }} placeholder='search'></input>
</div>
<div className='basis-1/4 p-2 hover:text-slate-600 '>Login</div>
<div className='  bg-slate-950 text-slate-100 p-2 basis-1/4 rounded-full'>Sign up</div>
</div>

    </div>
    <div>
    <div className='  lg:hidden'>hi
<div className='flex justify-between w-full'>
<div className=' font-cinzel   justify-center p-2 '><h1 className=' text-2xl font-semibold'>NEWS APP</h1></div>
<div className='p-2'><svg onClick={burgerhandler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
</div>
</div>
<div className={burger?'w-full absolute sm:w-[40%] sm:h-full my-auto p-4 bg-slate-200 z-50':'hidden'}>
<div className=' p-2 flex  font-pop text-sm font-medium w-full' >
            <ul className='p-4  w-full '>
                <div  onMouseEnter={hovHandler} onMouseLeave={hovHandler}>
                <span   className=' flex w-full justify-center'><li className='text-center mb-5  hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300' >Categories</li><svg  className={hovDesign?` w-5 h-5 rotate-180 transform ease-in-out duration-300`:` transform ease-in-out duration-300  w-5 h-5 `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  

</svg>
</span>

                <div className={hovDesign?` transform ease-in-out duration-300   `:`transform ease-in-out duration-300 hidden`}><ul className=' flex flex-col   font-normal divide-y-2  '>
                    <li onClick={()=>props.setCategory(e)} className=' hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300'>Entertainment</li>
                    <li onClick={()=>props.setCategory(s)} className=' hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300'>Sports</li>
                    <li onClick={()=>props.setCategory(w)} className=' hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300'>World</li>
                    <li  onClick={()=>props.setCategory(n)} className=' hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300'>Nation</li>
                    <li  onClick={()=>props.setCategory(b)} className=' hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300'>Business</li>
                    <li  onClick={()=>props.setCategory(t)} className=' hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300'>Technology</li>

                    </ul>
                    </div>
                    </div>
                <li  className='border-t-[1px] border-slate-400 text-center mb-5  hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300'>Inspiration</li>
                <li  className='border-t-[1px] border-slate-400 text-center mb-5  hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300'>Cources</li>
                <li  className='border-t-[1px] border-slate-400 w-full text-center mb-5  hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300'>Jobs</li>
                <li  className='border-t-[1px] border-slate-400 text-center mb-5  hover:text-slate-500 hover:scale-[1.1] transform ease-in-out duration-300'>Go Pro</li>
                
                
            </ul>
        </div>
</div>

</div>
</div>

    </div>
    
  )
}

export default Header
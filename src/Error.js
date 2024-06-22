import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const nav=useNavigate();
  return (
    <div className='h-[700px] flex items-center justify-center '>
        <div className=' h-[300px] flex flex-col items-center text-2xl font-bold justify-center bg-slate-200 rounded-md shadow-lg w-[600px]'>
            <h1 className=' font-pop font-extrabold'>Oops Something went wrong!</h1>
            <h6 className='mt-5'>Try refreshing the page</h6>
            <button className='w-32 rounded-full bg-slate-600 text-white border-none mt-6 font-thin' onClick={()=>{
nav('/')
            }}>Home</button>
        </div>
    </div>
  )
}

export default Error
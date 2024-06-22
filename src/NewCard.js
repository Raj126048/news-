import React from 'react'
import img2 from './b1.jpg'

const NewCard = (props) => {
    
  return (
    <div className='   w-96 sm:w-[90%] sm:h-[400px] h-[450px] p-3 relative hover:shadow-2xl transorm ease-in-out duration-400 z-30' key={props.key}>
<div className='h-[70%]'>
    <div className=' absolute bottom-[35%]'>
    <div className=' flex justify-start items-start w-full '>
        <div className='text-white bg-slate-600 rounded-full p-2 tw text-sm'><h7>{props.Category||"popular"}</h7></div>
        <div className='text-white bg-slate-600 rounded-full p-2 ml-2 text-sm'><h7>categories</h7></div>
    </div>
    </div>
    <img className='h-full' src={props.img||img2} alt='image-news'/>

</div >
<div className=' bg-slate-200 h-[30%]'>
<div  className='h-[60%] overflow-hidden'>
    <h1 className=' text-xl font-pop font-semibold p-3 overflow-hidden'>{props.title||"error"}</h1>
</div>
<div className=' border-t-[0.5px] border-slate-400 h-[40%]  overflow-hidden'><h7 className='p-2 overflow-hidden text-slate-400'>{props.date}</h7></div>
    </div>
    </div>
  )
}

export default NewCard
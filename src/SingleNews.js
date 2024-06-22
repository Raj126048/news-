
import React ,{useEffect, useState} from 'react'

import Header from './Header';
import Error from './Error';
 const SingleNews = () => {
 
  const temp={
    title:"",
    description:"",
    content:"",
    url:"",
    image:"",
    date:"",
    source:{
        name:"",
        url:""
    }
}

 const [data,setData]=useState();
  useEffect(()=>{
    
    const d=JSON.parse(localStorage.getItem('news')||{});
    setData(d);
    console.log(d.title);
  
   
  },[])


try{ return (
    
    <div>
      <Header/>
      <div>
        <div className=' p-4 text-xl md:text-2xl lg:text-4xl  font-bold flex flex-col justify-center items-center space-y-9 bg-slate-100 '>
          <h1>{data.title}</h1>
          <div className=' shadow-2xl md:max-w-[1100px]'>
            <img src={data.image}/>
          </div>
        </div>
        <div className='flex p-4 flex-col space-y-9 bg-slate-50'>
          <div className='p-4 text-md '>
            <span className='flex justify-between'>
            <h1 className='text-xl font-semibold'>Description</h1>
            <h6 className='text-sm font-light text-slate-500'>Published at-{data.publishedAt}</h6>
            </span>
            
            {data.description}
          </div>
          <div className='p-4'>
          <h1 className='text-xl font-semibold'>Content</h1>
            {data.content}
          </div>
          <div className='flex justify-between w-32 p-4'>
           <h1> Source:</h1>
         <h1 className='hover:text-slate-600'><a href={data&&data?.source.url} target='_blank'>{data&&data?.source.name}</a></h1>
          </div>
        </div>
      </div>
    </div>
   
  ) }
  catch(err){
    return<Error/>
  }
}

export default SingleNews
import React,{createContext, useContext,useState} from 'react'

export const DataContext=createContext();
const defaultValue={
    title:"",
    description:"",
    content:"",
    url:"",
    image:"",
    date:"",
    source:{
        name:"",
        source:""
    }
}
const ContextProvider = ({children}) => {
    const [data,setData]=useState(defaultValue);
    const temp={
        title:"",
        description:"",
        content:"",
        url:"",
        image:"",
        date:"",
        source:{
            name:"",
            source:""
        }
    }
    const addData=(item)=>{


setData(item);
    }
    const value={
        news:data,
        add:{addData}
    }
    
  return (
   <DataContext.Provider value={{data,addData}}>{children}</DataContext.Provider>
  )
}

export default ContextProvider
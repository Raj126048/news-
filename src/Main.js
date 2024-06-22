import React, { useState ,useEffect ,useContext} from 'react'
import axios from 'axios' 
import NewCard from './NewCard';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './ContextProvider';
import Error from './Error';
const Main = (props) => {
const [response,setResponse]=useState([]);


const navigate=useNavigate();
  
const data=useContext(DataContext);

useEffect(()=>{
 
  const url=`https://gnews.io/api/v4/top-headlines?category=${props.Category}&apikey=2f146026522260ff88ef4a59a44067a6`;
  fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
   const articles = data.articles;
    setResponse(articles);
  }).catch((err)=>{
    navigate('/error')
  })

  if(response===undefined){
    navigate('/error')
  }

},[props.Category]);
useEffect(()=>{
  const url=`https://gnews.io/api/v4/search?q=${props.search}&apikey=2f146026522260ff88ef4a59a44067a6`;
  fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
   const articles = data.articles;
    setResponse(articles);
  }).catch((err)=>{
    navigate('/error')
  })
  if(response===undefined){
    navigate('/error')
  }
},[props.ser])


const itemsPerPage=10;
const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = response?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(response?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % response.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  
  return (
   <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center'>
    
            {currentItems&&currentItems.map((item,key)=><div onClick={()=>{
              localStorage.setItem('news',JSON.stringify(item));
              data.addData(JSON.stringify(item));
navigate('/news');
            }}><NewCard title={item.title} img={item.image} date={item.publishedAt} key={key} Category={props.Category} news={props.news}/></div>)}
            <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
        
        </div>
  ) 
  
}


export default Main
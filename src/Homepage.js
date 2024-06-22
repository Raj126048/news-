import React, { useState } from 'react'
import Header from './Header'
import Main from './Main'

const Homepage = (props) => {
    const [clicked,setClicked]= useState('general');
    const [search,setsearch]= useState('example');
    const [ser,setser]= useState(0);

 

    return (
  <>
  <Header setCategory={setClicked} search={search} setSearch ={setsearch} ser={setser}/>
  <Main Category={clicked} news={props.single} search={search} ser={ser}/>
  
  
  </>
    );
  }

export default Homepage
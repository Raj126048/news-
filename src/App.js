import React, { useState } from 'react';
import { Route,Routes } from 'react-router-dom';

import Homepage from './Homepage';
import SingleNews from './SingleNews';
import Error from './Error';


function App() {

const [singleNews,setSingleNews]=useState();

  return (
<Routes>
  <Route path='/' element={<Homepage single={setSingleNews}/>}></Route>
  <Route path='/news' element={<SingleNews news={singleNews} />}></Route>
  <Route path='/error' element={<Error/>}></Route>
</Routes>
  );
}

export default App;

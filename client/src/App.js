import './App.css';
import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom"
import Test from './Test';
import Heading from './Components/Heading';
import List from './Components/List';
import Upload from './Components/Upload';


function App() {
  const [ContentList, setContentList] = useState([]);
 
  return (
    <>
      <Heading/>
      <Routes>
        <Route 
          path='/list' 
          element={<List ContentList={ContentList} setContentList={setContentList}/>}
        />
        <Route 
          path='/upload' 
          element={<Upload ContentList={ContentList} setContentList={setContentList}/>}
        />
      </Routes>
    </>
  );
}

export default App;

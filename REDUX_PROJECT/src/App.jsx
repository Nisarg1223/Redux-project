import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CollectionPages from "./pages/CollectionPages";
import HomePage from "./pages/HomePage";
 import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  return (
    <div>
      <div className="container">

       <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/collections" element={<CollectionPages/>}/>
       </Routes>
   
       <ToastContainer/>
      
      </div>
     
    </div>
  );
};

export default App;

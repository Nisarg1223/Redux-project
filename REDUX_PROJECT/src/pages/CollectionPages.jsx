import React from 'react'
import { useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard.jsx'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {clearCollection} from "../redux/slice/collectionSlice";

const CollectionPages = () => {
    const navigate = useNavigate();
   const collection = useSelector(state => state.collection.items);
  const dispatch = useDispatch();
  const clearAll = ()=>{
    dispatch(clearCollection());
  }
  return (
    <div className='Card-Parent'>
       <div className='header'>
        <h1>{collection.length > 0 ? 'Your Collections':'Collection is Empty'}</h1>
        <div className="btns">
        <button className="removeAll"
        onClick={function(){
          clearAll();
        }}
        >Remove all</button>
        <button className="Back"
        onClick={function(){
          navigate('/');
        }}
        >Back</button>
        </div>
       </div>
      {
        collection.map((ele,idx)=>{
          return <div key={idx}>
   <CollectionCard item={ele}/>
        
          </div>
        })
      }
    </div>
  )
}

export default CollectionPages
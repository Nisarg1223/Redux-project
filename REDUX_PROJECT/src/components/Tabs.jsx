import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabs } from '../redux/slice/searchSlice';

const Tabs = () => {
    const Tabs = ['Photos','Videos','GIFs'];
    const dispatch = useDispatch();
  const activeTab =   useSelector((state)=>state.search.activeTab)
  return (
    <div className="button-container">
        {Tabs.map(function(e,idx){
            return <button 
            className={`${activeTab == e?'active':''}`}
            key={idx}
            onClick={function(){
                dispatch(setActiveTabs(e));
            }}
            >{e}</button>
        })}
    </div>
  )
}

export default Tabs
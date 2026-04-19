import React from 'react'
import { useDispatch } from 'react-redux';
import { removeCollection, removeToast } from '../redux/slice/collectionSlice';


const collectionCard = ({item}) => {
    const dispatch = useDispatch();
   
    const removefromCollection =(item)=>{
      dispatch(removeCollection(item));
      dispatch(removeToast());
    }
  return (
     <div className="Card">
      <div className="Card-Media">
        {item.type === "Video" ? (
          <video autoPlay muted loop src={item.src} />
        ) : (
          <img src={item.thumbnail} alt={item.title} />
        )}
      </div>
      <div className="Card-Info">
        <p className="Card-Title">{item.title}</p>
        <span
          className="remove"
          onClick={function (e) {
            removefromCollection(item);
          }}
        >
          Remove
        </span>
      </div>
    </div>
  )
}

export default collectionCard
import React from "react";
import { useDispatch } from "react-redux";
import { addCollection,addedToast} from "../redux/slice/collectionSlice";

const ResultCard = ({ item }) => {

    const dispatch = useDispatch();

  const addTocollection = (item, e) => {
    e.stopPropagation();
    e.preventDefault();
    

    dispatch(addCollection(item))
    dispatch(addedToast());
   
  };
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
          className="Card-Type"
          onClick={function (e) {
            addTocollection(item, e);
          }}
        >
          Save
        </span>
      </div>
    </div>
  );
};

export default ResultCard;

import React, { useState } from "react";
import { useSelector } from "react-redux";

function FilterAll() {
  const dataForum = useSelector(state => state.forum.listPost);
  const [showDetail , setShowDetail] = useState(false);
  const [isPost , setIsPost] = useState('');
  
  return (
    <div className="list-post-wrapper">
      {dataForum?.map((item, index) => (
        <div className="post-item" key={index}>
          <img src={item.photo}></img>
          <div className="title">{item.title}</div>
        </div>
      ))}
    </div>
  );
}
export default FilterAll;

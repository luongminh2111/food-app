import React from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";

function FilterCook(){
  const dataForum = useSelector(state => state.forum.listPost);
  const listCookPost = useMemo(() => {
    return dataForum.filter(e => e.categoryId === 1);
  }, [dataForum]);


  return (
    <div className="list-post-wrapper">
      {listCookPost?.map((item, index) => (
        <div className="post-item" key={index}>
          <img src={item.photo}></img>
          <div className="title">{item.title}</div>
        </div>
      ))}
    </div>
  );
};
export default FilterCook;
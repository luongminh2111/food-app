import React from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";

function FilterCookingMode(){

const dataForum = useSelector(state => state.forum.listPost);
  const listCookingModePost = useMemo(() => {
    return dataForum.filter(e => e.categoryId === 2);
  }, [dataForum]);

  return (
    <div className="list-post-wrapper">
      {listCookingModePost?.map((item, index) => (
        <div className="post-item" key={index}>
          <img src={item.photo}></img>
          <div className="title">{item.title}</div>
        </div>
      ))}
    </div>
  );
};
export default FilterCookingMode;
import React from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";

function FilterTips(){
  const dataForum = useSelector(state => state.forum.listPost);
  const listTipPost = useMemo(() => {
    return dataForum.filter(e => e.categoryId === 3);
  }, [dataForum]);

  return (
    <div className="list-post-wrapper">
      {listTipPost?.map((item, index) => (
        <div className="post-item" key={index}>
          <img src={item.photo}></img>
          <div className="title">{item.title}</div>
        </div>
      ))}
    </div>
  );
};
export default FilterTips;
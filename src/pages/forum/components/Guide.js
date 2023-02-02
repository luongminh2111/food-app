import React from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";

function Guide(){
  const dataForum = useSelector(state => state.forum.listPost);
  const listGuidePost = useMemo(() => {
    return dataForum.filter(e => e.categoryId === 4);
  }, [dataForum]);

  return (
    <div className="list-post-wrapper">
      {listGuidePost?.map((item, index) => (
        <div className="post-item" key={index}>
          <img src={item.photo}></img>
          <div className="title">{item.title}</div>
        </div>
      ))}
    </div>
  );
};
export default Guide;
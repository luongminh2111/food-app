import React from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { renderAllPost } from "../actions/ForumActions";
import PostDetail from "./PostDetail";

function FilterCookingMode(props){
  const {isPost, setIsPost, itemSelected, setItemSelected, dataForum } = props;

  const listCookingModePost = useMemo(() => {
    return dataForum.filter(e => e.categoryId === 2);
  }, [dataForum]);

  return (
    <div className="list-post-wrapper">
      {
        isPost > 0 ? <PostDetail data={itemSelected} /> : renderAllPost(listCookingModePost, setItemSelected, setIsPost)
      }
    </div>
  );
};
export default FilterCookingMode;
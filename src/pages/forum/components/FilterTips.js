import React from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { renderAllPost } from "../actions/ForumActions";
import PostDetail from "./PostDetail";

function FilterTips(props){
  const {isPost, setIsPost, itemSelected, setItemSelected, dataForum } = props;
  const listTipPost = useMemo(() => {
    return dataForum.filter(e => e.categoryId === 3);
  }, [dataForum]);

  return (
    <div className="list-post-wrapper">
      {
        isPost > 0 ? <PostDetail data={itemSelected} /> : renderAllPost(listTipPost, setItemSelected, setIsPost)
      }
    </div>
  );
};
export default FilterTips;
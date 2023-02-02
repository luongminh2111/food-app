import React from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { renderAllPost } from "../actions/ForumActions";
import PostDetail from "./PostDetail";

function FilterCook(props){
  const {isPost, setIsPost, itemSelected, setItemSelected } = props;

  const dataForum = useSelector(state => state.forum.listPost);
  const listCookPost = useMemo(() => {
    return dataForum.filter(e => e.categoryId === 1);
  }, [dataForum]);

  
  return (
    <div className="list-post-wrapper">
      {
        isPost > 0 ? <PostDetail data={itemSelected} /> : renderAllPost(listCookPost, setItemSelected, setIsPost)
      }
    </div>
  );
};
export default FilterCook;
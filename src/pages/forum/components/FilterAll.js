import React, { useState } from "react";
import { useSelector } from "react-redux";
import { renderAllPost } from "../actions/ForumActions";
import PostDetail from "./PostDetail";

function FilterAll(props) {
  const {isPost, setIsPost, itemSelected, setItemSelected, dataForum } = props

  return (
    <div className="list-post-wrapper">
      {
        isPost > 0 ? <PostDetail data={itemSelected} /> : renderAllPost(dataForum, setItemSelected, setIsPost)
      }
    </div>
  );
}
export default FilterAll;

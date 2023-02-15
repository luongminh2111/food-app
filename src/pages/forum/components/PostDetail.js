import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListComment, saveComment } from "../actions/ForumActionCallApi";
import { convertTimeStamp } from "../actions/ForumActions";

function PostDetail(props) {
  const { data } = props;
  const [content, setContent] = useState("");
  const dataComment = useSelector((state) => state.forum.listComment);
  const listCommentInPost = useMemo(() => {
    return dataComment.filter((e) => e.postId === data.id);
  }, [dataComment]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListComment(data.id));
  }, []);

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleSaveComment = () => {
    const dataSave = {
      content,
      postId: data.id,
    };
    dispatch(saveComment(dataSave));
    setContent('');
  };

  return (
    <div className="post-detail-wrapper">
      <div className="post-content">
        <div className="title">{data?.title}</div>
        <div className="author">
          <PersonIcon />
          <span className="name">Tác giả : {data?.customerName}</span>
          &nbsp; &nbsp;
          <span className="date"> --- {convertTimeStamp(data?.createDate)}</span>
        </div>
        <div className="image-post">
          <img src={data?.photo}></img>
        </div>
        <div className="content-post">{data?.content}</div>
      </div>
      <div className="list-comment">
        {listCommentInPost?.map((item, index) => (
          <div className="comment-item" key={index}>
            <PersonIcon />
            <div className="comment-content">
              <p className="comment-auth">{item?.customerName} ( {convertTimeStamp(item?.createDate)} )</p>
              <p className="comment-text">{item?.content}</p>
            </div>
          </div>
        ))}

        <div className="comment-item">
          <PersonIcon />
          <div className="comment-content">
            <input
              className="comment-input"
              value={content}
              placeholder="Nhập bình luận"
              onChange={(e) => handleChangeContent(e)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSaveComment();
                }
              }}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PostDetail;

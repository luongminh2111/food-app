import { faPen, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteComment,
  getListComment,
  saveComment,
} from "../actions/ForumActionCallApi";
import { convertTimeStamp } from "../actions/ForumActions";

function PostDetail(props) {
  const { data } = props;
  const [cmtIdEdit, setCmtIdEdit] = useState(0);
  const [content, setContent] = useState("");
  const [editContent, setEditContent] = useState("");
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

  const handleChangeEditContent = (e) => {
    setEditContent(e.target.value);
  };

  const handleSaveComment = (cmtId) => {
    console.log("check cmtID : ", cmtId);
    let dataSave;
    if (cmtId > 0) {
      dataSave = {
        id: cmtId,
        editContent,
        postId: data.id,
      };
    } else {
      dataSave = {
        content,
        postId: data.id,
      };
    }
    console.log("check dataSave  :", dataSave);
    dispatch(saveComment(dataSave));
    setContent("");
    setCmtIdEdit(0);
  };

  const handleDeleteComment = (id, postId) => {
    dispatch(deleteComment(id, postId));
  };

  const handleEditCmt = (item) => {
    setCmtIdEdit(item?.id);
    setEditContent(item?.content);
  };

  return (
    <div className="post-detail-wrapper">
      <div className="post-content">
        <div className="title">{data?.title}</div>
        <div className="author">
          <PersonIcon />
          <span className="name">Tác giả : {data?.customerName}</span>
          &nbsp; &nbsp;
          <span className="date">
            {" "}
            --- {convertTimeStamp(data?.createDate)}
          </span>
        </div>
        <div className="image-post">
          <img src={data?.photo}></img>
        </div>
        <div className="content-post">{data?.content}</div>
      </div>
      <div className="list-comment">
        {listCommentInPost?.map((item, index) => (
          <div className="comment-item" key={index}>
            <div className="user-icon">
              <PersonIcon />
            </div>

            <div className="comment-content">
              <p className="comment-auth">
                {item?.customerName} ( {convertTimeStamp(item?.createDate)} )
              </p>
              {cmtIdEdit === item.id ? (
                <input
                  className="comment-input"
                  value={editContent}
                  placeholder="Nhập bình luận"
                  onChange={(e) => handleChangeEditContent(e)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleSaveComment(item?.id);
                    }
                  }}
                ></input>
              ) : (
                <p className="comment-text">{item?.content}</p>
              )}
            </div>
            <div className="comment-action">
              <div className="edit-icon">
                <FontAwesomeIcon
                  icon={faPen}
                  className="foodCard-icon-item"
                  onClick={() => handleEditCmt(item)}
                />
              </div>
              <div className="delete-icon">
                <FontAwesomeIcon
                  icon={faX}
                  className="foodCard-icon-item"
                  onClick={() => handleDeleteComment(item?.id, item?.postId)}
                />
              </div>
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

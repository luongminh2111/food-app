import PersonIcon from "@mui/icons-material/Person";
import React from "react";

function PostDetail(props) {
  const { data } = props;

  return (
    <div className="post-detail-wrapper">
      <div className="post-content">
        <div className="title">{data?.title}</div>
        <div className="author">
          <PersonIcon />
          <span className="name">Luong minh</span>
          &nbsp; &nbsp;
          <span className="date">/ 20-10-2023</span>
        </div>
        <div className="image-post">
          <img src={data?.photo}></img>
        </div>
        <div className="content-post">{data?.content}</div>
      </div>
      <div className="list-comment">
        <div className="comment-item">
          <PersonIcon />
          <div className="comment-content">
            <input placeholder="Nhập bình luận"></input>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PostDetail;

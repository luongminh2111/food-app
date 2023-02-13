import { BASE_URL } from "../../../contains/common";
import {
  fetchListComment,
  fetchListPost,
} from "./ForumActionRedux";
import axios from "axios";
axios.defaults.headers.common["ngrok-skip-browser-warning"] = "6024";
axios.defaults.headers.common["Authentication"] = JSON.parse(sessionStorage.getItem("user"));

export const getListPost = () => (dispatch) => {
  axios
    .get(`${BASE_URL}/post/list`)
    .then((res) => {
      dispatch(fetchListPost(res.data?.data));
    })
    .catch((error) => console.log(error));
};

export const getListComment = (postId) => (dispatch) => {
  axios
    .get(`${BASE_URL}/comment/list/${postId}`)
    .then((res) => {
      console.log("check ress comment : ", res)
      dispatch(fetchListComment(res.data?.data));
    })
    .catch((error) => console.log(error));
};


export const saveComment = (data) => (dispatch) => {
  console.log("check data cmt :", data);
  const options = {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "6024",
    },
  };

  const body = {
    content: data.content,
    postId: data.postId,
    userId: 17
  };

  return axios
    .post(`${BASE_URL}/comment/save`, body, options).then(json => {
      if (json.data?.code === 200) {
        dispatch(getListComment(data.postId));
      }
      return json.data;
    })
} 
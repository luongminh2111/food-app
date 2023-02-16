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
      dispatch(fetchListComment(res.data?.data));
    })
    .catch((error) => console.log(error));
};

export const deleteComment = (id, postId) => (dispatch) => {
  const options = {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "6024",
    },
  };

  return axios
    .post(`${BASE_URL}/comment/delete/${id}`, options).then(json => {
      if (json.data?.code === 200) {
        dispatch(getListComment(postId));
      }
      return json.data;
    })
}

export const saveComment = (data) => (dispatch) => {
  const userId = localStorage.getItem("user_id");
  const options = {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "6024",
    },
  };

  const body = {
    id: data?.id,
    content: data.content || data.editContent,
    postId: data.postId,
    userId, 
  };

  return axios
    .post(`${BASE_URL}/comment/save`, body, options).then(json => {
      if (json.data?.code === 200) {
        dispatch(getListComment(data.postId));
      }
      return json.data;
    })
} 
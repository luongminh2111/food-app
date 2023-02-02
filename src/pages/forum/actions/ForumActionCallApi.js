import { BASE_URL } from "../../../contains/common";
import {
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
import axios from "axios";
import { BASE_URL } from "../../contains/common";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["ngrok-skip-browser-warning"] = "6024";
export const login = (email, password) => (dispatch) => {
  const accessToken = window.localStorage.getItem("token");
  fetch(`${BASE_URL}/account/login?account=${email}&password=${password}`, {
    mode: "cors",
    method: "GET",
    dataType: "jsonp",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
      "ngrok-skip-browser-warning": "6024",
    },
  }).then((res) => {
    console.log("check res: ", res);
  });
};
export const register = (email, password) => (dispatch) => {
  const item = { account: email, password: password };
  const options = {
    data: JSON.stringify(item),
  };
  return axios
    .post(`${BASE_URL}/account/register`, options)
    .then((json) => console.log("check json : ", json));
};

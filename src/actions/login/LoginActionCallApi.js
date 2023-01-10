import axios from "axios";
import { BASE_URL } from "../../contains/common";

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
  }).then((res) => {});
};
export const register = (email, password) => (dispatch) => {
  const options = {
    mode: "cors",
    dataType: "jsonp",
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "6024",
    },
    data: {
      account: email,
      password: password
    }
  }
  return axios.get(`${BASE_URL}/account/register`, options ).then(json => console.log("check json : ", json));
};

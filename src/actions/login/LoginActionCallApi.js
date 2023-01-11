import axios from "axios";
import { BASE_URL } from "../../contains/common";
import { changePositionCallAPiAuth } from "./LoginActionRedux";

export const login = (email, password, history) => (dispatch) => {
  const options = {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "6024",
    },
  };

  const body = {
    account: email,
    password: password,
  };

  return axios
    .post(`${BASE_URL}/account/login`, body, options).then(json => {
      if (json.data?.data?.token) {
        localStorage.setItem("user", JSON.stringify(json.data?.data?.token));
        dispatch(changePositionCallAPiAuth(true));
      }
      return json.data;
    })
}


export const register = (email, password, history) => (dispatch) => {
  const options = {
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "6024",
  },
  };

  const body = {
  account: email,
  password: password,
  };

  return axios
  .post(`${BASE_URL}/account/register`, body, options);
}

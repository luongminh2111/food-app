import axios from "axios";
import { BASE_URL } from "../../contains/common";
import { changePositionCallAPiAuth } from "./LoginActionRedux";
import jwt_decode from "jwt-decode";


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
        sessionStorage.setItem("user", JSON.stringify(json.data?.data?.token));
        const userId = jwt_decode(JSON.stringify(json.data?.data?.token))?.user_id;
        localStorage.setItem("user_id", userId);
        dispatch(changePositionCallAPiAuth(true));
      }
      return json.data;
    })
}


export const register = (email, password, account, history) => (dispatch) => {
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
  customerName: account
  };

  return axios
  .post(`${BASE_URL}/account/register`, body, options);
}

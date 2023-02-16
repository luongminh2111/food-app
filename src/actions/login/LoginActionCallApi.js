import axios from "axios";
import { BASE_URL } from "../../contains/common";
import { changePositionCallAPiAuth } from "./LoginActionRedux";
import jwt_decode from "jwt-decode";
axios.defaults.headers.common["ngrok-skip-browser-warning"] = "6024";

axios.defaults.headers.common["Authentication"] = JSON.parse(sessionStorage.getItem("user"));


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

export const updatePassw = ( oldPass, newPass, reNewPass) => (dispatch) => { 
  const options = {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "6024",
    },
    };
  
    const body = {
      oldPassword: oldPass,
      password: newPass,
      rePassword: reNewPass
    };
  
    return axios
    .post(`${BASE_URL}/account/updatePwd`, body, options).then(res => console.log("check res update :", res));
  }

import axios from "axios";
import { BASE_URL } from "../../contains/common";
// export const login = (email, password) => (dispatch) => {
//   const accessToken = window.localStorage.getItem("token");
//   fetch(`${BASE_URL}/account/login?account=${email}&password=${password}`, {
//     mode: "cors",
//     method: "GET",
//     dataType: "jsonp",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: accessToken,
//       "ngrok-skip-browser-warning": "6024",
//     },
//   }).then((res) => {});
// };

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
    .post(`${BASE_URL}/account/login`, body, options)
    .then((res) => {
      console.log("check json : ", res);
      alert(res.data.message);
      if(res.data.code === 200)
        history.push("/");
    });
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
    .post(`${BASE_URL}/account/register`, body, options)
    .then((res) => {
      console.log("check json : ", res);
      alert(res.data.message)
      if(res.data.code === 200)
      history.push("/login");
    });
  }

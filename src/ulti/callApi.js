import axios from "axios";
axios.defaults.headers.common["ngrok-skip-browser-warning"] = "6024";

const callApi = function callApi(url, options) {
  
  const accessToken = JSON.parse(sessionStorage.getItem("user"));
  if (!options.mode) {
    options.mode = "cors";
  }
  // headers: {
  //   'Authorization': 'Bearer ' + this.state.clientToken,
  // }
  if (options.headers) {
    if (!options.headers["Authorization"]) {
      Object.assign(options.headers, { Authorization: accessToken });
    }
    if (!options.headers["Content-Type"]) {
      Object.assign(options.headers, { "Content-Type": "application/json" });
    }
    if (!options.headers["X-SOCIAL-TIMESTAMP"]) {
      Object.assign(options.headers, {
        "X-ITSS-TIMESTAMP": new Date().getTime(),
      });
    }
  } else {
    options.headers = {
      Authorization: accessToken,
      "Content-Type": "application/json",
      "X-ITSS-TIMESTAMP": new Date().getTime(),
    };
  }
  options.url = url;
  return axios(options).then(
    (response) => {
      return response;
    },
    (error) => {
      return error;
    }
  );
};

export default callApi;

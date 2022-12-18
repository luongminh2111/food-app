
import { BASE_URL } from "../../contains/common";

export const login = (email, password) => (dispatch) => {
  const accessToken = window.localStorage.getItem('token')
  fetch(`${BASE_URL}/account/login?account=${email}&password=${password}`,
    {
      mode: 'cors',
      method: 'GET',
      dataType: 'jsonp',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': accessToken,
      },
    })
    .then(res => {
    });
}
export const register = (email, password) => (dispatch) => {
  fetch(`${BASE_URL}/account/register?account=${email}&password=${password}`,
    {
      mode: 'cors',
      method: 'GET',
      dataType: 'jsonp',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
    });
}
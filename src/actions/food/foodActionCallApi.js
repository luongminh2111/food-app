import { BASE_URL } from "../../contains/common";

export const saveFoodItem = (menuItem) => (dispatch) => {
  console.log("kiem tra item :", menuItem);
  fetch(`${BASE_URL}/account/register?`,
    {
      mode: 'cors',
      method: 'POST',
      dataType: 'jsonp',
      body: JSON.stringify(menuItem),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      console.log("kiem tra res: ", res);
    });
}
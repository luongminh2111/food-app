import { BASE_URL } from "../../contains/common";
import { fetchFood } from "./foodAction";
import axios from 'axios';
export const getFilterFood = (date) => (dispatch)=> {
    axios.get(`${BASE_URL}/daybook/currentday?date=${date}`)
    .then(res => {
      dispatch(fetchFood(res?.data));
    })
    .catch(error => console.log(error));
};

export const saveFoodItem = (menuItem) => (dispatch) => {  
  let type;
  if(menuItem.type === '朝ごはん'){
    type = 'BREAKFAST';
  } else if(menuItem.type === '昼ごはん'){
    type = 'LUNCH';
  }
  else if(menuItem.type === '晩ご飯'){
    type = 'DINNER';
  }
  const dataSave = {
    mealType: type,
    foodId: menuItem?.food?.id,
    amount: menuItem?.quantity,
    date: menuItem.date.getTime()
  }
  console.log(" lay time : ", menuItem.date.getTime());
  fetch(`${BASE_URL}/daybook/save`,
    {
      mode: 'cors',
      method: 'POST',
      dataType: 'jsonp',
      body: JSON.stringify(dataSave),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      console.log("kiem tra res: ", res);
    });
}
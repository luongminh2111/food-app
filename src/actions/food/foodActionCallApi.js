import { BASE_URL } from "../../contains/common";
import { fetchFood, changePositionCallAPi } from "./foodAction";
import axios from 'axios';
export const getFilterFood = (date) => (dispatch)=> {
    axios.get(`${BASE_URL}/daybook/currentday?date=${date}`)
    .then(res => {
      dispatch(fetchFood(res?.data));
    })
    .catch(error => console.log(error));
};

export const saveFoodItem = (menuItem, onclose) => (dispatch) => { 
  console.log("kiem tra item save :", menuItem) 
  let type;
  if(menuItem.type === '朝ごはん'){
    type = 'BREAK_FAST';
  } else if(menuItem.type === '昼ごはん'){
    type = 'LUNCH';
  }
  else if(menuItem.type === '晩ごはん'){
    type = 'DINNER';
  }
  const dataSave = {
    mealType: type,
    foodId: menuItem?.food?.id,
    amount: menuItem?.quantity,
    date: menuItem.date
  }
  console.log("kiem tra ok  :", dataSave);
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
        if(res?.status === 200){
          getFilterFood(menuItem.date);
          dispatch(changePositionCallAPi());
          onclose();
        }
    });
}

export const updateFoodItem = (menuItem, onclose) => (dispatch) => {  
  let type;
  console.log("kiem tra item : ", menuItem);
  if(menuItem?.type === '朝ごはん'){
    type = 'BREAK_FAST';
  } else if(menuItem?.type === '昼ごはん'){
    type = 'LUNCH';
  }
  else if(menuItem?.type === '晩ごはん'){
    type = 'DINNER';
  }
  const dataSave = {
    id: menuItem.idBE,
    mealType: type || menuItem.type,
    foodId: menuItem?.food?.id,
    amount: menuItem?.quantity,
    date: menuItem.date
  }
  console.log("kiem tra ok  :", dataSave);
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
        if(res?.status === 200){
          getFilterFood(menuItem.date);
          dispatch(changePositionCallAPi());
          onclose();
        }
    });
}
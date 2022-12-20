import { BASE_URL } from "../../contains/common";
import { fetchListFood, fetchFilterFood, changePositionCallAPi, deleteFoodItemRedux } from "./FoodAction";
import axios from 'axios';

export const getListFood = () => (dispatch)=> {
  axios.get(`${BASE_URL}/food/list`)
  .then(res => {
    dispatch(fetchListFood(res?.data));
  })
  .catch(error => console.log(error));
};

export const getFilterFood = (date) => (dispatch)=> {
    axios.get(`${BASE_URL}/daybook/currentday?date=${date}`)
    .then(res => {
      dispatch(fetchFilterFood(res?.data));
    })
    .catch(error => console.log(error));
};

export const deleteFoodItem = (id) => (dispatch)=> {
  return axios.post(`${BASE_URL}/daybook/delete/${id}`)
  .then(res => {
    if(res?.data?.message === "SUCCESS"){
      dispatch(deleteFoodItemRedux(id));
      return true;
    } 
    return false;
  })
  .catch(error => console.log(error));
};

export const saveFoodItem = (menuItem, isUpdate, onclose) => (dispatch) => { 
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
    id: menuItem?.id,
    mealType: type,
    foodId: menuItem?.foodId,
    amount: menuItem?.quantity,
    date: menuItem.date
  }
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
import { BASE_URL } from "../../contains/common";
import { fetchListRecipe } from "./RecipeAction";
import axios from 'axios';

export const getListRecipe = () => (dispatch)=> {
  axios.get(`${BASE_URL}/recipe/search`)
  .then(res => {
    dispatch(fetchListRecipe(res?.data));
  })
  .catch(error => console.log(error));
};

export const saveTargetItem = (targetItem, isUpdate, onclose) => (dispatch) => { 
  let type;
  if(targetItem.type === '朝ごはん'){
    type = 'BREAK_FAST';
  } else if(targetItem.type === '昼ごはん'){
    type = 'LUNCH';
  }
  else if(targetItem.type === '晩ごはん'){
    type = 'DINNER';
  }
  const dataSave = {
    id: targetItem?.id,
    mealType: type,
    foodId: targetItem?.foodId,
    amount: targetItem?.quantity,
    date: targetItem.date
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
    });
}
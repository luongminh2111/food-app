import { BASE_URL } from "../../contains/common";
import { fetchListRecipe } from "./RecipeAction";
import axios from 'axios';
axios.defaults.headers.common["ngrok-skip-browser-warning"] = "6024";

export const getListRecipe = () => (dispatch)=> {
  axios.get(`${BASE_URL}/recipe/search`)
  .then(res => {
    dispatch(fetchListRecipe(res?.data));
  })
  .catch(error => console.log(error));
};

export const getFilterRecipe = (valueSearch) => (dispatch)=> {
  axios.get(`${BASE_URL}/recipe/search?ingredients=${valueSearch}`)
  .then(res => {
    dispatch(fetchListRecipe(res?.data));
  })
  .catch(error => console.log(error));
};

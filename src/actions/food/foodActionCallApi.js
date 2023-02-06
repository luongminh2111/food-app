import { BASE_URL } from "../../contains/common";
import {
  fetchListFood,
  fetchFilterFood,
  changePositionCallAPi,
  deleteFoodItemRedux,
} from "./FoodAction";
import axios from "axios";
axios.defaults.headers.common["ngrok-skip-browser-warning"] = "6024";
axios.defaults.headers.common["Authentication"] = JSON.parse(sessionStorage.getItem("user"));
export const getListFood = () => (dispatch) => {
  axios
    .get(`${BASE_URL}/food/list`)
    .then((res) => {
      dispatch(fetchListFood(res?.data));
    })
    .catch((error) => console.log(error));
};

export const getFilterFood = (date) => (dispatch) => {
  axios
    .get(`${BASE_URL}/daybook/currentday?date=${date}`)
    .then((res) => {
      dispatch(fetchFilterFood(res?.data));
    })
    .catch((error) => console.log(error));
};

export const deleteFoodItem = (id) => (dispatch) => {
  return axios
    .post(`${BASE_URL}/daybook/delete/${id}`)
    .then((res) => {
      if (res?.data?.message === "SUCCESS") {
        dispatch(deleteFoodItemRedux(id));
        return true;
      }
      return false;
    })
    .catch((error) => console.log(error));
};

export const addFoodItem = (menuItem, date) => (dispatch) => {
  const options = {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "6024",
    },
  };

  const body = {
    id: menuItem?.id,
    name: menuItem?.name,
    calo: menuItem?.calo,
    carb: menuItem?.carb,
    protein: menuItem?.protein,
    fat: menuItem?.fat,
    image: menuItem?.image,
    gram: menuItem?.weight,
  };

  return axios
    .post(`${BASE_URL}/food/save`, body, options).then(json => {
      if (json.data?.code === 200) {
        dispatch(getListFood());
        dispatch(getFilterFood(date));
      }
      return json.data;
    })
}

export const saveFoodItem = (menuItem, isUpdate, onclose) => (dispatch) => {
  let type;
  if (menuItem.type === "Bữa sáng") {
    type = "BREAK_FAST";
  } else if (menuItem.type === "Bữa trưa") {
    type = "LUNCH";
  } else if (menuItem.type === "Bữa tối") {
    type = "DINNER";
  }
  const dataSave = {
    id: menuItem?.id,
    mealType: type,
    foodId: menuItem?.foodId,
    amount: menuItem?.quantity,
    date: menuItem.date,
  };
  fetch(`${BASE_URL}/daybook/save`, {
    mode: "cors",
    method: "POST",
    dataType: "jsonp",
    body: JSON.stringify(dataSave),
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "6024",
      "Authentication": JSON.parse(sessionStorage.getItem("user"))
    },
  }).then((res) => {
    if (res?.status === 200) {
      getFilterFood(menuItem.date);
      dispatch(changePositionCallAPi());
      onclose();
    }
  });
};

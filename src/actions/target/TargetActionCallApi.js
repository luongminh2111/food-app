import { BASE_URL } from "../../contains/common";
import { fetchTarget } from "./TargetAction";
import axios from "axios";
import { changePositionCallAPi } from "../food/FoodAction";
axios.defaults.headers.common["ngrok-skip-browser-warning"] = "6024";

export const getTarget = (date) => (dispatch) => {
  axios
    .get(`${BASE_URL}/diary/currentday/?date=${date}`)
    .then((res) => {
      dispatch(fetchTarget(res?.data));
    })
    .catch((error) => console.log(error));
};

export const saveTargetItem = (targetItem, onclose, date) => (dispatch) => {
  let dataSave = {
    modeType: targetItem.mode,
    type: targetItem.type,
    date: targetItem.date,
    id: targetItem?.id,
  };
  if (targetItem.mode === "Tự nhập") {
    if (targetItem.type === "calo") {
      dataSave = {
        ...dataSave,
        calories: Number(targetItem.freeModeCalories),
      };
    } else {
      dataSave = {
        ...dataSave,
        carb: targetItem.carb,
        protein: targetItem.protein,
        fat: targetItem.fat,
      };
    }
  } else {
    dataSave = {
      ...dataSave,
      weight: targetItem.weight,
      height: targetItem.height,
      age: targetItem.age,
      activityType: targetItem.activityMode,
      gender: targetItem.gender,
    };
  }

  fetch(`${BASE_URL}/diary/save`, {
    mode: "cors",
    method: "POST",
    dataType: "jsonp",
    body: JSON.stringify(dataSave),
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "6024",
    },
  }).then((res) => {
    if (res?.status === 200) {
      getTarget(date);
      dispatch(changePositionCallAPi());
      onclose();
    }
  });
};

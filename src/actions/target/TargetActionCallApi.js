import { BASE_URL } from "../../contains/common";
import { fetchTarget } from "./TargetAction";
import axios from "axios";
import { changePositionCallAPi } from "../food/FoodAction";

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
  if (targetItem.mode === "フリーモード") {
    if (targetItem.type === "カロリー") {
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
  console.log("kiem tra dataa asvee :", dataSave);

  fetch(`${BASE_URL}/diary/save`, {
    mode: "cors",
    method: "POST",
    dataType: "jsonp",
    body: JSON.stringify(dataSave),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log("kiem tra resssss :", res);
    if (res?.status === 200) {
      getTarget(date);
      dispatch(changePositionCallAPi());
      console.log("kiem tra ressssshauhakshukahfua :");
      onclose();
    }
  });
};

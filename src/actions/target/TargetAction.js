import { activityModes } from "../../contains/dataConst";
export const fetchTarget = (data) => (dispatch) => {
  dispatch({ type :"GET_TARGET", data});
};
  
export const updatePropertiesTarget = (key, value) => (dispatch) => {
  dispatch({ type :"UPDATE_PROPERTIES_TARGET", key, value});
};

export const handleCalcCalo = (target) => {
  const valueR = resultR(target.activityType);
 if (target.modeType === "Đề xuất") {
    let bmr = 0;
    if (target.gender === "Nam") {
      bmr = 13.397 * target.weight + 4.799 * target.height - 5.677 * target.age + 88.362;
    } else {
      bmr = 9.247 * target.weight + 3.098 * target.height - 4.33 * target.age + 447.593;
    }
    return Math.round(bmr * valueR * 100) / 100;
  }
};

const resultR = (activityMode) => {
  switch (activityMode) {
    case activityModes[0].value:
      return 1.2;
    case activityModes[1].value:
      return 1.375;
    case activityModes[2].value:
      return 1.55;
    case activityModes[3].value:
      return 1.725;
    case activityModes[4].value:
      return 1.9;
    default:
      return 0;
  }
};
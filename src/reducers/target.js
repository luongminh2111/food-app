const initState = {
  data: [],
  editData: {
    date: (new Date()).getTime(),
    mode: "Tự nhập",
    type: "calo",
    calo: 0,
    protein: 0,
    fat: 0,
    carb: 0,
    gender: "Nam",
    age: 0,
    weight: 0,
    height: 0,
    activityType: "Vận động nhẹ",
  },
};

const target = (state = initState, action) => {
  switch (action.type) {
    case "GET_TARGET":
      return {
        ...state,
        data: action.data.data,
      };
    case "UPDATE_PROPERTIES_TARGET":
      return {
        ...state,
        editData: { ...state.editData, [action.key]: action.value },
      };
    default:
      return state;
  }
};

export default target;

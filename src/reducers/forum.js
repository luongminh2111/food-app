const initState = {
  listPost: []
};

const forum = (state = initState, action) => {
  switch (action.type) {
    case "GET_LIST_POST":
      return {
        ...state,
        listPost: action.data,
      };
    case "GET_LIST_FILTER_FOOD": {
      return {
        ...state,
        listFilterFood: action.data.data,
      };
    }
    default:
      return state;
  }
};

export default forum;

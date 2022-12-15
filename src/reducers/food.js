
const initState = {
  listFoods: [],
};

const food = (state = initState, action) => {
  switch (action.type) {

    case 'GET_LIST_FOOD':
      return {
        ...state,
        listFoods: action.data.data,
      };
    default:
      return state;
  }
};

export default food;

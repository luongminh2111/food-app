
const initState = {
  listFoods: [],
  positionCallApi: false,
};

const food = (state = initState, action) => {
  switch (action.type) {

    case 'GET_LIST_FOOD':
      return {
        ...state,
        listFoods: action.data.data,
      };
      case 'POSITION_CALL_API':
      return {
        ...state,
        positionCallApi: !state.positionCallApi,
      };
    default:
      return state;
  }
};

export default food;

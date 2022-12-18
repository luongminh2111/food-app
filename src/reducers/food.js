
const initState = {
  listFoods: [],
  listFilterFood: [],
  positionCallApi: false,
};

const food = (state = initState, action) => {
  switch (action.type) {

    case 'GET_LIST_FOOD':
      return {
        ...state,
        listFoods: action.data.data,
      };
    case 'GET_LIST_FILTER_FOOD':{
      return{
        ...state,
        listFilterFood: action.data.data,
      }
    }  
    case 'DELETE_FOOD_ITEM':
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

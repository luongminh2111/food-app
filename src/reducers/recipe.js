
const initState = {
  data: [],
};
  
const recipe = (state = initState, action) => {
  switch (action.type) {
    case 'GET_LIST_RECIPE':
      return {
        ...state,
        data: action?.data?.data,
      };
    default:
      return state;
  }
};
  
export default recipe;
  
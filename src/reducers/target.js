
const initState = {
    data: [],
    positionCallApiTarget: false,
  };
  
  const target = (state = initState, action) => {
    switch (action.type) {
  
      case 'GET_TARGET':
        return {
          ...state,
          data: action.data.data,
        };
      default:
        return state;
    }
  };
  
  export default target;
  
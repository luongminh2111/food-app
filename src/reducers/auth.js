const initState = {
  positionCallApiCheckAuth: false,
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_POSITION_CALL_API_CHECK_AUTH":
      return {
        ...state,
        positionCallApiCheckAuth: action.status,
      };
    
    default:
      return state;
  }
};

export default auth;

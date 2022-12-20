
export const fetchTarget = (data) => (dispatch) => {
    dispatch({ type :"GET_TARGET", data});
  };
  

export const changePositionCallApiTarget = () => (dispatch) => {
    dispatch({ type :"POSITION_CALL_API_TARGET"});
};
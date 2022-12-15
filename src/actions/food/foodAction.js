
export const fetchFood = (data) => (dispatch) => {
  dispatch({ type :"GET_LIST_FOOD", data});
};


export const changePositionCallAPi = () => (dispatch) => {
  dispatch({ type :"POSITION_CALL_API"});
};
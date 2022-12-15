
export const fetchFood = (data) => (dispatch) => {
  dispatch({ type :"GET_LIST_FOOD", data});
};
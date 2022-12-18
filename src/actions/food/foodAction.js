
export const fetchListFood = (data) => (dispatch) => {
  dispatch({ type :"GET_LIST_FOOD", data});
};

export const fetchFilterFood = (data) => (dispatch) => {
  dispatch({ type :"GET_LIST_FILTER_FOOD", data});
};

export const deleteFoodItemRedux = (id) => (dispatch) => {
  dispatch({ type :"DELETE_FOOD_ITEM", id});
};


export const changePositionCallAPi = () => (dispatch) => {
  dispatch({ type :"POSITION_CALL_API"});
};
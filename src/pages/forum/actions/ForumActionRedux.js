export const fetchListPost = (data) => (dispatch) => {
  dispatch({ type :"GET_LIST_POST", data});
};

export const fetchListComment = (data) => (dispatch) => {
  dispatch({ type :"GET_LIST_COMMENT", data});
};

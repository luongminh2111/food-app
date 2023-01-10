
export const fetchTarget = (data) => (dispatch) => {
  dispatch({ type :"GET_TARGET", data});
};
  
export const updatePropertiesTarget = (key, value) => (dispatch) => {
  dispatch({ type :"UPDATE_PROPERTIES_TARGET", key, value});
};
  
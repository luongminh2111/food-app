import { combineReducers } from 'redux';
import food from './food';
import target from './target';
import recipe from './recipe';

export default combineReducers({
  food,
  target,
  recipe,
});

import { combineReducers } from 'redux';
import food from './food';
import target from './target';
import recipe from './recipe';
import auth from './auth';
import forum from './forum';

export default combineReducers({
  food,
  target,
  recipe,
  auth,
  forum,
});

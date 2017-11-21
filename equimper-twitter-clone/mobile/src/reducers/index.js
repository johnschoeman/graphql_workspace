import { combineReducers } from 'redux';

import nav from './navigation';
import user from './user';

export default () => combineReducers({
  nav,
  user,
});
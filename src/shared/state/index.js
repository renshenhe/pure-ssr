import { combineReducers } from 'redux';

import {
  postsBySubreddit,
  selectedSubreddit,
} from './reddit/reducer';
import todoList from './todos/reducer';

export default combineReducers({
  postsBySubreddit,
  selectedSubreddit,
  todoList,
});

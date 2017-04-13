import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import {
  addTodo,
  setVisibilityFilter,
  toggleTodo,
} from './actions';

// export const addTodo = text => ({ type: ADD_TODO, id: nextTodoId++, text });
// export const setVisibilityFilter = filter => ({ type: SET_VISIBILITY_FILTER, filter });
// export const toggleTodo = id => ({ type: TOGGLE_TODO, id });

const mockStore = configureMockStore([thunkMiddleware]);

afterEach(() => { fetchMock.restore() });

test('addTodo action test', () => {
  const text = 'hello';
  return store.dispatch(addTodo(text))
})
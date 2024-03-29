// @flow

import React from 'react';

import Todo from '../Todo/Todo';

type Props = {
  todos: Array<any>,
  onTodoClick: Function,
};

const TodoList = ({ todos, onTodoClick }: Props) => (
  <ul>
    { todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

export default TodoList;
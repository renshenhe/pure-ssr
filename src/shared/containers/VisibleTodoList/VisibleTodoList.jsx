/* flow */

import { connect } from 'react-redux';
import { toggleTodo } from '../../state/todos/actions';
import TodoList from '../../components/TodoList/TodoList';

const getVisibleTodos = (todos: Array<string>, filter: string) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
}


const mapStateToProps = ({ todoList }) => ({ todos: getVisibleTodos(todoList.todos, todoList.visibilityFilter )});

const mapDispatchToProps = dispatch => ({ onTodoClick: id => { dispatch(toggleTodo(id))} });

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
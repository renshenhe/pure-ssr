import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../state/todos/actions';
import Link from '../../components/Link/Link';

const mapStateToProps = (state, ownProps) => ({active: ownProps.filter === state.todoList.visibilityFilter });

const mapDispatchToProps = (dispatch, ownProps) => ({ onClick: () => { dispatch(setVisibilityFilter(ownProps.filter))} });

export default connect(mapStateToProps, mapDispatchToProps)(Link);
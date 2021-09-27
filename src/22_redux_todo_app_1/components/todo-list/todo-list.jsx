import PropTypes from 'prop-types';

import TodoItem from '../todo-item/todo-item';

import './todo-list.css';

const TodoList = ({ tasksList }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }) => (
      <TodoItem key={id} text={text} isCompleted={isCompleted} />
    ))}
  </ul>
);

TodoList.propTypes = {
  tasksList: PropTypes.array,
};

TodoList.defaultProps = {
  tasksList: [],
};

export default TodoList;

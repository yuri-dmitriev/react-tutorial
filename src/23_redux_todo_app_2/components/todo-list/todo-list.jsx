import PropTypes from 'prop-types';

import TodoItem from '../todo-item/todo-item';

import './todo-list.css';

const TodoList = ({ tasksList, removeTask, completeTask }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }) => (
      <TodoItem
        key={id}
        completeTask={completeTask}
        removeTask={removeTask}
        id={id}
        text={text}
        isCompleted={isCompleted}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
};

TodoList.defaultProps = {
  tasksList: [],
  removeTask: () => {},
  completeTask: () => {},
};

export default TodoList;

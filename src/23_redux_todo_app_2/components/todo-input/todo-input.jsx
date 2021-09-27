import PropTypes from 'prop-types';

import './todo-input.css';

const TodoInput = ({ value, onChange, onKeyPress }) => (
  <div className="todo-input-wrapper">
    <i className="fas fa-plus" />
    <input
      className="todo-input"
      placeholder="Click to add task"
      onChange={onChange}
      onKeyPress={onKeyPress}
      value={value}
    />
  </div>
);

TodoInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  onKeyPress: PropTypes.func,
};

TodoInput.defaultProps = {
  onChange: () => {},
  value: '',
  onKeyPress: () => {},
};

export default TodoInput;

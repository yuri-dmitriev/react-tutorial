import { Component } from 'react';
import { connect } from 'react-redux';

import { addTask, removeTask, completeTask } from '../../actions/actionCreator';

import TodoInput from '../../components/todo-input/todo-input';
import TodoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import './todo.css';

class Todo extends Component {
  state = {
    activeFilter: 'all',
    taskText: '',
  };

  onInputChange = ({ target: { value }}) => {
    this.setState({
      taskText: value,
    });
  };

  addTask = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length > 3 && key === 'Enter') {
      const { addTask } = this.props;

      addTask(new Date().getTime(), taskText, false);

      this.setState({
        taskText: '',
      });
    }
  };

  render() {
    const { activeFilter, taskText } = this.state;
    const { tasks, removeTask, completeTask } = this.props;
    const isTasksListEmpty = Array.isArray(tasks) && tasks.length === 0;

    return (
      <div className="todo-wrapper">
        <TodoInput onKeyPress={this.addTask} onChange={this.onInputChange} value={taskText} />
        {!isTasksListEmpty && <TodoList tasksList={tasks} removeTask={removeTask} completeTask={completeTask} />}
        {!isTasksListEmpty && <Footer tasksLeft={tasks.length} activeFilter={activeFilter} />}
      </div>
    );
  }
}

export default connect(state => ({
  tasks: state.tasks,
}), { addTask, removeTask, completeTask })(Todo);

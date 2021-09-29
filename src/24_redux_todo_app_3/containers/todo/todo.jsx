import { Component } from 'react';
import { connect } from 'react-redux';

import { addTask, removeTask, completeTask, changeFilter } from '../../actions/actionCreator';

import TodoInput from '../../components/todo-input/todo-input';
import TodoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import './todo.css';

class Todo extends Component {
  state = {
    taskText: '',
  };

  onInputChange = ({ target: { value }}) => {
    this.setState({
      taskText: value,
    });
  };

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
      case 'active':
        return tasks.filter(task => !task.isCompleted);
      default:
        return tasks;
    }
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
    const { taskText } = this.state;
    const { tasks, removeTask, completeTask, changeFilter, filter } = this.props;
    const isTasksListEmpty = Array.isArray(tasks) && tasks.length === 0;
    const filteredTasks = this.filterTasks(tasks, filter);

    return (
      <div className="todo-wrapper">
        <TodoInput onKeyPress={this.addTask} onChange={this.onInputChange} value={taskText} />
        {!isTasksListEmpty && <TodoList tasksList={filteredTasks} removeTask={removeTask} completeTask={completeTask} />}
        {!isTasksListEmpty && <Footer tasksLeft={tasks.length} changeFilter={changeFilter} activeFilter={filter} />}
      </div>
    );
  }
}

export default connect(({ tasks, filter }) => ({
  tasks,
  filter,
}), { addTask, removeTask, completeTask, changeFilter })(Todo);

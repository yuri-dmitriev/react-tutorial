import { Component } from 'react';

import TodoInput from '../../components/todo-input/todo-input';
import TodoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import './todo.css';

const TASKS = [
  {
    id: 1,
    text: 'Learn ReactJS',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Learn Redux',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Learn React Router',
    isCompleted: false,
  },
];

class Todo extends Component {
  state = {
    activeFilter: 'all',
  };

  render() {
    const { activeFilter } = this.state;
    const tasksList = TASKS;
    const isTasksListEmpty = Array.isArray(tasksList) && tasksList.length === 0;

    return (
      <div className="todo-wrapper">
        <TodoInput />
        {!isTasksListEmpty && <TodoList tasksList={tasksList} />}
        {!isTasksListEmpty && <Footer tasksLeft={tasksList.length} activeFilter={activeFilter} />}
      </div>
    );
  }
}

export default Todo;

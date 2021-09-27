import ReactDOM from 'react-dom';
import App from './23_redux_todo_app_2/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './23_redux_todo_app_2/store';

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

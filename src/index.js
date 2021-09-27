import ReactDOM from 'react-dom';
import App from './22_redux_todo_app_1/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './22_redux_todo_app_1/store';

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

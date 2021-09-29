import ReactDOM from 'react-dom';
import App from './24_redux_todo_app_3/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './24_redux_todo_app_3/store';

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

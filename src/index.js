import ReactDOM from 'react-dom';
import App from './21_redux_modules/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './21_redux_modules/store';

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

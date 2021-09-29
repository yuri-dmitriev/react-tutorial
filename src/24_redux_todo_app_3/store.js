import { createStore, compose, applyMiddleware } from 'redux';
import { save, load } from 'redux-localstorage-simple';
import rootReducer from './reducers/index';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

const configureStore = (preLoadedState = {}) => (
  createStore(
    rootReducer,
    preLoadedState,
    composeEnhancers(
      applyMiddleware(save({ namespace: 'todo-list' }))
    )
  )
);

const store = configureStore(load({ namespace: 'todo-list' }));

export default store;

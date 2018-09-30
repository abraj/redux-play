import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// Reference: https://redux.js.org/basics/exampletodolist
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import rootReducer from './reducers';

// NOTE: 'redux-thunk' is another popular asynchronous middleware for Redux
const store = createStore(rootReducer, applyMiddleware(reduxPromise));

// Another way to create redux store
// const store = applyMiddleware(reduxPromise)(createStore)(rootReducer);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

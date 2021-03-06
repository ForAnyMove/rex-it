import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

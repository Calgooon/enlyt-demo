import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reducer from './redux/reducers';
import rootSaga from './redux/sagas';
import { logger } from 'redux-logger';

import App from './App';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   reducer,
   applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

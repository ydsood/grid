import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css';
import reducers from './reducers';
import './index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

const store = applyMiddleware(promise, thunk)(createStore)(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

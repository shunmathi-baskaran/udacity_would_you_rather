import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../src/reducers'
import middleware from '../src/middleware'
import {BrowserRouter} from 'react-router-dom'

const store = createStore(reducers,middleware);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

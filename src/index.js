import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css';
import './styles/style.css'
import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider> ,
  document.getElementById('root')
);

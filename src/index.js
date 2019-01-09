import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store2'
import Counter3 from './components/Counter3';

/**
 * 使用系统库实现
 */
ReactDOM.render(
  <Provider store={store}>
    <Counter3/>
  </Provider>,
  document.getElementById('root'));
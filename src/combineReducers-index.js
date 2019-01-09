import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from './redux';
import Counter from './components/Counter';
import Todo from './components/Todo';
// import {createStore} from 'redux';  // 官方redux

// ReactDOM.render(<Counter/>, document.querySelector('#root'));
ReactDOM.render(<div><Counter/><Todo/></div>, document.querySelector('#root'));

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from './redux';
import $ from 'jquery';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

$('#root').append(`
    <p id="counter"></p>
    <button id="increaseBtn">+</button>
    <button id="decreaseBtn">-</button>
`);

// state是状态树，可以是任意的解构
// action是一个纯对象，告诉将要做什么 type是必需的属性 {type: 'INCREASE, amount:1}{type: 'DECREASE, amount:1}
let reducer = (state={number:0}, action)=>{
  if(action === undefined) return state;
  switch (action.type) {
    case INCREASE:
      return {number: state.number+action.amount};
    case DECREASE:
      return {number: state.number-action.amount};
    default:
      return state;
  }
};

// {getState, subscribe, dispatch}
let store = createStore(reducer);
console.log(store.getState());

let render = ()=>{
  // document.querySelector('#counter').innerHTML = store.getState().number;
  $('#counter').html(store.getState().number);
};
$('#increaseBtn').click(()=>{
  store.dispatch({type: INCREASE, amount:1});
});
$('#decreaseBtn').click(()=>{
  store.dispatch({type: DECREASE, amount:1});
});

// 当仓库里的state发生变化的时候，会重新执行render，读取最新的状态并更新视图
store.subscribe(render);

render();

// ReactDOM.render(<App />, document.getElementById('root'));


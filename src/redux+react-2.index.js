import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from './redux';
// import {createStore} from 'redux';  // 官方redux

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

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

// action creators
let increase = (amount)=>(
  {type:INCREASE, amount}
);

let store = createStore(reducer);

class Counter extends Component{
  constructor() {
    super();
    this.state = {number:store.getState().number};
  }

  // 组件加载的时候监听
  componentWillMount() {
    this.unsubscribe = store.subscribe(()=>{
      this.setState({
        number: store.getState().number
      })
    })
  }

  // 组件卸载的时候取消监听
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={()=>store.dispatch(increase(2))}>+</button>
        <button onClick={()=>store.dispatch({type:DECREASE, amount:2})}>-</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter/>, document.querySelector('#root'));

import React, {Component} from 'react';
import {store} from '../store';
import {INCREASE, DECREASE} from '../actions';

// action creators
let increase = (amount)=>(
  {type:INCREASE, amount}
);

export default class Counter extends Component{
  constructor() {
    super();
    this.state = {number:store.getState().counter.number};
  }

  // 组件加载的时候监听
  componentWillMount() {
    this.unsubscribe = store.subscribe(()=>{
      this.setState({
        number: store.getState().counter.number
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

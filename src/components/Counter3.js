import React, { Component } from 'react';
import {DECREASE, INCREASE} from '../actions';
import {connect} from 'react-redux';

/**
 * 使用库编写
 */
// UI组件
class Counter2 extends Component{
  render() {
    return (
      <div>
        <p>{this.props.value}</p>
        <button onClick={this.props.onIncrease}>+</button>
        <button onClick={this.props.onDecrease}>-</button>
      </div>
    )
  }
}

// 把number映射成value了
let mapStateToProps = (state)=>({value: state.number});

// 把dispatch方法映射成UI组件的属性
let mapDispatchToProps = (dispatch)=>(
  {
    onIncrease: ()=>dispatch({type: INCREASE, amount:2}),
    onDecrease: ()=>dispatch({type: DECREASE, amount:2})
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter2);
import React, { Component } from 'react';
import {store} from '../store';
import {ADD_TODO, DELETE_TODO} from '../actions';

/**
 *
 */
export default class Todo extends Component{
    constructor(porps) {
        super(porps);
        this.state = {
          list: store.getState().todo.list
        }
    }

    handleKeyDown = (event)=>{
        if(event.keyCode === 13 && event.target.value.length>0) {
          // let list = this.state.list;
          // list.push(event.target.value);
          // this.setState({list});

          store.dispatch({
            type: ADD_TODO,
            text: event.target.value // 事件源的值
          });
          event.target.value = ''
        }
    };

    deleteTodo = (index)=>{
      store.dispatch({
        type: DELETE_TODO,
        index
      });
    };

    componentWillMount() {
      this.unsubscribe = store.subscribe(()=>{
        this.setState({
          list: store.getState().todo.list
        })
      })
    }
    // 路由切换时销毁
    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
        return (
            <div>
              <input type="text" onKeyDown={this.handleKeyDown}/>
              <ul>
                {
                  this.state.list.map((todo,index)=>(
                    <li key={index}>{todo}<button onClick={()=>this.deleteTodo(index)}>-</button></li>
                  ))
                }
              </ul>
            </div>
        )
    }
}
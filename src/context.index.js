import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {PropTypes} from 'prop-types';

/**
 * context
 */
class Container extends Component{
  getChildContext() {
    // 返回一个对象，这个对象就是子组件的context对象
    return {
      color: 'red'
    }
  }

  render() {
    return (
      <MessageList messages={this.props.messages}/>
    )
  }
}
// 父
Container.childContextTypes = {
  color: PropTypes.string
};

class MessageList extends Component{
  render() {
    return (
      <ul>
        {
          this.props.messages.map((message,index)=><Message key={index} message={message}/>)
        }
      </ul>
    )
  }
}
class Message extends Component{
  render() {
    return (
      <li style={{color:this.context.color}}>{this.props.message}</li>
    )
  }
}
// 子
Message.contextTypes = {
  color: PropTypes.string
};

let messages = [1,2,3];
ReactDOM.render(
  <Container messages={messages}>
  </Container>,
  document.querySelector('#root'));

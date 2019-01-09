import React, {Component} from 'react';
import PropTypes from 'prop-types';


// 返回函数
// mapStateToProps把（store里的）状态对象映射成（Counter2）属性
let connect = (mapStateToProps, mapDispatchToProps)=>(Component)=>{
  // 容器组件
  class Proxy extends Component {
    constructor(){
      super();
      this.state = {};  // this.state={value:0}
    }
    // 订阅状态变化事件
    componentWillMount() {
      this.unsubcribe = this.context.store.subscribe(()=>{
        this.setState(mapStateToProps(this.context.store.getState()))
      })
    }
    componentWillUnmount() {
      this.unsubcribe();
    }
    render() {
      // 把number作为属性传给Component(即Counter2)
      return <Component {...this.state} {...mapDispatchToProps(this.context.store.dispatch)}/>
    }
  }
  Proxy.contextTypes = {
    store: PropTypes.object
  };
  return Proxy;
};

export default connect;
// 创建仓库
// 传入处理器reducer, 传入老的state和action,返回新的state
const createStore = (reducer)=>{
  // 状态
  let state;
  // 监听函数数组
  let listeners = [];

  // 向仓库发送action
  let dispatch = (action)=>{
    // 传入老的state, 指令，返回新的state
    state = reducer(state, action);
    // 通知所有监听者(render)
    listeners.forEach(listener=>listener());
  };

  // 订阅仓库内的状态变化时间，当状态发生变化，会调用对应的监听函数
  let subscribe = (listener)=>{
    listeners.push(listener);
    // 订阅方法执行后会返回一个取消订阅的函数，调用它可以取消订阅
    return ()=>{
      // 取消订阅
      listeners = listeners.filter(l=>listener!==l);
    }
  };

  // 用来获取最新的状态
  let getState = ()=>state;

  dispatch();

  return {
    getState,  // 获取最新的状态对象
    subscribe, // 原来订阅状态变化事件
    dispatch   // 发射action,通知所有监听者
  }
};

export {createStore}
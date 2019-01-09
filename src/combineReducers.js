// 父，返回一个函数   先传入一个reducer,它返回一个函数
// 很多状态分而治之
let combineReducers = (reducers)=>
  (state={}, action)=>{ // 返回一个reducer
    let newState = {};
    for (var key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  };

export default combineReducers;
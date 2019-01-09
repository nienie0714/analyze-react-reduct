import {createStore} from './redux';
import counter from './reducers/counter'
import todo from './reducers/todo'
import combineReducers from './combineReducers'
/**
 * 旧状态{number:0} {list:[]}
 * 新状态{counter:{number:0}, t odo:{list:[]}}
 */


let reducer = combineReducers({
  counter,
  todo
});
let store = createStore(reducer);
export {store};
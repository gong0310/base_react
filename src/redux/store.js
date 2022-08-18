import {
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import allReducer from './reducers/index'




// 引入redux-thunk，用于支持异步action

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
const store = createStore(allReducer, applyMiddleware(thunk)); // 使用applyMiddleware添加中间件

export default store;

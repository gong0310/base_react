// 引入count的ui组件
import CountUI from "../ReactRedux";

// 引入connect用于连接UI组件和redux
import { connect } from "react-redux";

import {
  createDecrementAction,
  createIncremenAction,
  createIncremenAsyncAction,
} from "../../redux/actions/count";

// 传递其他props---状态，返回一个对象给UI组件作为props
// 映射状态
const mapStateToProps = (state) => {
  return {
    msg: "其他props",
    count: state,
  };
};
// 传递其他props---操作状态的方法，返回一个对象给UI组件作为props
// 映射操作状态的方法
const mapDispatchToProps = (dispatch) => {
  return {
    changeMsg: () => {
      console.log("传递其他props方法");
    },
    jia: (data) => {
      dispatch(createIncremenAction(data));
    },
    jian: (data) => {
      dispatch(createDecrementAction(data));
    },
    jiaAsync: (data, time) => {
      dispatch(createIncremenAsyncAction(data, time));
    },
  };
};
// 使用connect()()创建容器组件，通过props将redux传递给ui组件
// const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI);

// 简写,写了action后会自动dispatch
const CountContainer = connect((state) => ({ count: state }), {
  jian: createDecrementAction,
  jia: createIncremenAction,
  jiaAsync: createIncremenAsyncAction,
})(CountUI);

export default CountContainer;

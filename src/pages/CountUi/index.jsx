import { Component } from "react";
import { connect } from "react-redux";

import {
  createDecrementAction,
  createIncremenAction,
  createIncremenAsyncAction,
} from "../../redux/actions/count";

class CountUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("react-redux", props);
  }

  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(value * 1);
  };
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(value * 1);
  };
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const count = this.props.count;

    if (count % 2 === 0) return;
    this.props.jia(value * 1);
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.jiaAsync(value * 1, 500);
  };
  render() {
    return (
      <>
        <h1>ReactRedux</h1>
        <h3>当前求和为：{this.props.count}</h3>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>如果和是奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </>
    );
  }
}

// 简写,写了action后会自动dispatch
// 使用connect()()创建容器组件，通过props将redux传递给ui组件，是一个HOC

export default connect((state) => ({ count: state.count }), {
  jian: createDecrementAction,
  jia: createIncremenAction,
  jiaAsync: createIncremenAsyncAction,
})(CountUI);

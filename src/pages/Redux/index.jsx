import { Component } from "react";
import store from "../../redux/store";
import {
  createDecrementAction,
  createIncremenAction,
  createIncremenAsyncAction
} from "../../redux/actions/count";
/**
 * redux 不是react独有的，还可用于vue angular等项目，只是与react配合多而已
 *
 * action: 动作对象，{type:'',data:''}
 * reducer： 初始化状态，加工状态
 * store：将state、action、reducer链接在一起
 * 
 * react-redux是facebook出品跟react一样，目的的为了让react更简便使用redux
 */

class Redux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    // 检测redux中状态的变化，只要变化，就调用render
    store.subscribe(() => {
      this.forceUpdate(); // 强制刷新页面
    });
  }
  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncremenAction(value * 1));
  };
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDecrementAction(value * 1));
  };
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const count = store.getState().count;

    if (count % 2 === 0) return;
    store.dispatch(createIncremenAction(value * 1));
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncremenAsyncAction(value * 1,500));
  };
  render() {
    return (
      <>
        <h1>Redux</h1>
        <h3>当前求和为：{store.getState().count}</h3>
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
export default Redux;

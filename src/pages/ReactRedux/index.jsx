import { Component } from "react";

/**
 * react-redux是facebook出品跟react一样，目的的为了让react更简便使用redux
 * 1、通过props将redux传递给ui组件 以props的方式读该redux，页面不需要再引入store
 *  provider组件包裹在根组件App外层，目的是使APP所有的后代容器组件都可以接收到store。
 * 
 * 2、不需要store.subscribe进行对redex状态的监听
 * 把业务逻辑跟redux拆开了，解耦
 */

class Redux extends Component {
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
export default Redux;

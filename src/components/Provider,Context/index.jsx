import React, { Component, Fragment, createContext } from "react";

//调用 React.createContext()创建Povider(提供数据),Consumer(消费数据)两个组件
const { Provider, Consumer } = createContext();
class ProviderContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }
  changeColor() {
    this.setState({
      color: "bule",
    });
  }

  render() {
    return (
      <Fragment>
        <h1>ProviderContext</h1>
        <button
          onClick={() => {
            this.changeColor();
          }}
        >
          改变color值
        </button>
        {/* 设置value属性，表示要传递的数据 */}
        <Provider value={this.state.color}>
          <Child>我是插槽,props.children获取</Child>
        </Provider>
      </Fragment>
    );
  }
}
class Child extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (
      <Fragment>
      <h2>儿子</h2>
      <p>{this.props.children}</p>
      <Sun />
    </Fragment>
    );
  }
}
const Sun = (props) => {
  return (
    <Fragment>
      <h2>孙子</h2>
      <Consumer>{(data) => <p> 孙子收到数据：{data}</p>}</Consumer>
    </Fragment>
  );
};

export default ProviderContext;

import React, { Component, Fragment, createContext } from "react";

//调用 React.createContext()创建Povider(提供数据),Consumer(消费数据)两个组件。跨越组件层级直接传递变量，实现数据共享
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
          <Child>我是插槽,props.children获取。还可以通过render props获取</Child>
        </Provider>
        <A render={(msg) => <B msg={msg} />} />
      </Fragment>
    );
  }
}
class Child extends Component {
  constructor(props) {
    super(props);
    console.log(props);
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
const A = (props) => {
  const msg = "A里面的数据";
  return (
    <Fragment>
      <h2>A</h2>
      {/* <B/>组件作为render(随便命名)函数的返回值，插入A组件 */}
      {props.render(msg)}
    </Fragment>
  );
};
/**
 * 都是类似vue插槽技术(不会写死预留组件，更灵活)：
 * render props，可以在A组件预留一个位置，并且把数据传给预留组件(vue作用域插槽)
 * props.children 可以在A组件预留一个位置，但不能把数据传给预留组件(vue默认插槽)
 */
const B = (props) => {
  return (
    <Fragment>
      <h2>B</h2>
      {props.msg}
    </Fragment>
  );
};

export default ProviderContext;

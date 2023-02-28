import { Component } from "react";

class LifeCycle extends Component {
  /**
   * 挂载阶段：constructor -> getDerivedStateFromProps -> render -> componentDidMount
   * 更新阶段：getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate
   * 卸载阶段：componentWillUnmount
   * 捕获后代组件报错：componentDidCatch 统计错误发给后台
   */
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      msg: "",
    };
  }
  // 处理错误边界，把错误控制在一定范围之内
  static getDerivedStateFromError(error){
    console.log('如果当前组件的后代组件报错会调用，并返回一个对象来更新state')
    return {
      msg: error || '网络出错了',
    };
  }
  /**
   * 调用render方法之前调用，并且在初始挂载及后续更新时会被调用。它返回一个对象来更新state,如果返回null,则不更新任何内容。
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps", nextProps, prevState);

    if (nextProps.msg !== prevState.msg) {
      return {
        msg: nextProps.msg,
      };
    }
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  // 更新
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    /**
     * 父组件更新，子组件必然更新，还有this.setState({})空对象，都会引起重新render,效率低，所以shouldComponentUpdate来了
     * shouldComponentUpdate默认返回true渲染。
     * PureComponent（纯组件，内部重写了ShouldComponentUpdate，自动帮我们处理了对比前后值来决定是否重新渲染）、hooks使用 React.memo都是类似功能
     * 一般使用PureComponent
     */
    console.log("ShouldComponentUpdate");
    // this.State是老值,所以可通过比较这两个是否一样，决定是否重新render
    console.log("nextProps,nextState=>", nextProps, nextState);
    if (nextState.msg === this.state.msg) {
      //根据条件，决定是否阻止重新渲染组件
      console.log("结果=>", "不渲染");

      return false;
    }

    return true;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  // 卸载
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  /**
   * 渲染函数，在组件state没有变动的情况下，每次调用时都返回相同的结果，而且只能是纯函数，不能在这个阶段修改state
   */
  render() {
    console.log("render");
    return (
      <div>
        <h1>LifeCycle</h1>
        <p>{this.state.msg}</p>
      </div>
    );
  }
}
export default LifeCycle;

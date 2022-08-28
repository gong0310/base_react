import React, { Component, Fragment } from "react";
/**
 * React组件逻辑复用：
 * 1.render Props模式
 * 2.高阶组件HOC
 * 3.自定义HOOkS
 * 
 * 通信方式：
 * 1、props (父子组件)
 *  children props
 *  render props
 * 
 * 2、消息订阅-发布 (兄弟组件)
 *  pubs-sub、eventbus
 * 
 * 3、集中式管理 (祖孙组件)
 *  redux
 * 
 * 4、生产者消费者模式 (祖孙组件)
 *  context
 */

class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          name: "小明",
        },
        {
          name: "小红",
        },
      ],
      isLoad: false,
      userInfo: {
        name: "",
      },
      count: 0,
    };
  }
  changeIsLoad() {
    this.setState({
      isLoad: !this.state.isLoad,
    });
  }
  changeInput(e) {
    //  复选框不一样,不是value,是checked
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name; //获取name
    const { userInfo } = this.state;
    userInfo[name] = value;
    this.setState({
      userInfo,
    });
  }
  getInputValue() {
    console.log(this.state.userInfo);
  }
  addCount() {
    /**
     *  this.setState是异步的，第二个【可选回调】是render后再调用，可以获取最新值，或在componentDidUpdate获取
     *  类似vue 的更新机制，涉及事件循环机制
     */
    // 对象方式，通过this.state获取原来的状态值
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("render后调用的回调=>", this.state.count); //2
      }
    );
    console.log(this.state.count); // 0 还是原来的count
    // 函数方式，无需获取原来的状态值。
    this.setState((state,props) => {
      return {
        count: state.count + 1,
      };
    },()=>{});
    console.log(this.state.count); // 0 还是原来的count
  }

  render() {
    return (
      <Fragment>
        <h1>Base</h1>
        {/* setState */}
        <h2>setState</h2>
        <p>{this.state.count}</p>
        <button onClick={() => this.addCount()}>addCount</button>
        {/* 列表渲染 */}
        <h2>for</h2>
        {this.state.list.map((item) => {
          return <div key={item.name}>{item.name}</div>;
        })}
        {/* 条件渲染 */}
        <h2>if</h2>
        {this.state.isLoad ? <div>加载中...</div> : <div>加载完成</div>}
        <button
          onClick={() => {
            this.changeIsLoad();
          }}
        >
          改变isLoad
        </button>
        {/* 受控组件：其值受到react控制的表单元素，类似vue的双向绑定，不需要ref操作dom获取value
            非受控组件:现用现取 */}
        <h2> 受控组件</h2>
        <input
          type="text"
          value={this.state.userInfo.name}
          name="name"
          onChange={(e) => {
            this.changeInput(e);
          }}
        />
        {this.state.userInfo.name}
        <button
          onClick={() => {
            this.getInputValue();
          }}
        >
          获取input数据
        </button>
      </Fragment>
    );
  }
}
export default Base;

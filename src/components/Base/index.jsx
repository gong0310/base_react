import React, { Component, Fragment } from "react";

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

  render() {
    return (
      <Fragment>
        <h1>Base</h1>
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

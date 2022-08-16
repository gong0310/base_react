import React, { Component, createRef, Fragment } from "react";

class RefBase extends Component {
  constructor(props) {
    super(props);
    this.txtref = createRef();
    this.state = {};
  }
  getRef() {
    // 推荐---createRef方法
    console.log("this.txtref", this.txtref.current); // .value
  }
  getRef2() {
    // 不推荐,过时，官方说效率不高，未来可能移除---字符串格式
    console.log("this.txtref2", this.refs.txtref2);
  }
  getRef3() {
    // 函数格式
    console.log("this.txtref3", this.txtref3);
  }
  render() {
    console.log("render 阶段 DOM 还没有生成", this.txtref3);
    return (
      <Fragment>
        <h1>RefBase</h1>
        {/* 方式一 */}
        <div>
          <input type="text" ref={this.txtref} />
          <button
            onClick={() => {
              this.getRef();
            }}
          >
            获取txtref方法1
          </button>
        </div>
        {/* 方式二 */}
        <div>
          <input type="text" ref="txtref2" />
          <button
            onClick={() => {
              this.getRef2();
            }}
          >
            获取txtref方法2
          </button>
        </div>
        {/* 方式三 */}
        <div>
          <input
            type="text"
            ref={(d) => {
              this.txtref3 = d;
            }}
          />
          <button
            onClick={() => {
              this.getRef3();
            }}
          >
            获取txtref方法3
          </button>
        </div>
      </Fragment>
    );
  }
}
export default RefBase;

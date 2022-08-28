import React, {
  Fragment,
  useState,
  useRef,
  createRef,
  createContext,
  useContext,
  useEffect,
  useCallback,
  useLayoutEffect,
  useMemo,
  useReducer,
} from "react";
import Usereducers from './usereducer'
/**
 * useCallback 记忆函数，类似useState，不会因为render重新定义方法(内部会缓存)，第一个参数是回调函数，第二个是不需要记忆的数据，跟useEffect类似
 * 
 * useMemo 记忆组件 类似vue计算属性，第一个参数是返回一个回调函数，第二个是不需要记忆的数据，跟useEffect类似
 * 
 * useState 适合定义一些单一的状态，useReducer 适合逻辑比较复杂的 state结构更清晰。
 * useReducer 用法跟redux一样
 * 
 * 自定义hooks，将公共逻辑抽离出来进行复用,vue3差不多
 */
// React hooks 错误使用方式，以及如何解决它们。

// 不要更改 Hook 调用顺序
// 不要使用过时状态
// 不要创建过时的闭包
// 不要将状态用于基础结构数据
// 不要忘记清理副作用
const CountContext = createContext();

function Parent() {
  console.log("render");
  // console.log(this)// 理论上是winow,但是babel编译开启了严格模式，所有undefined

  const [count, setCount] = useState(0); // 也可以使用useRef存入变量。都是闭包的原理
  const countRef = useRef();
  const countRef2 = createRef();
  /**
   * 功能与React.createRef()一样，区别：
   * 1、useRef是use hooks的一种，一般用于function组件，而createRef一般用于class组件；
   * 2、useRef创建的ref对象在组件的整个生命周期内都不会改变，但是由createRef创建的ref对象，弊端(组件每次更新，ref对象就会被重新创建)。
   */
  //------------------------------------------
  /**
   * React中的副作用操作useEffect:
   * effect 在每次渲染的时候都会执行一次。在执行当前 effect 之前,重新渲染后对上一个 effect 进行清除
   *
   * 发ajax请求数据获取
   *    不可以直接在 useEffect 的回调函数外层直接包裹await，因为异步会导致清理函数无法立即返回
   *
   * 设置订阅 / 启动定时器
   * 手动更改真实DOM
   */
  /**
   * useLayoutEffect和原来componentDidMount&componentDidUpdate一致，在react完成DOM更新后(未渲染)马上同步调用的代码(可以做dom操作)，会阻塞页面渲染，
   * 
   * 而useEffect是会在整个页面渲染完才会调用的代码。
   */
  useEffect(() => {
    console.log("componentDidMount/componentDidUpdate");
    // 正确请求方法
    // async function initData() {
    // 	const res = await getData('url');
    // 	console.log(res);
    // }
    // initData()
    let timer = setInterval(() => {
      console.log("111===");
    }, 1000);

    return () => {
      clearInterval(timer);
      timer = null;
      console.log("componentWillUnmount卸载组件");
    };
  }, [count]);
  /**
   * 第二个参数:
   * 不传---谁都监测
   * []---谁也不监测，相当于componentDidMount
   * [count]---监测count，相当于componentDidUpdate,vue的watch
   */
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  });
  //------------------------------------------

  const addCount = () => {
    setCount(count + 1);
    console.log(count, countRef.current, countRef2.current);
  };

  return (
    <Fragment>
      <h2 ref={countRef2}>HOOkS</h2>
      {count}
      <button onClick={addCount} ref={countRef}>
        addCount
      </button>
      <CountContext.Provider value={count}>
        <Child />
      </CountContext.Provider>
      <Usereducers/>
    </Fragment>
  );
}
export default Parent;
const Counter = () => {
    /**
     * useContext比Consumer方便，降低代码复杂度
     */
  const count = useContext(CountContext);
  return <p>useContext祖孙收到数据：{count}，比Consumer方便，降低代码复杂度</p>;
};
const Child = () => {
  return (
    <Fragment>
      <h2>子</h2>
      <Sun />
    </Fragment>
  );
};
const Sun = (props) => {
  return (
    <Fragment>
      <h2>孙子</h2>
      <CountContext.Consumer>
        {(data) => <p> Consumer孙子收到数据：{data}</p>}
      </CountContext.Consumer>
      <Counter />
    </Fragment>
  );
};

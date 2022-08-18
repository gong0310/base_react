export const createDecrementAction = (data) => {
  return { type: "decrement", data };
};
export const createIncremenAction = (data) => ({ type: "increment", data })
export const createIncremenAsyncAction = (data, time) => {
  // 异步action，值是一个函数。同步值是对象
  // 异步action中一般都会调用同步action
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncremenAction(data));
    }, time);
  };
};

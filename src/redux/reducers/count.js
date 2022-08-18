const initState = 0;

// reducer函数必须是一个纯函数

export default function countReducer(preState = initState, action) {
  // 因为初始化的时候preState为undefined，设置initState为默认值

  const { type, data } = action;
  console.log(type, data)
  // 根据type决定如何加工数据，只处理数据，不管逻辑
  switch (type) {
    case "increment":
      return preState + data;
    case "decrement":
      return preState - data;
    default:
      return preState;
  }
}

const initState = [
  {
    id: 0,
    name: "小明",
  },
];
/**
 *纯函数和高阶函数
  纯函数
	1.一类特别的函数: 只要是同样的输入(实参)，必定得到同样的输出(返回)
	2.必须遵守以下一些约束 ,不能做不靠谱的事 
		1)不得改写参数数据
		2)不会产生任何副作用，例如网络请求，输入和输出设备
		3)不能调用Date.now()或者Math.random()等不纯的方法，因为每次返回都不一样  
	3.redux的reducer函数必须是一个纯函数

  高阶函数
	1.理解: 一类特别的函数
	1)情况1: 参数是函数
	2)情况2: 返回是函数
  常见的高阶函数: 
	1)定时器设置函数
	2)数组的forEach()/map()/filter()/reduce()/find()/bind()
	3)promise
	4)react-redux中的connect函数
  作用: 能实现更加动态, 更加可扩展的功能

 */
export default function personReducer(preState = initState, action) {
  const { type, data } = action;

  switch (type) {
    case "add":
        // 返回一定是返回一个新对象，不能push，因为preState.push返回的还是原来的preState，地址值没有改变
        // 而且改变了原数据，reducer就不是纯函数了，redux不能识别状态改变，从而不能更新页面
      return [...preState, data];
    default:
      return preState;
  }
}

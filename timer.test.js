import timer from './timer';
jest.useFakeTimers();
// test('timer 测试',()=>{
//   const fn = jest.fn();
//   timer(fn);
//   jest.runAllTimers();
//   //toHaveBeenCalledTimes参数代表几个被执行 
//   expect(fn).toHaveBeenCalledTimes(1)
// })

// 处理检查 异步函数问题 useFakeTimers/runAllTimers 是一对


test('timer 测试',()=>{
  const fn = jest.fn();
  console.log(fn)
  // timer(fn);
  // // 快进秒数 这个时间要大于异步函数执行的时间
  // jest.advanceTimersByTime(400000)
  // expect(fn).toHaveBeenCalledTimes(1)
})

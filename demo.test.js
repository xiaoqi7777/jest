
// 他会自动找__mocks__目录下的文件 fetchData回去找mock的 不会找真正发送请求的接口  编写一个文件 替换我们真是的代码 主要处理异步
// jest.mock('./demo')
// 取消对demo文件的模拟
// jest.unmock('./demo')
//  或者修改 配置文件 automock:true  是一样的效果

import { runCallback,createObject,getData } from './demo'
import axios from 'axios';
// 开启mock之后 所有的 在mock中引入
// import { fetchData } from './demo';
// jest.requireActual 意思是引入当前的demo 文件 并模拟的
// const {fetchData} = jest.requireActual('./demo')

// 1、捕获函数的调用和返回结果 以及this和调用顺序
// 2、它可以让我们自由的设置返回结果
// 3、改变函数的内部实现

// 拦截axios真正的请求
// jest.mock('axios');
// test('mock',()=>{
//   return fetchData().then(data => {
//       expect(data).toEqual("123");
//     })
// })
// test.only('测试 runCall',()=>{
//   // mock 函数 捕获函数的调用
//   const func = jest.fn(()=>{
//     return '456'
//   });
//   // 上下一样
//   // func.mockImplementation(()=>{
//   //   return '456'
//   // })
//   // 设置第一次的函数 
//   // func.mockImplementationOnce(()=>{
//   //   return '456'
//   // })
//   // mockImplementationOnce 比 mockReturnValue 强大一些 可以写些逻辑
//   // 设置返回值
//   // func.mockReturnValue(this)
//   // 模拟一次 也可以链式调用
//   // 1、他可以让我们自由的设置结果
//   // func.mockReturnValueOnce('del1').mockReturnValueOnce('del2')

//   // runCallback(func)
//   runCallback(func)
//   expect(func).toBeCalled()
//   // 调用的次数
//   console.log(func.mock)
//   /*
//     2、mock 函数(jest.fn)
//     calls 被执行 返回的参数和个数
//     results 是jest.fn 里面的执行结果
//     instances 在写类的时候 才有用 函数无效, 指的是当前this
//   */
//   // expect(func.mock.calls.length).toBe(1) // toBe 叫断言
//   // 调用第一次的时候 结果是['123']
//   // expect(func.mock.calls[0]).toEqual(['123'])
//   // 每次调用 都是这个结果
//   // expect(func).toBeCalledWith('abc')
//   // undefined 匹配
//   // expect(func.mock.results[0].value).toBeUndefined()


// })

test('测试 createObject',()=>{
  const func = jest.fn();
  createObject(func)
  console.log(func.mock)
})

// test('测试 getData',async ()=>{
//   // 拦截axios真正的请求
//   // mockResolvedValueOnce 设置一次 
//   // mockResolvedValue 设置所有 

//   axios.get.mockResolvedValueOnce({data:'hello'})
//   axios.get.mockResolvedValueOnce({data:'hello1'})
//   await getData().then(data=>{
//     expect(data).toBe('hello')
//   })
//   await getData().then(data=>{
//     expect(data).toBe('hello1')
//   })
// })
 
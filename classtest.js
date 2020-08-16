// 默认提高 可以自定义类 在__mocks__ 下创建一个util
jest.mock('./util');
// 或者
/*
  jest.mock('./util',()=>{
    const Util = jest.fn(()=>{
      console.log('a,b')
    })
    Util.prototype.a = jest.fn(()=>{
      console.log('a,b')
    })
    Util.prototype.b = jest.fn(()=>{
      console.log('a,b')
    })
    return Util
  });
 */

// jest.mock 发现util 是一个类,会自动把类的构造函数和方法变成jest.fn()
// 最后测试的时候 直接判断 a b 方法是否被调用
/*const  Util = jest.fn()
  Util.a = jest.fn()
  Util.b = jest.fn()
*/
import domeFunction from './class'
import Util from './util';
// 单元测试 就一个文件
// 为啥要用mock 他能让我们引入的外部模块变的简单
test('测试 domeFunction',()=>{
  domeFunction();
  // class 被执行
  expect(Util).toHaveBeenCalled()
  // 内中的方法被执行
  expect(Util.mock.instances[0].a).toHaveBeenCalled()
  expect(Util.mock.instances[0].b).toHaveBeenCalled()
})
// 集成测试 就是测试单元以及单元包括的内容
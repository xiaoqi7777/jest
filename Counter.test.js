
import Counter from './Counter'
let counter = null
// describe 分组
// 所有的describe console 会最新执行 准备行的代码 一定要写在生命周期内 
test('测试',()=>{
  expect(1+2).toBe(3);
  expect(1+2).toEqual(3);
})

// describe('counter',()=>{
//   beforeAll(()=>{
//     console.log('BeforeAll')
//   })
//   beforeEach(()=>{
//     console.log('beforeEach')
//     counter = new Counter()
//   })
//   afterEach(()=>{
//     console.log('afterEach')
//     counter = new Counter()
//   })
//   afterAll(()=>{
//     console.log('afterAll')
//     counter = new Counter()
//   })
//   describe('add',()=>{
//     beforeAll(()=>{
//       console.log('BeforeAll 123')
//     })
//     beforeEach(()=>{
//       console.log('beforeEach 123')
//     })
//     console.log('内部 des')
//     test('测试 Counter 中的 addOne 方法',()=>{
//       console.log('addOne')
//       counter.addOne()
//       expect(counter.number).toBe(1)
//     })
//     test('测试 Counter 中的 addOne 方法',()=>{
//       console.log('addTwo')
//       counter.addTwo()
//       expect(counter.number).toBe(2)
//     })
//   })
//   describe('del',()=>{
//     test('测试 Counter 中的 minusOne 方法',()=>{
//       console.log('minusOne')
//       counter.minusOne()
//       expect(counter.number).toBe(-1)
//     })
//     test('测试 Counter 中的 minusOne 方法',()=>{
//       console.log('minusTwo')
//       counter.minusTwo()
//       expect(counter.number).toBe(-2)
//     })
//   })
// })


// test('测试10与10相同匹配 ====',()=>{
//   // toBe 匹配器 matchers
//   expect(10).toBe(10);
// })


// test('测试对象内容相等',()=>{
//   // toEqual 匹配器 matchers
//   const a = {one:1};
//   expect(a).toEqual({one:1});

// })

// 真假有关的匹配器
// test('测试toBeNull',()=>{
//   // toBeNull 匹配器 matchers 只匹配null
//   const a = null;
//   expect(a).toBeNull();
// })

// test('toBeDefined 被定义过的',()=>{
//   const a = null;
//   expect(a).toBeDefined();
// })

// test('toBeTruthy 匹配器',()=>{
//   const a = 1;
//   expect(a).toBeTruthy();
// })

// test('toBeFalsy 匹配器',()=>{
//   const a = 0;
//   expect(a).toBeFalsy();
// })

// test('not 匹配器 非',()=>{
//   const a = 1;
//   expect(a).not.toBeFalsy();
// })

// 数字相关的匹配器 大小
// test('toBeGreaterThan ',()=>{
//   const a = 12;
//   expect(a).toBeGreaterThan(11)
// })

// test('toBeLessThan ',()=>{
//   const a = 10;
//   expect(a).toBeLessThan(11)
// })
// // 大于等于
// test('toBeGreaterThanOrEqual',()=>{
//   const a = 11;
//   expect(a).toBeGreaterThanOrEqual(11)
// })

// // 0.1+0.3 toBeCloseTo处理   toEqual不能处理
// test('toBeCloseTo',()=>{
//   const a1 = 0.1;
//   const a2 = 0.2;
//   expect(a1+a2).toBeCloseTo(0.3)
// })

// 字符串 匹配里面放正则
// test('toMatch',()=>{
//   const str = 'http://www.dell-le.com';
//   expect(str).toMatch(/www/)
// })

// // Array Set
// test('toContain',()=>{
//   const arr = ['dell','lee','imooc'];
//   const data = new Set(arr)
//   expect(arr).toContain('dell')
//   expect(data).toContain('dell')
// })

// // 异常
// const fn = ()=>{
//   throw new Error('this is a new error')
// }


// test('toThrow',()=>{
//   //toThrow 里面可以写字符串也可以写正则 或者不写 与报错信息匹配
//   expect(fn).toThrow('this is a new error')
// })
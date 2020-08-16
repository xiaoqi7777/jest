import { generateConfig } from "./snapshot";

// test('snapshot config',()=>{
//   expect(generateConfig()).toMatchSnapshot({
//     time:expect.any(Date)
//   })
// })
test("snapshot config", () => {
  expect(generateConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "domain": "localhost",
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});
// toMatchSnapshot 监控配置项
// 第一次的配置项保存起来 下次修改的时候  会提示报错
// u 操作能清除报错
// i 当多个快照存在的时候 i是分部处理

// 如果一直变动的情况  比如Date
/*
  可以写成
  toMatchSnapshot({
    // Date 这里写的是类型
    time:expect.any(Date)
  })
*/

// 安装 prettier
// toMatchInlineSnapshot 他是把快照放到当前函数内 
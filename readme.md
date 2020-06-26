- jest@24.8.0

- 特点 默认测试,多个模块测试

- 初始化配置 npx jest --init(npx 是调用node_modules下的jest)
- coverageDirectory:coverage(文件夹的名字), npx jest coverage(测试覆盖率,我们编写的测试代码对原来的)
- 命令行 npx jest coverage == 脚本配置  jest coverage

- 安装babel @babel/core@7.4.5 @babel/preset-env@7.4.5
- 创建.babelrc文件
- jest 内部有一个(babel-jest)插件 他会去找babelrc的配置
```js
{
  "presets":[
    ["@babel/preset-env",{
      "targets":{
        "node":"current"
      }
    }]
  ]
}
```
- jest 命令行
- f模式 过滤没有通过的测试 再次按f即退出这个模式
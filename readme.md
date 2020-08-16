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
-  package.json => jest --watch 配置后 没有o模式 自带，
-  package.json => jest --watchAll 配置后 有o模式 有a模式，
- jest 命令行
- w切换模式
- f模式 过滤没有通过的测试 再次按f即退出这个模式
- 0模式 只测试修改过的文件 但是需要git commit 配合
- a模式 跑一遍所有的测试
- p模式 通过filename 进行过滤
- t模式 通过test用例的名字 进行过滤
- q模式 就是退出
- Enter模式 重新跑

- 技巧
- vscode jest  不用跑脚本了
- prettier@1.18.2 快照
# VsCode Plugin 学习

[参考地址][1]

## 搭建

```
  npm i -g generator-code yo
```

- 创建`New Extension`，名字为'demo'
- 生成 demo 目录，打开 demo 目录，F5 调试

### package.json

```
name: //插件名字
publisher: //发布时候的一个名称
activationEvents: [          //触发插件执行一些代码的配置
  "onCommand:extension.sayHello" //这种是通过输入命令来触发执行的
]
main: "./out/src/extension",  //这个是配置TypeScript编译成js的输出目录
contributes: {
  "commands": [{             //title 和 command是一个对应关系的
      "command": "extension.sayHello", //这个是对应上面那个命令触发的，在代码里面也要用到
      "title": "Hello World"   //这个是我们在vscode里面输入的命令
  }]
}
```

### extension.js

查看该文件的注释

> 代码主要在这两个文件中

## 编写 sayHello 命令（steps）

- 在 package.json 配置
- 在 extension.js 中配置
- F5 运行，在新的窗口中 Ctrl+Shift+P
- 输入 contributes.commands[?].title；例如"Hello World"
- 结果：右下角展示 message box

> Ctrl+Shift+I：可以打开 vscode 的控制台

## 打包发布

```
  npm i -g vsce
  vsce publish
```

//TODO:未完待续

[1]: https://www.cnblogs.com/liuxianan/p/vscode-plugin-overview.html

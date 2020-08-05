# VsCode Plugin 学习

[博客参考地址][1]
[官方参考地址][2]

## 搭建

```
  npm i -g generator-code yo
```

- 创建`New Extension`，名字为'demo'
- 生成 demo 目录，打开 demo 目录，F5 调试

### package.json

```
{
  "name": "demo",//插件名字
  publisher: "", //发布者，如果要发布到应用市场的话，这个名字必须与发布者一致
  "displayName": "yxd-vscode-plugin-demo",
  "description": "demo", // 关键字，用于应用市场搜索
  "version": "0.0.1",
  "engines": {
    "vscode": "^1.47.0"
  },
  "icon": "image/logo.png",
  "keywords": ["vscode", "plugin", "demo"], // 关键字，用于应用市场搜索
  "categories": [
    "Other"
  ],
  "contributes": { // 整个插件最重要最多的配置项
    "configuration": { // 插件配置项
      "type": "object",
      "title": "vscode-plugin-demo", // 配置项标题，会显示在vscode的设置页
      "properties": {
        "vscodePluginDemo.yourName": { // 这里我随便写了2个设置，配置你的昵称
          "type": "string",
          "default": "guest",
          "description": "你的名字"
        },
        "vscodePluginDemo.showTip": { // 是否在启动时显示提示
          "type": "boolean",
          "default": true,
          "description": "是否在每次启动时显示欢迎提示！"
        }
      }
    },
    "commands": [ //title 和 command是一个对应关系的
      {
        "command": "demo.helloWorld",    //这个是对应上面那个命令触发的，在代码里面也要用到
        "title": "YXD:hello"     //这个是我们在vscode里面输入的命令
      },
      {
        "command": "demo.sayHello",
        "title": "YXD:say"
      }
    ],
    "keybindings": [ // 快捷键绑定
      {
        "command": "extension.sayHello",
        "key": "ctrl+f10",
        "mac": "cmd+f10",
        "when": "editorTextFocus"
      }
    ],
    "menus": { // 菜单
      "editor/context": [ // 编辑器右键菜单
        {
          "when": "editorFocus", // 表示只有编辑器具有焦点时才会在菜单中出现
          "command": "extension.sayHello",
          "group": "navigation@6"  // navigation是一个永远置顶的分组，后面的@6是人工进行组内排序
        },
        {
          "when": "editorFocus",
          "command": "extension.demo.getCurrentFilePath",
          "group": "navigation@5"
        },
        {
          "when": "editorFocus && resourceLangId == javascript", // 只有编辑器具有焦点，并且打开的是JS文件才会出现
          "command": "extension.demo.testMenuShow",
          "group": "z_commands"
        },
        {
          "command": "extension.demo.openWebview",
          "group": "navigation"
        }
      ],
      "editor/title": [ // 编辑器右上角图标，不配置图片就显示文字
        {
          "when": "editorFocus && resourceLangId == javascript",
          "command": "extension.demo.testMenuShow",
          "group": "navigation"
        }
      ],
      "editor/title/context": [ // tab页标题右键菜单
        {
          "when": "resourceLangId == javascript",
          "command": "extension.demo.testMenuShow",
          "group": "navigation"
        }
      ],
      "explorer/context": [ // 资源管理器右键菜单
        {
          "command": "extension.demo.getCurrentFilePath",
          "group": "navigation"
        },
        {
          "command": "extension.demo.openWebview",
          "group": "navigation"
        }
      ]
    },
    "snippets": [ // 代码片段
      {
        "language": "javascript",
        "path": "./snippets/javascript.json"
      },
      {
        "language": "html",
        "path": "./snippets/html.json"
      }
    ],
    "viewsContainers": { // 自定义新的activitybar图标，也就是左侧侧边栏大的图标
      "activitybar": [
        {
          "id": "beautifulGirl",
          "title": "美女",
          "icon": "images/beautifulGirl.svg"
        }
      ]
    },
    "views": { // 自定义侧边栏内view的实现
      "beautifulGirl": [ // 和 viewsContainers 的id对应
        {
          "id": "beautifulGirl1",
          "name": "美女"
        }
      ]
    },
    "iconThemes": [ // 图标主题
      {
        "id": "testIconTheme",
        "label": "测试图标主题",
        "path": "./theme/icon-theme.json"
      }
    ]
  },
  "activationEvents": [ // 扩展的激活事件数组；默认插件不激活，通过以下事件激活插件执行
    "onCommand:demo.helloWorld", //这种是通过输入命令来触发执行的
    "onCommand:demo.sayHello",
    onLanguage:javascript, // 打开js文件激活
    onDebug
    workspaceContains:${toplevelfilename}
    onFileSystem:${scheme}
    onView:${viewId}
    onUri
    *  //一启动就激活
  ],
  "main": "./extension.js", // 主入口
  "scripts": {
    "lint": "eslint .",
    "pretest": "npm run lint",
    "test": "node ./test/runTest.js"
  },
  "devDependencies": {
    "@types/vscode": "^1.47.0",
    "@types/glob": "^7.1.1",
    "@types/mocha": "^7.0.2",
    "@types/node": "^13.11.0",
    "eslint": "^6.8.0",
    "glob": "^7.1.6",
    "mocha": "^7.1.2",
    "typescript": "^3.8.3",
    "vscode-test": "^1.3.0"
  }
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
[2]: https://code.visualstudio.com/api

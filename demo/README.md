# demo README

## when
[when](https://code.visualstudio.com/docs/getstarted/keybindings#_when-clause-contexts)

## group
### 组间排序
>控制菜单的分组和排序。不同的菜单拥有不同的默认分组。

**editor/context中有这些默认组：**

- navigation- 放在这个组的永远排在最前面；
- 1_modification - 更改组；
- 9_cutcopypaste - 编辑组
- z_commands - 最后一个默认组，其中包含用于打开命令选项板的条目。

除了navigation是强制放在最前面之外，其它分组都是按照0-9、a-z的顺序排列的，所以如果你想在1_modification和9_cutcopypaste插入一个新的组别的话，你可以定义一个诸如6_test：

**explorer/context有这些默认组：**

navigation - 放在这个组的永远排在最前面；
2_workspace - 与工作空间操作相关的命令。
3_compare - 与差异编辑器中的文件比较相关的命令。
4_search - 与在搜索视图中搜索相关的命令。
5_cutcopypaste - 与剪切，复制和粘贴文件相关的命令。
7_modification - 与修改文件相关的命令。

**在编辑器选项卡上下文菜单有这些默认组：**

1_close - 与关闭编辑器相关的命令。
3_preview - 与固定编辑器相关的命令。

**在editor/title有这些默认组：**

1_diff - 与使用差异编辑器相关的命令。
3_open - 与打开编辑器相关的命令。
5_close - 与关闭编辑器相关的命令。
### 组内排序
```
"editor/context": [
    {
        "when": "editorFocus",
        "command": "extension.sayHello",
		// 强制放在navigation组的第2个
        "group": "navigation@2"
    },
    {
        "when": "editorFocus",
        "command": "extension.demo.getCurrentFilePath",
		// 强制放在navigation组的第1个
        "group": "navigation@1"
    }
]
```
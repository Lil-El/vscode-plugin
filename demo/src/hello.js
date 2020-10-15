const vscode = require("vscode");

// 这里开始注册命令
// commandID字段和package.json对应
let disposable = vscode.commands.registerCommand(
  "demo.helloWorld",
  function () {
    // 每次执行命令都执行此处代码
    // 展示message box
    vscode.window.showInformationMessage(
      "Hello World from yxd-vscode-plugin-demo!"
    );
  }
);
let sayHello = vscode.commands.registerCommand("demo.sayHello", function () {
  // 每次执行命令都执行此处代码
  // 展示message box
  vscode.window.showInformationMessage("Hello");
});

module.exports = function (context) {
  // 所有的  registerCommand 的结果 都要放在 context.subscriptions.里面
  context.subscriptions.push(disposable);
  context.subscriptions.push(sayHello);
};

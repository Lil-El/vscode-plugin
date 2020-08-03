const vscode = require("vscode");

// 激活时调用
function activate(context) {
  // 在激活时，只执行一次
  console.log('Congratulations, your extension "demo" is now active!');

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
  context.subscriptions.push(disposable);
  context.subscriptions.push(sayHello);
}
exports.activate = activate;

// 在插件失活时调用
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};

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
  let explorer = vscode.commands.registerCommand("demo.getFilePath", function (
    uri
  ) {
    console.log(arguments);
    vscode.window.showInformationMessage(`该文件的路径：${uri.path}`);
  });
  /**
   * 仅在编辑器被激活时才能使用有textEditor, edit这两个参数
   * 配置在editor/context
   */
  let open = vscode.commands.registerTextEditorCommand("demo.open", function (
    textEditor,
    edit,
    uri
  ) {
    vscode.window.showInformationMessage(`1`);
    let uriPath = vscode.Uri.file("D://Work");
    // https://code.visualstudio.com/api/references/commands
    vscode.commands
      .executeCommand("vscode.openFolder", uriPath)
      .then(function () {
        vscode.window.showInformationMessage(`success`);
      });
  });
  // 所有的  registerCommand 的结果 都要放在 context.subscriptions.里面
  context.subscriptions.push(disposable);
  context.subscriptions.push(sayHello);
  context.subscriptions.push(explorer);
  context.subscriptions.push(open);
}
exports.activate = activate;

// 在插件失活时调用
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};

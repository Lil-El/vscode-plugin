const vscode = require("vscode");
const jumpToDefinition = require("./src/jump-to-definition");
const open = require("./src/open");
const hello = require("./src/hello");
const complete = require("./src/complete");
const hover = require("./src/hover");
/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */

function activate(context) {
  // 在激活时，只执行一次
  console.log('Congratulations, your extension "demo" is now active!');
  jumpToDefinition(context);
  open(context);
  hello(context);
  complete(context);
  hover(context);
  require("./src/webview")(context);

  let explorer = vscode.commands.registerCommand("demo.getFilePath", function (
    uri
  ) {
    console.log(arguments);
    vscode.window.showInformationMessage(`该文件的路径：${uri.path}`);
  });

  context.subscriptions.push(explorer);
}
exports.activate = activate;

// 在插件失活时调用
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};

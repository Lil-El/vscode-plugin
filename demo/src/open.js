const vscode = require("vscode");

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
module.exports = function (context) {
  // 所有的  registerCommand 的结果 都要放在 context.subscriptions.里面
  context.subscriptions.push(open);
};

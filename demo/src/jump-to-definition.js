const vscode = require("vscode");
const fs = require("fs");
const path = require("path");

function provideDefinition(document, position, token) {
  const fileName = document.fileName;
  const text = document.getText();
  const line = document.lineAt(position);
  // 通过path、fs寻找文件，再使用正则匹配具体位置；
  // 文件跳转
  return new vscode.Location(
    vscode.Uri.file("d://Work/VsCode-Plugin-Learning/demo/extension.js"),
    new vscode.Position(0, 0)
  );
}

module.exports = function (context) {
  context.subscriptions.push(
    vscode.languages.registerDefinitionProvider(["json"], { provideDefinition })
  );
};

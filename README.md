# Visual Studio Code 推荐配置

## 全局配置(global)

1. settings.json：文件/首选项/设置
1. 确认 `typescript.tsdk` 的路径
1. 确认 `terminal.integrated.shell.windows` 的路径
1. 安装必装插件（见global/必装插件.png）
1. keybindings.json：文件/首选项/键盘快捷方式/编辑keybindings.json

## 工作区配置

1. 将backend/frontend下的内容复制到backend和frontend各自的.vscode目录下。

## 该配置的特性
防止搞错环境，时刻留意底部状态栏。
绿色的是前端，蓝色的是后端。
联想一下，webpack-dev-server会出现一片绿，所以绿色的就是前端了。

### backend

1. `Alt+Shift+F10` 运行任务
1. `Alt+F10` 停止运行中的任务
1. `watch`：运行 `tsc --watch`，并将错误显示到问题面板

### frontend

1. 同backend，多了一个 `dev` 任务
1. `dev`：运行 `webpack-dev-server`，并将错误显示到问题面板

### tsconfig配置要点

```
{
  "compilerOptions": {
    "typeRoots": [
      "typings",
      "node_modules/@types"
    ]
  },
  "exclude": [
    "node_modules",
    "dist",
    "scripts",
    "libs/**/typings",
    "shared/**/typings"
  ]
}
```
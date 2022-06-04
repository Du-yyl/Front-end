## 类型支持 TS 中的 .vue 导入

由于 TypeScript 无法处理 `.vue` 导入的类型信息，因此默认情况下它们被填充为通用 Vue 组件类型。在大多数情况下，如果您并不真正关心模板之外的组件道具类型，这很好。但是，如果您希望在 `.vue`
导入中获取实际的道具类型（例如，在使用手动 `h(...)` 调用时获取道具验证），您可以按照以下步骤启用 Volar 的接管模式：

1. 从 VS Code 的命令面板运行 `Extensions: Show Built-in Extensions`，查找 `TypeScript and JavaScript Language Features`
   ，然后右键单击并选择`Disable (Workspace)`。默认情况下，如果默认 TypeScript 扩展被禁用，接管模式将自行启用。
2. 通过从命令面板运行`Developer: Reload Window` 重新加载 VS Code 窗口。

您可以在 [此处](https://github.com/johnsoncodehk/volar/discussions/471) 了解有关接管模式的更多信息。

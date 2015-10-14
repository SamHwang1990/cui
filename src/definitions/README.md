# src/definitions
CUI 核心代码。

## 目录结构
    |- globals              # 全局解决方案，包括样式重设等
    |- elements             # 基础样式文件，无需脚本控制行为
    |- collections          # 较elements 嵌套层级高
    |- views                # 组合的组件视图，比如联系人卡片
    |- utils                # 工具类
    |- widgets              # 组件，通常包含样式、模板和脚本
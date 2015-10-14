# src
CUI 源码目录

## 主题化

### 思路

#### 继承

CUI 中有三种级别的继承关系：

* default theme － CUI 默认的主题
* custom theme － 自定义的主题，比如webmail xt5
* site theme － 当前网站特有的主题样式

#### 目录结构
    |- definitions              # 定义CUI 每个组件的css 和javascript
    |- themes                   # 包含CUI 默认主题以及自定义主题
    |- site                     # 当前网站的主题样式

## CUI 架构参考：
[SemanticUI](http://semantic-ui.com/)
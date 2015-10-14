# CUI 设计说明

## 目录说明
    |- api                          # 自动化API Dest
    |- docs                         # CUI 文档
    |- examples
    |- dist
    |- src
    |- definitions
            |- globals              # 全局解决方案，包括样式重设等
            |- elements             # 基础样式文件，无需脚本控制行为
            |- collections          #
            |- views                # 组合的组件视图，比如联系人卡片
            |- utils                # 工具类
            |- widgets              # 组件，通常包含样式、模板和脚本
        |- themes
            |- default              # 默认主题
            |- xt5                  # webmail xt5 主题
        |- cui.less                 # 引入所需less
        |- themes.config            # 配置各组件的主题
        |- themes.less


## widgets 目录结构推荐为：(will be deprecated)
    |- _docs                        # 自动生成组件的API文档在这里
    |- style
        |- [plugin].less            # 样式对应的less版本
        |- [plugin].css             # 样式对应的css版本
        |- [plugin]-legacy.less     # 针对低版本浏览器写的hack
        |- [plugin]-legacy.css
    |- assets                       # 引用的资源比如图片，字体文件等
    |- script                       # 依赖的脚本实现
    |- test                         # 测试文件
    |- index.html                   # 应用实例
    |- package.json
    |- API.json                     # 对应的API接口，文档生成工具会解析这里的内容生成文档到docs

## 编码规范
参见 **codeStyle.md**


## 设计稿
参见 **docs/CM_XT_V5.0_UI_New.png**


## 两个原则

- 组件能自己重设，即不依赖全局的重设样式
- 组件能单独抽离，依赖别的组件时需要在 `package.json` 中写明


## 一个不成文规定
尽量参考现有开源项目，只有在不满足要求时进行重写


## 浏览器支持版本
- IE8+
- Chrome/Firefox/Safari 最新版
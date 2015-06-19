## 通用

- 不要混用tab和空格，优先使用tab。调整编辑器的tab，让其指代为4个空格


## HTML规范

### 整体结构

	<!-- 文件应以 <!DOCTYPE html> 开头 -->
	<!DOCTYPE <!DOCTYPE html>
	<html>
	<head>
		<!-- 指定文档编码 -->
		<meta charset="utf-8"/>
		<title>CUI</title>
		<meta name="keywords" content=""/>
		<meta name="description" content=""/>
		<!-- 对于移动端viewport不可省，且还应设置更加具体的内容 -->
		<meta name="viewport" content="width=device-width"/>

		<!-- 文档依赖的样式 -->
		<link rel="stylesheet" type="text/css" href="">
		<!-- 窗口标签的小图标 -->
		<link rel="shortcut icon" href="img/favicon.ico">
		<!-- 在苹果手机桌面生成的启动图标 -->
		<link rel="apple-touch-icon" href="img/touchicon.png">
	</head>
	<body>
	
	</body>
	</html>>


- 使用link将css文件引入，并置于head中
- 使用script将js文件引入，并且置于body底部


### 代码格式

**注释风格**
类似于标签闭合，如：

	<!-- 头部 -->
	<div>
		<!-- logo -->
		<h1><a href="#">logo</a></h1>
		<!-- /logo -->

		<!-- 导航 -->
		<ul>
			<li><a href="#">1</a></li>
			<li><a href="#">2</a></li>
		</ul>
		<!-- /导航 -->
	</div>
	<!-- /头部 -->


**采用小写**
- 标签、属性和值全部小写，每个属性都必须要有一个值，每个值必须加上双引号
- 没有值的属性必须使用自己的名称作为值（checked、disabled、readonly、selected等等）
- 可以省略style和script标签中的type属性


**语义化**
优先采用HTML5的语义化标签，比如section、article、nav等。IE8下不兼容的浏览器加上以下代码段：

	// 为 IE8 添加 html5 标签
    var a = ['header','footer','section','aside','article','nav','hgroup','figure','figcaption','time','mark','output','meter'];
    for (var i = 0, m = a.length; i < m; i++) {
        document.createElement(a[i]);
    }

或者引入html5shiv脚本。


## CSS规范

### 分类
- 重置和默认样式（reset）
- 模块（.m-）：一个大的功能体，比如整个读信页面
- 元件（.u-）：一个不可以再分的组件，比如button
- 功能（.f-）：功能类，比如清楚浮动等
- 状态（.z-）：比如z-active
- 操作（.j-）：该类不会有特定的CSS样式，只是为了提供给js操作

### 层级
后代选择器的污染比较大，所以在使用时要谨慎。在编写相关组件时，同时也为了不然样式规则嵌套太深，也推荐使用连字符（-）来连接规则。比如：

	<div class="u-contact">
		<h3 class="u-contact-head">头部</h3>
		<div class="u-contact-body">内容</div>
	</div>


## JavaScript规范

1、jQuery或Zepto变量使用$开头，比如$el

2、变量声明提前
ES5变量的作用域为整个函数，JS解释器会将所有的变量声明提前，所以建议在编写脚本时将变量主动写在前面：

	function some() {
		var one = 1,
			two = 2,
			three, four;

		// other code
	}

3、注释
	
	/**
	 * [publicMethod description]
	 */
	function publicMethod() {

	}

	
	// private method
	function _privateMethod() {

	}


## 参考
http://amazeui.org/getting-started/javascript
http://nec.netease.com/
http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml
http://google.github.io/styleguide/javascriptguide.xml

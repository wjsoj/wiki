# HTML基础

以下内容大部分来自[W3school](https://www.w3school.com.cn/)

## 1. 基本框架

```html
<!DOCTYPE HTML>
<html>
    <head>
        <style type="text/css">
            h1 {color: red}
            p {color: blue}
        </style>
        <link rel="stylesheet" type="text/css" href="/html/csstest1.css" >
        <script src="myScript.js"></script>
    </head>
    <body>
        <h1>
            Hello World
        </h1>
        <p>
            Hyper Text Makeup Language
        </p>
    </body>
</html>
```

## 2. 常用标签

### 2.1 文本类

#### 2.1.1 标题：

```html
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>
```

#### 2.1.2 段落：

```html
<p></p>
<pre></pre>
<!--pre标签保留源代码中的空格和换行-->
```

#### 2.1.3 字体格式：

=== "HTML"

    ```html
    <b>This text is bold</b>
    <strong>This text is strong</strong>
    <big>This text is big</big>
    <em>This text is emphasized</em>
    <i>This text is italic</i>
    <small>This text is small</small>
    This text contains
    <sub>subscript</sub>
    This text contains
    <sup>superscript</sup>
    <del>deleted</del>
    <ins>insert</ins>
    ```

=== "效果"

    <b>This text is bold</b>
    <br />
    <strong>This text is strong</strong>
    <br />
    <big>This text is big</big>
    <br />
    <em>This text is emphasized</em>
    <br />
    <i>This text is italic</i>
    <br />
    <small>This text is small</small>
    <br />
    This text contains
    <sub>subscript</sub>
    <br />
    This text contains
    <sup>superscript</sup>
    <br />
    <del>deleted</del>
    <br />
    <ins>insert</ins>

#### 2.1.4 特殊字体：

=== "HTML"

    ```html
    <code>Computer code</code>
    <kbd>Keyboard input</kbd>
    <tt>Teletype text</tt>
    <samp>Sample text</samp>
    <var>Computer variable</var>
    ```

=== "效果"

	<code>Computer code</code>
	<br />
	<kbd>Keyboard input</kbd>
	<br />
	<tt>Teletype text</tt>
	<br />
	<samp>Sample text</samp>
	<br />
	<var>Computer variable</var>

#### 2.1.5 特殊标签

水平分割线`<hr />`

空行`<br />`

地址`<address></address>`

缩写和首字母缩写：

```html
<abbr title="etcetera">etc.</abbr>
<acronym title="World Wide Web">WWW</acronym>
```

引用：
```html
<q>短的引用，只会加个引号</q>
<cite>著作名，默认斜体显示</cite>
<blockquote>
    长的引用块，类似markdown
</blockquote>
```

### 2.2 链接类

#### 2.2.1 超链接

````html
<a href="url">Link text</a>
<a href="http://www.w3school.com.cn/" target="_blank">Visit W3School!</a>
<!--在新窗口打开链接，注意末尾的/是规范做法-->
````

#### 2.2.2 图片

```html
<img src='url' align='middle' alt='图片加载不出时显示此文本' width='500' height='500'>
```

### 2.3 表格

=== "html"

    ```html
    <table border="1" cellpadding="10">
    <caption>我的标题</caption>
    <tr>
      <th>Heading</th>
      <th>Another Heading</th>
    </tr>
    <tr>
      <td colspan="2" align='right'>100</td>
      <td rowspan='2'>300</td>
    </tr>
    <tr>
      <td>500</td>
      <td>600</td>
    </tr>
    </table>
    ```

=== "效果"

    <table border="1" cellpadding="10">
        <caption>我的标题</caption>
        <tr>
          <th>Heading</th>
          <th>Another Heading</th>
        </tr>
        <tr>
          <td colspan="2" align='right'>100</td>
          <td rowspan='2'>300</td>
        </tr>
        <tr>
          <td>500</td>
          <td>600</td>
        </tr>
    </table>


### 2.4 列表

无序列表：

```html
<ul type='disc'>
<!--可选disc circle square-->
  <li>咖啡</li>
  <li>茶</li>
  <li>牛奶</li>
</ul>
```

有序列表：

```html
<ol start="50">
<!--可选A a I i-->
  <li>咖啡</li>
  <li>牛奶</li>
  <li>茶</li>
</ol>
```

### 2.5 iframe

iframe作为一种特殊的元素，可以实现在网页中显示网页

```html
<iframe 
	src="demo_iframe.htm" 
 	width="200" 
    height="200"
    frameborder="0"
></iframe>
```

可以通过为iframe设置name，为超链接设置target使得打开的链接在当前网页的iframe中显示：

```html
<iframe src="demo_iframe.htm" name="iframe_a"></iframe>
<p><a href="http://www.w3school.com.cn" target="iframe_a">W3School.com.cn</a></p>
```

## 3. 一些概念

### 3.1 块级元素和内联元素

`<div>`和`<span>`标签并没有特定的意义，`<div>`作为块级元素用来组合一系列html标签，`<span>`作为内联元素常用来放置文本

块级元素和内联元素主要的区别体现在块级元素在源代码中是以一个块的形式显示的，而内联元素则是在一行内显示完

### 3.2 类

通过指定class属性，结合css可以实现元素外观的自定义，下面是一个例子：

=== "HTML"

    ```html
    <!DOCTYPE html>
    <html>
    <head>
    <style>
    .cities {
        background-color:black;
        color:white;
        margin:20px;
        padding:20px;
    } 
    </style>
    </head>
    
    <body>
    
    <div class="cities">
    <h2>London</h2>
    <p>
    London is the capital city of England. 
    It is the most populous city in the United Kingdom, 
    with a metropolitan area of over 13 million inhabitants.
    </p>
    </div> 
    
    </body>
    </html>
    ```

=== "效果"

	<style>
	.cities {
	    background-color:black;
	    color:white;
	    margin:20px;
	    padding:20px;
	} 
	</style>
	
	<div class="cities">
	<h2>London</h2>
	<p>
	London is the capital city of England. 
	It is the most populous city in the United Kingdom, 
	with a metropolitan area of over 13 million inhabitants.
	</p>
	</div> 

### 3.3 id

id在HTML中是作为元素的唯一标识来使用的，JavaScript也通过id来访问和操作元素，注意id必须是唯一的，在使用时需要在前面加#号

id在实际中比较常见的一个应用是为网站添加书签，例如本网站标题后的锚点就是通过id来实现定位的，例如：
```html
<a href="#C4">跳转到第四章</a>
```

就会跳转到id为C4的元素位置

### 3.4 表单与用户输入

表单用于用户输入，包括不同种类

```html
<form action="action_page.php" method="GET" target="_blank" autocomplete="on">
 First name:<br>
<input type="text" name="firstname" placeholder="姓名">
<input type="password" name="psw">
<!--单选框 注意name一致才可单选-->
<input type="radio" name="sex" value="male" checked>Male
<input type="radio" name="sex" value="female">Female
<!--复选框-->
<input type="checkbox" name="vehicle" value="Bike">I have a bike
<input type="checkbox" name="vehicle" value="Car">I have a car 
<!--下拉选择-->
<select name="cars">
<option value="volvo">Volvo</option>
<option value="saab" selected>Saab</option>
<option value="fiat">Fiat</option>
<option value="audi">Audi</option>
</select>
<!--文本域-->
<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>
<!--文件-->
<input type="file" name="file">
<!--按钮-->
<button type="button" onclick="alert('Hello World!')">Click Me!</button>
<br>
<input type="submit" value="Submit">
<input type="reset" value="Reset">
</form> 
```

!!! note "注意"

	指定了name属性的输入才会被提交

使用`fieldset`可以创建一个好看的输入框，通过`legend`标签指定标题：

=== "HTML"

    ```html
    <form action="action_page.php">
    <fieldset>
    <legend>Personal information:</legend>
    First name:<br>
    <input type="text" name="firstname" value="Mickey">
    <br>
    Last name:<br>
    <input type="text" name="lastname" value="Mouse">
    <br><br>
    <input type="submit" value="Submit"></fieldset>
    </form> 
    ```

=== "效果"

	<form>
	<fieldset>
	<legend>Personal information:</legend>
	First name:<br>
	<input type="text" name="firstname" value="Mickey">
	<br>
	Last name:<br>
	<input type="text" name="lastname" value="Mouse">
	<br><br>
	<input type="submit" value="Submit"></fieldset>
	</form>

HTML5中新增了许多输入的种类：

颜色选择器：color

日期和时间：date、datetime、datetime-local、month、week、time

链接类：email、url、tel

数字：number、range

??? example "一些典型的例子"
	
	目前仍有浏览器不支持部分HTML5特性
	
	=== "range"
	    === "HTML"
	
	        ```html
	        <input type="range" name="points" min="0" max="10">
	        ```
	
	    === "效果"
	
	        <input type="range" name="points" min="0" max="10">
	
	=== "color"
	    === "HTML"
	
	        ```html
	        <input type="color" name="favcolor">
	        ```
	
	    === "效果"
	
	        <input type="color" name="favcolor">
	
	=== "datetime-local"
	    === "HTML"
	
	        ```html
	        <input type="datetime-local" name="bdaytime">
	        ```
	
	    === "效果"
	
	        <input type="datetime-local" name="bdaytime">

## 4. 动态交互

下面是一个在HTML中使用JavaScript的例子，在按钮的onclick属性中使用一行JavaScript来获取当前日期：

=== "HTML"

	```
	<!DOCTYPE html>
	<html>
	<body>
	
	<h1>我的第一段 JavaScript</h1>
	
	<button type="button"
	onclick="document.getElementById('demo').innerHTML = Date()">
	点击我来显示日期和时间
	</button>
	
	<p id="demo"></p>
	
	</body>
	</html>
	```

=== "效果"

	<h1>我的第一段 JavaScript</h1>
	
	<button type="button"
	onclick="document.getElementById('demo').innerHTML = Date()">
	点击我来显示日期和时间
	</button>
	
	<p id="demo"></p>

更多关于JavaScript的内容请访问JavaScript基础

使用`<noscript>`标签，可以在浏览器无法启用JavaScript时显示替代内容：

```html
<noscript>抱歉，您的浏览器不支持 JavaScript！</noscript>
```

## 5. 语法特性

### 5.1 文件路径问题

在HTML可以这样使用相对路径来引入文件：

| path                | location                                          |
| ------------------- | ------------------------------------------------- |
| picture.jpg         | picture.jpg位于与当前网页同级文件夹内             |
| images/picture.jpg  | picture.jpg位于与当前网页同级的文件夹images内     |
| /images/picture.jpg | picture.jpg位于根目录的images文件夹内             |
| ../picture.jpg      | picture.jpg位于当前网页所在文件夹的上一级文件夹中 |

### 5.2 头部元素

`<title>`定义标签页的标题（应用于浏览器标签页栏、书签等）

`<base>`规定了网页中所有链接的格式和目标，如下面一行代码规定所有链接均在新标签页中打开：

```html
<base target="_blank" />
```

`<link>`用来链接样式表：

```html
<link rel="stylesheet" type="text/css" href="mystyle.css" />
```

`<meta>`用来定义网站元数据：

```html
<meta name="keywords" content="HTML, CSS, XML" />
<meta charset="UTF-8">
```

### 5.3 HTML5语义元素

语义元素给予了一种替代`<div>`标签的方式

| 标签名         | 内容                                               |
| -------------- | -------------------------------------------------- |
| `<article>`    | 定义文章。                                         |
| `<aside>`      | 定义页面内容以外的内容。                           |
| `<details>`    | 定义用户能够查看或隐藏的额外细节。                 |
| `<figcaption>` | 定义 `<figure>` 元素的标题。                         |
| `<figure>`     | 规定自包含内容，比如图示、图表、照片、代码清单等。 |
| `<footer>`     | 定义文档或节的页脚。                               |
| `<header>`     | 规定文档或节的页眉。                               |
| `<main>`       | 规定文档的主内容。                                 |
| `<mark>`       | 定义重要的或强调的文本。                           |
| `<nav>`        | 定义导航链接。                                     |
| `<section>`    | 定义文档中的节。                                   |
| `<summary>`    | 定义 `<details>` 元素的可见标题。                    |
| `<time>`       | 定义日期/时间。                                    |

### 5.4 字符实体

HTML中不存在转义字符，如果要显示特殊字符（空格 小于号 大于号等），请使用字符实体

下表列出了常用的一些字符实体，如果想查看完整的列表请访问[HTML字符集](https://www.w3school.com.cn/charsets/index.asp)

| 显示结果 | 描述              | 实体名称          | 实体编号 |
| :------- | :---------------- | :---------------- | :------- |
|          | 空格              | `&nbsp;`           | `&#160;`   |
| <        | 小于号            | `&lt;`              | `&#60;`    |
| >        | 大于号            | `&gt;`              | `&#62;`    |
| &        | 和号              | `&amp;`             | `&#38;`    |
| "        | 引号              | `&quot;`            | `&#34;`    |
| '        | 撇号              | `&apos;` (IE不支持) | `&#39;`    |
| ￠       | 分（cent）        | `&cent;`            | `&#162;`   |
| £        | 镑（pound）       | `&pound;`           | `&#163;`   |
| ¥        | 元（yen）         | `&yen;`             | `&#165;`   |
| €        | 欧元（euro）      | `&euro;`            | `&#8364;`  |
| §        | 小节              | `&sect;`            | `&#167;`   |
| ©        | 版权（copyright） | `&copy;`            | `&#169;`   |
| ®        | 注册商标          | `&reg;`             | `&#174;`   |
| ™        | 商标              | `&trade;`           | `&#8482;`  |
| ×        | 乘号              | `&times;`           | `&#215;`   |
| ÷        | 除号              | `&divide;`          | `&#247;`   |

### 5.5 多媒体

让任何设备上的浏览器都能够播放音频是不容易的，比较好的做法是引入外部播放器或使用超链接让浏览器解决播放问题，如果坚持在当前网页中播放，比较好的嵌入方案是：

```html
<audio controls="controls" height="100" width="100">
  <source src="song.mp3" type="audio/mp3" />
  <source src="song.ogg" type="audio/ogg" />
<embed height="100" width="100" src="song.mp3" />
</audio>
```

这一方法会优先执行audio中的mp3文件，对于不支持mp3的播放器使用ogg文件，对于不支持audio标签的播放器使用embed嵌入环境进行播放

视频的嵌入方法同理（建议上视频网站使用他们所提供的嵌入式代码）：

```html
<video width="320" height="240" controls="controls">
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  <source src="movie.webm" type="video/webm" />
  <object data="movie.mp4" width="320" height="240">
    <embed src="movie.swf" width="320" height="240" />
  </object>
</video>
```

### 5.6 本地存储

localStorage：存储在浏览器本地缓存中，只要用户不清理就会一直保存下去

sessionStorage：只在当前会话中保留

调用方法：

```javascript
// 检测支持
if (typeof(Storage) !== "undefined") {
    // 针对 localStorage/sessionStorage 的代码
} else {
    // 抱歉！不支持 Web Storage ..
}
//存储和取出
localStorage.setItem("lastname", "Gates");
document.getElementById("result").innerHTML = localStorage.getItem("lastname");
localStorage.lastname = "Gates";
document.getElementById("result").innerHTML = localStorage.lastname;
// 删除
localStorage.removeItem("lastname");
```

### 5.7 WebWorker

用于后台执行js脚本，下面是一个实例，在执行脚本时可以继续浏览页面

```javascript
var w;

function startWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("demo_workers.js");
        }
        w.onmessage = function(event) {
            document.getElementById("result").innerHTML = event.data;
        };
    } else {
        document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
    }
}

function stopWorker() { 
    w.terminate();
    w = undefined;
}
```

```javascript title="demo_workers.js"
var i=0;

function timedCount()
{
    i=i+1;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();
```


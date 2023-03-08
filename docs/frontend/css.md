---
created_time: 2023-01-29 11:31:56
modified_time: 2023-02-24 11:06:39
author: WJS
github: wjsoj
---
# CSS基础

以下内容大部分来自[W3school](https://www.w3school.com.cn/)

## 1. 基本框架

CSS，即层叠样式表，规定了html元素如何在浏览器中显示。CSS的基本语法非常简单，即由选择器+声明构成，其中声明采用了类似键值对的形式，通过分号隔开

## 2. 使用方式

### 2.1 外部链接

```html
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

### 2.2 内部样式

```html
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
} 
</style>
</head>
```

### 2.3 行内CSS

注意必须写在style内

```html
<h1 style="color:blue;text-align:center;">This is a heading</h1>
```

### 2.4 冲突解决

当为同一个元素指定了多个样式时，浏览器会按照下面的优先级顺序处理冲突：

行内样式 > 外部/内部样式表 > 浏览器默认样式

当位于`<head>`内的外部/内部样式表出现冲突时，则以先后顺序决定，以最后出现的为准

当选择器出现冲突的时候，CSS按照选择器定位的精确度赋予权重，一般来说id选择器优先于类选择器（属性、伪类）优先于元素选择器

## 3. 选择器

通用选择器：`*`影响页面上所有的元素

元素选择器：根据元素名称来选择元素

id选择器：通过元素唯一的id来选择特定元素，方法是在id前加#号

类选择器：通过元素所属的类(class)进行选择，方法是在类名前加`.`号

属性选择器：将具有某一特定属性的元素设置样式，方法是把属性值用中括号括起来

```css
*[title] {color:red;}
a[href] {color:red;}
```

??? info "补充知识"
    属性选择器还可以对属性的值进行精确的匹配（下表来自W3school）：

    | 选择器                                                       | 描述                                                         |
    | :----------------------------------------------------------- | :----------------------------------------------------------- |
    | [[*attribute*\]](https://www.w3school.com.cn/cssref/selector_attribute.asp) | 用于选取带有指定属性的元素。                                 |
    | [[*attribute*=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value.asp) | 用于选取带有指定属性和值的元素。                             |
    | [[*attribute*~=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_contain.asp) | 用于选取属性值中包含指定词汇的元素。                         |
    | [[*attribute*\|=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_start.asp) | 用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。 |
    | [[*attribute*^=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_begin.asp) | 匹配属性值以指定值开头的每个元素。                           |
    | [[*attribute*$=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_end.asp) | 匹配属性值以指定值结尾的每个元素。                           |
    | [[*attribute**=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_contain.asp) | 匹配属性值中包含指定值的每个元素。                           |

后代选择器：如`h1 em`会匹配h1元素后代中的 **所有** em元素

子元素选择器：如`h1 > em`只会选择h1元素子元素中的em元素（不包括子元素的子元素）

相邻兄弟选择器：选择紧跟在一个元素后面，具有同样父元素的元素，例如`h1 + p {margin-top:50px;}`选择紧接在h1元素后出现的段落

可以将元素选择器和类选择器结合起来使用，例如：`p.center`

也可以将选择器进行分组，同时修改多个元素，方法是用`,`分隔，例如：
```css
h1, h2, p {
  text-align: center;
  color: red;
}
```

当多个类名、属性名并置在一起的时候（并非通过逗号分隔），表示匹配 **同时具有** 多个类或属性的元素



## 4. 特定属性名

CSS属性名众多，无法一一列举，故只列出教程中提及且个人认为较常用的一部分

### 4.1 颜色

CSS支持标准颜色名、RGB(A)、HSL(A)、HEX这些方式来描述颜色，Alpha通道数值取值为0（完全透明）-1（完全不透明）之间，下面是一些例子：

```css
background-color:#ff6347;
color:Tomato;
border: 2px solid hsla(9,100%,64%,0.5);
```

!!! tip "HSL"

	HSL基于色相、饱和度和明度来确定颜色。</br>
	色相（hue）是色轮上从 0 到 360 的度数。0 是红色，120 是绿色，240 是蓝色。</br>
	饱和度（saturation）是一个百分比值，0％表示灰色阴影，而100％是全色。</br>
	亮度（lightness）也是百分比，0％是黑色，100％是白色。

### 4.2 背景

```css
background-color
opacity
background-image: url("background.jpg");
background-repeat: repeat-x / repeat-y / no-repeat;
background-position: right top; /*开始位置*/
background-attachment: fixed / scroll; /*是否随页面滚动*/
background-size:80px 60px;
```

### 4.3 边框

border-style:规定边框样式，最多可取四个值，分别对应上、右、下、左；取三个值对应上、左右、下；取两个值对应上下、左右

```css
border-style:
dotted 点状
dashed 虚线
solid 实线
double 双线
groove 凹槽
ridge 垄状
inset 3D凹陷
outset 3D凸起
none
hidden
```

只有在border-style取值后，下面的属性才会生效

```css
border-width: thin / medium / thick / 5px
border-color
border- top/right/left/bottom -style
border-radius: 5px; /*圆角*/

```

### 4.4 轮廓

轮廓位于外边距的外侧，边框之外，属性设置基本同边框

```css
outline-style
outline-width
outline-color
/*轮廓偏移：指定轮廓到元素边缘（边框或外边距处）的空间*/
outline-offset
```

### 4.5 排版

外边距和内边距：外边距可以取负值而内边距不行

使用max-width替代width在浏览器窗口较小的时候具有较好的显示效果

```css
/*外边距*/
margin: auto / 5px / inherit / 40% 
/*多个值出现时遵循上右下左*/
/*内边距*/
padding
width、height /*不包括内边距*/
max-width max-height min-width min-height
display : block / inline / none
```

### 4.6 文本

字体：

| 通用字体族 | 字体名称实例                                                 | 介绍                     |
| :--------- | :----------------------------------------------------------- | ------------------------ |
| Serif      | <span style="font-size:150%;font-family:'Times New Roman',serif">Times New Roman</span><br/><span style="font-size:150%;font-family:Georgia,serif">Georgia</span><br/><span style="font-size:150%;font-family:Garamond,serif">Garamond</span> | 衬线字体，有小笔画       |
| Sans-serif | <span style="font-size:150%;font-family:Arial,sans-serif">Arial</span><br/><span style="font-size:150%;font-family:Verdana,sans-serif">Verdana</span><br/><span style="font-size:150%;font-family:Helvetica,sans-serif">Helvetica</span> | 无衬线字体，简洁易阅读   |
| Monospace  | <span style="font-size:150%;font-family:'Courier New',monospace">Courier New</span><br/><span style="font-size:150%;font-family:'Lucida Console',monospace">Lucida Console</span><br/><span style="font-size:150%;font-family:Monaco,monospace">Monaco</span> | 等宽字体                 |
| Cursive    | <span style="font-size:150%;font-family:'Brush Script MT',cursive">Brush Script MT</span><br/><span style="font-size:150%;font-family:'Lucida Handwriting',cursive">Lucida Handwriting</span> | 草书字体：手写体         |
| Fantasy    | <span style="font-size:150%;font-family:Copperplate,fantasy">Copperplate</span><br/><span style="font-size:150%;font-family:Papyrus,fantasy">Papyrus</span> | 幻想字体：或许就是艺术字 |

字体样式：

```css
font-style: italic / normal
font-weight: bold / normal
font-size: 2em /* 32px / 16 = 2em */
		  5vm /*响应式*/
```


文本样式：

```css
color
text-align: center / left / right / justify（每行都等宽）
text-decoration: overline / line-through / underline / none
text-transform: uppercase / lowercase / capitalize
text-indent
letter-spacing: -1px
line-height
word-spacing
/*禁用文本内换行*/
white-space: nowrap
text-shadow: 2px 2px 5px blue /*水平 竖直 模糊 颜色*/
```

### 4.7 链接

状态判断：

- `a:link` - 正常的，未访问的链接
- `a:visited` - 用户访问过的链接
- `a:hover` - 用户将鼠标悬停在链接上时
- `a:active` - 链接被点击时

注意：`a:hover` 必须在 `a:link` 和 `a:visited` 之后；`a:active` 必须在 `a:hover` 之后

下面这个例子轻松的将链接创建成了一个按钮：

```css
a:link, a:visited {
  background-color: #00f500;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover, a:active {
  background-color: red;
}
```

### 4.8 改善表格外观

```css
/*在启用边框的情况下合并双边框*/
border-collapse: collapse;
/*控制文字在单元格中的垂直排布*/
vertical-align: top / bottom / center
/*悬停样式：hover*/
tr:hover {background-color: #f5f5f5;}
/*条状效果：nth-child选择器*/
tr:nth-child(even) {background-color: #f2f2f2;}
/*水平滚动条*/
<div style="overflow-x:auto;">
```

综合应用：

=== "CSS"

	```css
	#customers {
	  font-family: Arial, Helvetica, sans-serif;
	  border-collapse: collapse;
	  width: 100%;
	}
	
	#customers td, #customers th {
	  border: 1px solid #ddd;
	  padding: 8px;
	}
	
	#customers tr:nth-child(even){background-color: #f2f2f2;}
	
	#customers tr:hover {background-color: #ddd;}
	
	#customers th {
	  padding-top: 12px;
	  padding-bottom: 12px;
	  text-align: left;
	  background-color: #4CAF50;
	  color: white;
	}
	```

=== "效果"
    
    <table id="customers">
    	<tr>
    		<th>Company</th>
    		<th>Contact</th>
    		<th>Address</th>
    		<th>City</th>
    	</tr>
    	<tr>
    		<td>Alibaba</td>
    		<td>Ma Yun</td>
    		<td>No. 699, Wangshang Road, Binjiang District</td>
    		<td>Hangzhou</td>
    	</tr>
    	<tr>
    		<td>APPLE</td>
    		<td>Tim Cook</td>
    		<td>1 Infinite Loop Cupertino, CA 95014</td>
    		<td>Cupertino</td>
    	</tr>
    	<tr>
    		<td>BAIDU</td>
    		<td>Li YanHong</td>
    		<td>Lixiang guoji dasha,No 58, beisihuanxilu</td>
    		<td>Beijing</td>
    	</tr>
    	<tr>
    		<td>Canon</td>
    		<td>Tsuneji Uchida</td>
    		<td>One Canon Plaza Lake Success, NY 11042</td>
    		<td>New York</td>
    	</tr>
    	<tr>
    		<td>Google</td>
    		<td>Larry Page</td>
    		<td>1600 Amphitheatre Parkway Mountain View, CA 94043</td>
    		<td>Mountain View</td>
    	</tr>
    	<tr>
    		<td>HUAWEI</td>
    		<td>Ren Zhengfei</td>
    		<td>Putian Huawei Base, Longgang District</td>
    		<td>Shenzhen</td>
    	</tr>
    	<tr>
    		<td>Microsoft</td>
    		<td>Bill Gates</td>
    		<td>15700 NE 39th St Redmond, WA 98052</td>
    		<td>Redmond</td>
    	</tr>
    	<tr>
    		<td>Nokia</td>
    		<td>Olli-Pekka Kallasvuo</td>
    		<td>P.O. Box 226, FIN-00045 Nokia Group</td>
    		<td>Helsinki</td>
    	</tr>
    	<tr>
    		<td>SONY</td>
    		<td>Kazuo Hirai</td>
    		<td>Park Ridge, NJ 07656</td>
    		<td>Park Ridge</td>
    	</tr>
    	<tr>
    		<td>Tencent</td>
    		<td>Ma Huateng</td>
    		<td>Tencent Building, High-tech Park, Nanshan District</td>
    		<td>Shenzhen</td>
    	</tr>
    </table>

<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>

### 4.9 定位

元素依赖 top、bottom、left、right 属性来完成定位，但要使这些属性生效，必须提前定义`position`属性，其可能取值包括：

| 属性值   | 效果                                                         |
| -------- | ------------------------------------------------------------ |
| static   | 按照元素正常的排布方式进行定位                               |
| relative | 与left、top等属性叠加使用，相对其正常位置进行定位            |
| fixed    | 相对窗口进行定位，即不论页面如何滚动均保持在固定位置         |
| absolute | 相对最近的祖先进行定位，若没有则相对`<body>`元素进行定位     |
| sticky   | 粘性定位，即可以在relative和fixed间相对切换，例如在滚动到顶部时保留在顶部。早期浏览器版本不支持该属性，如果要支持safari，请添加`position: -webkit-sticky;` |

### 4.10 溢出

对于固定高度的块元素，需要使用`overflow`属性指定内容超过元素高度后的处理方法：

| 属性值  | 效果                               |
| ------- | ---------------------------------- |
| visible | 默认值，超出部分的内容在边框外显示 |
| hidden  | 超出部分的内容被裁剪并不可见       |
| scroll  | 始终添加滚动条                     |
| auto    | 仅在必要的时候添加滚动条           |

如果要分别处理水平和垂直方向的溢出，请使用`overflow-x`和`overflow-y`

## 5. 动画

### 5.1 基本语法

```css
@keyframes 动画名{
    0%/from {
        动画样式起始状态
    }
    任意百分比 {
        css code ...
    }
    100%/to {
        动画样式终止状态
    }
}
```

### 5.2 属性

- `animation-name` 动画名称(必填)
- `animation-duration` 动画持续时间(必填)
- `animation-timing-function`
  - `linear/ease/ease-in/ease-out/ease-in-out/cubic-bezier(n,n,n,n)`： 特定的贝塞尔曲线类型
- `animation-delay` 动画延迟（只是第一次）
- `animation-iteration-count` 重复次数
  - 1/2/3/4…
  - `infinite` 无限次
- `animation-direction` 动画是否重置后再开始播放
  - `normal` 动画每次都从 0% 的状态开始执行
  - `alternate` 动画从起点开始，往复运动
  - `alternate-reverse` 动画从终点开始，往复运动
- `animation-fill-mode` 动画执行完毕后状态
  - `forwards` 当动画完成后，保持最后一个属性值（在最后一个关键帧中定义） - 未实现，当前效果类似于 `both`。
  - `backwards` 在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。
  - `both` 设置对象状态为动画结束或开始的状态，结束时状态优先

- `animation-play-state` 属性指定动画是否正在运行或已暂停。可取值：`paused` `running`

### 5.3 动画监听（JavaScript）

- `animationstart` - CSS 动画开始后触发
- `animationiteration` - CSS 动画重复播放时触发
- `animationend` - CSS 动画完成后触发

### 5.4 举例

改变背景颜色和位置：

```css
div
{
    width:100px;
    height:100px;
    background:red;
    position:relative;
    animation:myfirst 5s;
}

@keyframes myfirst
{
    0%   {background:red; left:0px; top:0px;}
    25%  {background:yellow; left:200px; top:0px;}
    50%  {background:blue; left:200px; top:200px;}
    75%  {background:green; left:0px; top:200px;}
    100% {background:red; left:0px; top:0px;}
}
```

动画监听：

```html
<div id="myDIV">点我开始动画</div>
```

```javascript

var myDIV = document.getElementById("myDIV")

// 给元素绑定点击事件
myDIV.onclick = function(){
    myFunction();
}

function myFunction() {
    myDIV.style.animation = "mymove 4s 2";
}
// 动画监听
myDIV.addEventListener("animationstart", myStartFunction);
myDIV.addEventListener("animationiteration", myIterationFunction);
myDIV.addEventListener("animationend", myEndFunction);

function myStartFunction() {
    this.innerHTML = "animationstart 事件触发 - 动画已经开始";
    this.style.backgroundColor = "pink";
}

function myIterationFunction() {
    this.innerHTML = "animationiteration 事件触发 - 动画重新播放";
    this.style.backgroundColor = "yellow";
}

function myEndFunction() {
    this.innerHTML = "animationend 事件触发 - 动画已经完成";
    this.style.backgroundColor = "green";
}
```

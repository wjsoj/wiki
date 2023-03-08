---
created_time: 2023-02-24 08:47:21
modified_time: 2023-02-24 11:19:49
author: WJS
github: wjsoj
---
# JavaScript进阶

## 1. DOM常用API

**文档对象模型（Document Object Model），简称 DOM 。**

它描述了如何获取、修改、添加、删除页面上的HTML元素，这些元素以`document`（即`html`）为根节点，构成一棵节点树

### 1.1 获取节点

```javascript
var a = document.getElementById('aaa')
/*以下 getElements 返回的是一个数组*/
var b = document.getElementsByTagName('div')
var c = document.getElementsByClass('c')

var q = document.querySelectorAll(css)
document.querySelector(css) === document.querySelectorAll(css)[0] 
```

### 1.2 添加/删除/修改节点

**添加：** `document.createElement('div')`

**插入：**

方式 1：

```javascript
父节点.appendChild(新的子节点);
```

解释：

- 将指定的 childNode 参数作为最后一个子节点添加到当前节点。
- 如果参数引用了 DOM 树上的现有节点，则节点将从当前位置分离，并附加到新位置。（即同一父节点下同一个节点只能插入一次，后续插入只改变顺序，不会再添加节点）

方式 2：

```javascript
父节点.insertBefore(新的子节点, 作为参考的子节点);
```

解释：

- 在参考节点前插入一个新的节点。

- 如果参考节点为 null，那么他将在父节点里面的最后插入一个子节点。

- 如果参数引用了 DOM 树上的现有节点，则节点将从当前位置分离，并附加到新位置。

其他方式：

```javascript
el.prepend() 子节点最前面
el.append()  子节点最后面
el.before()  元素前（同级）
el.after()   元素后（同级）
/*直接插入HTML代码*/
el.insertAdjacentHTML(位置, HTML代码片段)
位置：beforeBegin / afterBegin / beforeEnd / afterEnd
对应：元素前		 子节点最前面	 子节点最后面	 元素后
```

**删除：** `父节点.removeChild（子节点）` 或者删除自己：`node1.parentNode.removeChild(node1);`

**复制节点：** `el.cloneNode(true or false)` `true`表示同时复制所有子节点

### 1.3 添加修改类

`classList` 的方法：

- `elem.classList.add/remove(class)` — 添加/移除类。
- `elem.classList.toggle(class)` — 如果类不存在就添加类，存在就移除它。
- `elem.classList.contains(class)` — 检查给定类，返回 `true/false`。

### 1.4 获取样式

- 修改、获取行内样式：`element.style.backgroundColor`
- 获取全部被应用的样式：`getComputedStyle(element, [pseudo])`，其中第二项可选参数为伪元素选择器

```html
<script>
    var body = document.body;
    console.log(body.style.color); //获取不到 ,因为没有行内样式

    var computedStyle = getComputedStyle(document.body);
    // 现在我们可以读取它的 margin 和 color 了
    alert( computedStyle.marginTop ); // 5px
    alert( computedStyle.color ); // rgb(255, 0, 0)
</script>
```

### 1.5 获取/修改/删除属性

可以将元素视作一个对象直接访问，也可以用：

```javascript
元素节点.getAttribute("属性名称");
元素节点.setAttribute(属性名, 新的属性值);
元素节点.removeAttribute(属性名);
```

### 1.6 获取标签内容

`innerText`：仅获取文本，一切修改都以文本形式存储

`innerHTML`：获取文本及所有子元素的标签，如果修改则会以HTML方式解析

### 1.7 节点关系

父节点：`el.parentNode`

下一个兄弟：`el.nextElementSibling`

前一个兄弟：`el.previousElementSibling`

第一个子节点：`el.firstElementChild`

最后一个子节点：`el.lastElementChild`

所有子节点：`el.children`

### 1.8 定时器

- `setTimeout()`; 延迟执行
- `setInterval()`; 循环执行
- `clearTimeout()`; 清除延迟执行的定时器
- `clearInterval()`; 清除循环执行的定时器

## 2. 事件驱动

JavaScript能够实现动态交互本质上依赖的是事件的 **触发——响应** 机制

### 2.1 事件绑定（单个）

```html
<p onclick="foo()">
    hello
</p>
<script>
    function foo(){
        console.log('hi')
    }
</script>
```

```html
<script>
    var pEl = document.getElementsByTagName('p')[0];
    pEl.onclick = function() {
        alert('Thank you');
    };
</script>
```

### 2.2 事件绑定（多个）

```javascript
input.addEventListener("click", handler);
// ....
input.removeEventListener("click", handler);
```

### 2.3 获取触发事件的元素

```html
<p>
    <span>hello</span>
</p>
<script>
    var pEle = document.querySelector("p");
    pEle.onclick = function(){
        // 点击文字，输出如下内容
        console.log(event.target); // span
        console.log(event.currentTarget); // p
    }
</script>
```

### 2.4 其他事件

#### 2.4.1 鼠标

右键：`oncontextmenu`，例如下面这段代码可以禁用浏览器右键

```js
// 禁止浏览器右键
document.oncontextmenu = function() {
    event.preventDefault(); // 阻止默认事件
    event.returnValue = false;
}
```

通用按键：`mousedown`、`mouseup`

`event.button` 0/1/2 分别代表 左键/滚轮/右键

`event.which` 1/2/3 与上面的 0/1/2 相对应

鼠标事件几乎都具有以下属性：

| 属性名          | 说明                                                       |
| :-------------- | :--------------------------------------------------------- |
| pageX/pageY     | 获取事件触发时鼠标相对于页面的位置                         |
| clientX/clientY | 获取事件触发时鼠标相对于可视区域的位置                     |
| offsetX/offsetY | 获取事件触发时鼠标相对于**触发**事件的元素**内容区**的位置 |
| screenX/screenY | 获取事件触发时鼠标相对于屏幕的位置，不常用                 |
| x/y             | clientX/clientY的别名                                      |

#### 2.4.2 键盘

`onkeydown` 、`onkeyup`

| 属性名   | 说明                          |
| :------- | :---------------------------- |
| key      | 按键表示的值内容              |
| keyCode  | 获取输入键盘的键码            |
| altKey   | 触发事件时 alt 键是否被按下   |
| ctrlKey  | 触发事件时 ctrl 键是否被按下  |
| shiftKey | 触发事件时 shift 键是否被按下 |

例如阻止F12的使用：

```js
document.onkeydown = function() {
    if (window.event && window.event.key == "F12") {
        event.preventDefault(); // 阻止默认事件
        event.returnValue = false;
        return false; 
    } 
}
```

## 3. 程序举例

### 3.1 表单处理

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .wrap {
            width: 800px;
            height: 400px;
            margin: 0 auto;
        }

        table {
            margin: 20px auto;
        }
    </style>
</head>

<body>
    <div class="wrap">
        <table cellspacing="20">
            <tr>
                <th><input type="checkbox" value="全选" id="all"></th>
                <th>产品</th>
                <th>价钱</th>

            </tr>
            <tr>
                <td><input type="checkbox" class="check"></td>
                <td>iphone</td>
                <td>5000</td>

            </tr>
            <tr>
                <td><input type="checkbox" class="check"></td>
                <td>iwatch</td>
                <td>2000</td>

            </tr>
            <tr>
                <td><input type="checkbox" class="check"></td>
                <td>ipad</td>
                <td>3000</td>

            </tr>
        </table>
        <input type="button" class="inverse" value="反选">
    </div>

    <script>
        var btnAll = document.querySelector('#all');
        var checkArr = document.querySelectorAll('.check');
        var inverse = document.querySelector('.inverse');
        // 全选逻辑
        btnAll.onclick = function () {
            // 获取全选框的 状态
            var status = this.checked;
            // 商品全部选中
            for (var i = 0; i < checkArr.length; i++) {
                checkArr[i].checked = status;
            }
        }

        // 反选逻辑
        inverse.onclick = function () {
            // 如何反选
            // 其实就是原来的状态  取反 !
            for (var i = 0; i < checkArr.length; i++) {
                checkArr[i].checked = !checkArr[i].checked;
            }
            isAll();
        }

        // 全选按钮 如何 联动
        // 核心问题 ,就是判断 是否所有商品 都被选中
        // 下一个问题  什么时候调用 isAll
        function isAll() {
            var status = true;
            for (var i = 0; i < checkArr.length; i++) {
                // 如果遇到一个 checked  是 false  就把 status 改成 false
                if (!checkArr[i].checked) {
                    status = false;
                    break;
                }
            }
            // 修改状态
            btnAll.checked = status;
        }

        // 每个选择框 和 按钮 点击时 都要重新执行 isAll 
        for (var i = 0; i < checkArr.length; i++) {
            checkArr[i].onclick = function () {
                isAll();
            }
        }
    </script>
</body>

</html>
```

### 3.2 倒计时

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
        <style>
            h1 {
                width: 250px;
                margin: 100px auto 50px auto;
            }

            .item {
                width: 500px;
                height: 50px;
                margin: 0 auto;
                text-align: center;
                font-size: 30px;
                color: orange;
            }

            strong {
                background-color: orange;
                padding: 0 10px;
                color: #fff;
                border-radius: 4px;
            }
        </style>
    </head>

    <body>
        <h1>距离光棍节,还有</h1>
        <div class="item">
            <span><span class="day">00</span>天</span>
            <strong><span class="hour">00</span>时</strong>
            <strong><span class="min">00</span>分</strong>
            <strong><span class="second">00</span>秒</strong>
        </div>

        <script>
            var endTime = new Date("2019-11-11");
            var dayEl = document.querySelector(".day");
            var hourEl = document.querySelector(".hour");
            var minEl = document.querySelector(".min");
            var secondEl = document.querySelector(".second");
            setInterval(function() {
                // 获取当前时间
                var nowTime = new Date();
                var cha = endTime - nowTime; // 获取相差的毫秒数
                // console.log(cha);
                // 转换  天  时  分  秒
                var DAY_MS = 1000 * 60 * 60 * 24;
                var HOUR_MS = 1000 * 60 * 60;
                var MIN_MS = 1000 * 60;
                var SECOND_MS = 1000;
                var day = Math.floor(cha / DAY_MS);
                console.log(day);
                var hour = Math.floor((cha % DAY_MS) / HOUR_MS);
                var min = Math.floor((cha % HOUR_MS) / MIN_MS);
                var second = Math.floor((cha % MIN_MS) / SECOND_MS);
                dayEl.innerText = wrap(day);
                hourEl.innerText = wrap(hour);
                minEl.innerText = wrap(min);
                secondEl.innerText = wrap(second);
            }, 1000);

            function wrap(num) {
                return num < 10 ? "0" + num : num;
            }
        </script>
    </body>
</html>
```
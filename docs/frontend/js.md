---
created_time: 2023-02-23 21:58:18
modified_time: 2023-02-24 10:54:14
author: WJS
github: wjsoj
---
# JavaScript基础

## 1. 使用方式

```html
<!DOCTYPE HTML>
<html>
    <head>
        <script src="myScript.js"></script>
    </head>
    <body>
        <script>your code</script>
    </body>
</html>
```

## 2. 基本语法：C++&Python

没错，如果你学了C++和Python，大部分内容不需要再学

例如`switch`语句，就同时综合了C++和Python的语法特性：

```javascript
switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}
```

### 2.1 基本输入输出

```javascript
alert("这是一个弹出窗口")
console.log("控制台输出")
prompt("这是一个弹出输入窗口") /*输入一律是字符串*/
```

### 2.2 数据类型

基本类型： **Number、String、Boolean、null、undefined**

高级数据类型： **Array（数组）、Object（对象）、Function（函数）**

声明变量：使用`var`或者`let`

#### 2.2.1 Number

特殊数值：`Infinity`、`-Infinity`、`NaN`

`Infinity`常在`2/0`这样的式子中产生，`NaN`则属于计算符遇到了错误（比如拿字符串参与运算）

**其他的数据类型 –> Number：使用 Number()函数**

**情况一：字符串 –> 数字**

- 1.如果字符串中是纯数字，则直接将其转换为数字。
- 2.如果字符串中有非数字的内容，则转换为 NaN。（此处可以看到 Number()函数的局限性）
- 3.如果字符串是一个空串或者是一个全是空格的字符串，则转换为 0。

**情况二：布尔 –> 数字**

- true 转成 1
- false 转成 0

**情况三：null –> 数字**

- 结果为：0

**情况四：undefined –> 数字**

- 结果为：NaN

#### 2.2.2 String

任何数和字符串做加法，都会先转成字符串再拼接

而其他情况如`100-"1"`则会输出99

**其他的简单类型 –> String：使用 String()函数**

**字符串方法：**

`charAt()` 获取相应位置的字符
`charCodeAt()` 指定位置字符 的 Unicode 编码
`indexOf()` 返回字符在字符串中的位置
`lastIndexOf()`
`concat()` 连接字符串
`slice(start,end)` 提取字符串的某个部分
`substr(index,length)` 截取字符串
`toUpperCase()`
`toLowerCase()`

#### 2.2.3 Booleanr

**其他的数据类型 –> Booleanr：使用 Boolean()函数**

情况一：数字 –> 布尔。除了 0 和 NaN，其余的都是 true。
情况二：字符串 —> 布尔。除了空串，其余的都是 true。
情况三：null 和 undefined 都会转换为 false。
情况四：对象也会转换为 true。**

#### 2.2.4 null 和 undefined

一般情况下null会被转换为0，undefined会被转化为NaN

任何值和NaN做任何比较都是false

NaN 不和任何值相等，包括他本身

`==`这个符号并不严谨，会将不同类型的东西，**转为相同类型**进行比较（大部分情况下，都是转换为数字），`===`则会要求严格等于

#### 2.2.5 数组

**遍历：**

```javascript
var arr = ["张三", "john", "李四", "王五"];
// 1. for循环 遍历索引
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// 2. for...of 遍历数组元素
var fruits = ["Apple", "Orange", "Plum"];
for (var fruit of fruits) {
  alert( fruit );
}
```

**常用方法：**

- `push` 在末端添加一个元素。

- `unshift` 在首端添加一个元素或多个元素，如果有多个，则按从前到后的顺序在数组最前端依次添加。

- `shift` 删除数组首端的一个元素。

- `pop` 从末端删除一个元素。

- `splice` 删除或替换数组某一位置的元素，语法：`splice(index,HowManyToDelete,items...)`，如果第二项取0，代表不删除元素，即添加元素。而`arr.splice(0,5)`代表删除前五个元素

- `concat` 连接多个数组。`crr = arr.concat(brr)`

- `join` 将数组转换为字符串。

- `split`将字符串分割为 **字符串数组**

- `slice`切片

- `indexOf`返回第一次出现的索引

- `lastIndexOf`顾名思义

- `includes`同python中的find

- `reverse`颠倒

- `forEach`另一种遍历方式
    ```js
    ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
      alert(''+item+' is at index '+index+' in '+array+'');
    });
    ```

- `sort`无参数时按照字典序排序

  有参数时：

  ```javascript
  arr3.sort(function(a, b) {
      return a - b; // 升序排列
      // return b - a; // 降序排列
  });
  ```

#### 2.2.6 对象（Object）

同python字典，写成键值对的形式，值也可以是一个函数。一般来说，键的引号可以省略，例如：

```javascript
var obj2 = {
    name: "张三",
    age: 26,
    sex: "男",
    children: {
        name: "小明",
    },
    //我们还可以在对象中增加一个方法。以后可以通过obj2.sayName()的方式调用这个方法
    sayName: function() {
        console.log("smyhvae");
    },
};
/*删除*/
delete obj.name;
/*遍历*/
for (var key in user) {}
```

### 2.3 Math

Math 对象的用法

| 方法              | 描述                              |
| :---------------- | :-------------------------------- |
| Math.abs()        | **返回绝对值**                    |
| Math.floor()      | **向下取整**（向小取）            |
| Math.ceil()       | **向上取整**（向大取）            |
| Math.round()      | 四舍五入取整                      |
| Math.random()     | 生成 0-1 之间的随机数（左闭右开） |
| Math.max(x, y, z) | 返回多个数中的最大值              |
| Math.min(x, y, z) | 返回多个数中的最小值              |
| Math.pow(x,y)     | 返回 x 的 y 次幂                  |
| Math.sqrt()       | 对一个数进行开方运算              |

### 2.4 Date

```javascript
var date1 = new Date();
var date2 = new Date("2023/02/14 09:00:00");
```

| 方法              | 描述                   |
| ----------------- | ---------------------- |
| getDate()         | 获取日 1-31            |
| getDay()          | 获取星期 0-6 周日-周六 |
| getMonth()        | 获取月份 1-12          |
| getFullYear()     | 获取年份               |
| getHours()        | 获取小时 0-23          |
| getMinutes()      | 获取分钟 0-59          |
| getSeconds()      | 获取秒 0-59            |
| getMilliseconds() | 获取毫秒               |
| getTime()         | 获取时间戳             |

### 2.5 反引号

```javascript
var name = "John";
// 嵌入一个变量
alert( `Hello, ${name}!` ); // Hello, John!
```

### 2.6 函数

**基本形式：**

```javascript
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2); // 使用result变量 接收sum函数暴露出来的的返回值
alert( result ); // 3
```

**简写形式：**

```javascript
(a,b) => return a+b
```

**可变参数：**

```javascript
function sum() {
    var res = 0;
    for (var i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res;
}
```

### 2.7 JSON

编码：`JSON.stringify()`

解码：`JSON.parse()`

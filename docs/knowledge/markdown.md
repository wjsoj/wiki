# Markdown快速入门

## 一.Markdown是什么？

 百度百科：Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。
 1.Markdown的语法简洁明了、学习容易，而且功能比纯文本更强，因此有很多人用它写博客。
 2.用于编写说明文档，并且以“README.md”的文件名保存在软件的目录下面。
 3.除此之外，由于我们有了RStudio这样的神级编辑器，我们还可以快速将Markdown转化为演讲PPT、Word产品文档、LaTex论文甚至是用非常少量的代码完成最小可用原型。在数据科学领域，Markdown已经广泛使用，极大地推进了动态可重复性研究的历史进程。

## 二.常用语法
### 1.标题

 在Markdown中，用#号+文本来表示标题，共六级，一般主要使用前三级。

**示例：**

```markdown
# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
这是一个段落
```
**效果如下：**

> ## 这是二级标题
> ### 这是三级标题
> #### 这是四级标题
> ##### 这是五级标题
> 这是一个段落

### 2.字体
**粗体：**`**要加粗的文本**`

*斜体：*`*要倾斜的文本*`

~~删除线~~：`~~要加删除线的文本~~`

### 3.引用

在要引用的文字前加 `>` 即可

> 这是一则示例文本
>
> > 这是一则嵌套引用

### 4.华丽丽的分割线

三个或三个以上的`*或-`

```markdown
******
------
```

**效果：**

******

------

### 5.链接与图片

格式为：

```markdown
[要显示的名称](链接地址 "链接title")
![图片文字](图片地址 "图片title")
# 强行指定宽度
<img src="http://static.runoob.com/images/runoob-logo.png" width="50%">
```

注意：一般不加title

**示例：**

```markdown
[博客园](https://www.cnblogs.com "title")
![壁纸](http://yanxuan.nosdn.127.net/29ed90248fa17692b94aaf38cccd7a34.jpg)
```

[博客园](https://www.cnblogs.com "title")

![壁纸](http://yanxuan.nosdn.127.net/29ed90248fa17692b94aaf38cccd7a34.jpg)

上传图片需要使用图床，个人推荐的有：

[postimage](https://postimages.org/)，海外常用

[imgurl](https://www.imgurl.org/vip/manage/upload)，需要注册，免费版一天400张

github图床，自己部署，完全自定义，我自己以前经常用。但考虑到2021年底开始jsDelivr的服务就不是很稳定，而且部署难度较大，故不推荐使用。

还可以使用开源软件[PicGo](https://github.com/Molunerfinn/PicGo)，支持多个图床

### 6.代码

> 单行代码：\`cout<<"helloworld"<<endl;\`

`cout<<"helloworld"<<endl;`

> 代码块：
> \`\`\`
> int main(int argc, char const *argv[])
> {
> 	cout<<"Hello World"<<endl;
> 	return 0;
> }
> \`\`\`

``` cpp
int main(int argc, char const *argv[])
{
	cout<<"Hello World"<<endl;
	return 0;
}
```

### 7.数学公式

Markdown的数学公式语法基本上可以照搬$\LaTeX$的语法。

其使用方法如下：

> 行内公式：\$ a^2 + b^2 = c^2 \$	

这是行内公式  $a^2 + b^2 = c^2$  的一个实例。

> 公式块：
>
> \$\$
>
> a^2 + b^2 = c^2
>
> \$\$

$$
a^2+b^2=c^2
$$

常用数学符号的表示方法： [参考链接](https://www.jianshu.com/p/e74eb43960a1)

```
下标符号：x_1
乘法：\times
点乘：\cdot
星号乘：\ast
除法：\div
分式：\frac {分子} {分母}
绝对值：||
开根：\sqrt 数字
大括号：\{   \}
求和：\sum
大于等于：\geq
小于等于：\leq
不等于：\neq
约等于：\approx
属于：\in
交集：\cap
并集：\cup
真子集：\subsetep
空集：\emptyset
无穷：\infty
```

### 8.转义字符"\\"

用以输出矛盾文本时进行转义。

### 9.表格、流程图

#### 表格：

`|`用来分隔单元格，`----`用来分隔表头和表格主体，`:`用来指定对齐方式

```markdown
| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
```

效果如下：

| 左对齐 | 右对齐 | 居中对齐 |
| :----- | -----: | :------: |
| 单元格 | 单元格 |  单元格  |
| 单元格 | 单元格 |  单元格  |

#### 流程图（限Typora）

#### mermaid

```markdown
竖向把LR改为TD即可
graph LR
A[方形] -->B(圆角)
    B --> C{条件a}
    C -->|a=1| D[结果1]
    C -->|a=2| E[结果2]
    F[横向流程图]
```

```mermaid
graph LR
A[方形] -->B(圆角)
    B --> C{条件a}
    C -->|a=1| D[结果1]
    C -->|a=2| E[结果2]
    F[横向流程图]
```

#### flow（目前本网站无法渲染）

```markdown
st=>start: 开始框
op=>operation: 处理框
cond=>condition: 判断框(是或否?)
sub1=>subroutine: 子流程
io=>inputoutput: 输入输出框
e=>end: 结束框	
st->op->cond
cond(yes)->io->e
cond(no)->sub1(right)->op
```

```flow
st=>start: 开始框
op=>operation: 处理框
cond=>condition: 判断框(是或否?)
sub1=>subroutine: 子流程
io=>inputoutput: 输入输出框
e=>end: 结束框
st(right)->op(right)->cond
cond(yes)->io(right)->e
cond(no)->sub1(right)->op
```

## 三.推荐一款编辑器Typora

[官网直达](https://www.typora.io)

目前需要付费，但价格不是很贵，可以合伙购买。或者使用旧版本免费的Typora，[下载链接](http://www.123pan.com/s/HQeA-UX1Sh)

### 界面展示：

![](http://yanxuan.nosdn.127.net/54f936cfb92d3b5c4be8ad6dce2e1f6a.png)

![](http://yanxuan.nosdn.127.net/a5e65a3c5178fa6dc16e0b408f2f9e9e.png)
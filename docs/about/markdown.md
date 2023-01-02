# MkDocs--markdown再进化

## 1. 前言

MkDocs是一个完全基于python和markdown打造的静态网站生成器，具有快速、简洁、优雅等诸多优点，尤其是基于markdown文件的组织编辑形式让其使用门槛大幅降低，因此特别适合实现wiki类文章的编辑。

在本网站所采用的主题——material下，markdown被拓展出了更多的语法特性，可以打造出原生markdown并不支持的一些酷炫效果，下面将挑选一些比较实用的功能进行介绍。

## 2. 额外语法

### 2.1 警告块

这里用警告块是因为官方文档将其称为Admonitions，实际上它不止于警告这一种类型，但为了方便以下全部用警告块代指


#### 2.1.1 基本语法

```markdown
!!! note "这里写标题"
	注意在markdown里面要保留缩进
```

!!! note "这里写标题"
	注意在markdown里面要保留缩进

如果不想显示标题，则会用警告块的类型替代：

```markdown
!!! note
	注意上面什么都不要写
```

!!! note
	注意上面什么都不要写

如果不想显示标题栏：

```markdown
!!! note ""
	注意要在引号中留空
```

!!! note ""
	注意要在引号中留空

#### 2.1.2 折叠

```markdown
??? note "这个块默认折叠"
	将`!!!`修改成`???`就可以实现折叠效果
```

??? note "这个块默认折叠"
	将`!!!`修改成`???`就可以实现折叠效果

如果想默认展开：

```markdown
???+ note "这个块默认展开"
	将`!!!`修改成`???`就可以实现折叠效果
	在问号后添加一个`+`来实现默认展开
```

???+ note "这个块默认展开"
	将`!!!`修改成`???`就可以实现折叠效果
	在问号后添加一个`+`来实现默认展开

#### 2.1.3 分栏显示

关于这里内容选项卡的用法，参见[内容选项卡](#23)

=== ":octicons-arrow-right-16: inline end"

    !!! info inline end
    	使用`inline end`来让警告块显示在右侧
    	
    这里通过换行表示另一个块，紧接着警告块的文字块会被自动分到另一栏
    ``` markdown
    !!! info inline end
    	使用`inline end`来让警告块显示在右侧
    ```
    
    再次换行后的文字则不会被放在分栏中显示

=== ":octicons-arrow-left-16: inline"

    !!! info inline
    	使用`inline`来让警告块显示在左侧
    
    这里通过换行表示另一个块，紧接着警告块的文字块会被自动分到另一栏
    ``` markdown
    !!! info inline
    	使用`inline`来让警告块显示在左侧
    ```
    
    再次换行后的文字则不会被放在分栏中显示

=== "markdown代码"
	
	`````markdown
	!!! info inline end
		使用`inline end`来让警告块显示在右侧
		
	这里通过换行表示另一个块，紧接着警告块的文字块会被自动分到另一栏
	``` markdown
	!!! info inline end
		使用`inline end`来让警告块显示在右侧
	···
	
	再次换行后的文字则不会被放在分栏中显示
	`````

**重要：** 无论想要把警告块放在左边还是右边，在代码中都需要把警告块的声明放在前面，因为MkDocs只会认为紧接着警告块的文字块需要被分栏显示

#### 2.1.4 警告块类型

!!! note

!!! abstract

!!! info

!!! tip

!!! success

!!! question

!!! warning

!!! failure

!!! danger

!!! bug

!!! example

!!! quote

### 2.2 更加强大的代码块

代码块的显示依赖于下列插件：

```yaml title="mkdocs.yml"
markdown_extensions:
  - pymdownx.highlight:
      anchor_linenums: true
  - pymdownx.inlinehilite
  - pymdownx.snippets
  - pymdownx.superfences
```

#### 2.2.1 注释

如果想要全局启用扩展注释：

```yaml title="mkdocs.yml"
theme:
  features:
    - content.code.annotate 
```

在使用注释时，只需要在想要添加代码块的地方加入`# (1)`这样的形式（数字根据注释的个数变化），再在代码块的结尾写出注释内容即可 **（注意要空一行再写注释内容）** ，下面是一个例子：

````markdown
```python
import numpy as np # (1)
```

1. 这里写注释内容
````

```python
import numpy as np # (1)
```

1. 这里写注释内容

如果不想显示`#`号，在括号后加一个感叹号即可。


````markdown
```python
import numpy as np # (1)!
```

1. 这里写注释内容
````

```python
import numpy as np # (1)!
```

1. 这里写注释内容

#### 2.2.2 代码块标题

修改`title`参数的值

````markdown
```python title="这里写标题"
import numpy as np
```
````

```python title="这里写标题"
import numpy as np
```

#### 2.2.3 行号

默认不显示，如果需要显示行号：
````markdown
```python linenums="5"
n = int(input())
s = input()
ans = 0
for i in range(1,len(s)):
    if s[i]==s[i-1]:
        ans +=1
print(ans)
```
````

```python linenums="5"
n = int(input())
s = input()
ans = 0
for i in range(1,len(s)):
    if s[i]==s[i-1]:
        ans +=1
print(ans)
```

其中`linenums`参数的值指定了行号开始的数字，这一设定是为了方便把一个大型的代码显示成多个代码块

#### 2.2.4 强调

**注意：** 行号只能从1开始

````markdown
```python linenums="1" hl_lines="4 5 6"
n = int(input())
s = input()
ans = 0
for i in range(1,len(s)):
    if s[i]==s[i-1]:
        ans +=1
print(ans)
```
````

```python linenums="1" hl_lines="4 5 6"
n = int(input())
s = input()
ans = 0
for i in range(1,len(s)):
    if s[i]==s[i-1]:
        ans +=1
print(ans)
```

#### 2.2.5 行内代码启用高亮

一般情况下行内代码是不能高亮的，如果想要高亮，请指明语言类型并添加`#!`标识符

```markdown
这是在行内代码`#!python for i in range(n)`中启用高亮的一个例子
```

这是在行内代码`#!python for i in range(n)`中启用高亮的一个例子

### 2.3 内容选项卡

内容选项卡在展现“代码-效果图”或者同一算法的不同语言实现的时候用处很大，其实现依赖于下列插件：

```yaml title="mkdocs.yml"
markdown_extensions:
  - pymdownx.superfences
  - pymdownx.tabbed:
      alternate_style: true 
```

#### 2.3.1 用法

注意缩进

````markdown
=== "C"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "C++"

    ``` c++
    #include <iostream>

    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```
````

=== "C"

    ``` c
    #include <stdio.h>
    
    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "C++"

    ``` c++
    #include <iostream>
    
    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```

#### 2.3.2 全局标签关联

当用内容选项卡来归类不同语言的代码时，有时候读者可能需要一次修改即可保证整个网站的代码块都只显示特定的语言，这时候可以在标签之间建立关联：

```yaml title="mkdocs.yml"
theme:
  features:
    - content.tabs.link
```

这一特性会使所有相同名称的选项卡同步切换，在MkDocs官网有明了的图片效果展示：

=== "选项开启"

	![image.png](https://s2.loli.net/2022/12/27/Hko5FC9DeUgJyjz.png)

=== "选项关闭"

	![image.png](https://s2.loli.net/2022/12/27/qv5REhf1wNmktDS.png)

### 2.4 脚注

添加方法：

```markdown
在这里我添加了一个脚注[^1]，点击后会自动跳转到底部[^2]
```

在这里我添加了一个脚注[^1]，点击后会自动跳转到底部[^2]

在页面任何位置都可以声明脚注，默认会被放置在页面底部

```markdown
[^1]: 这里写注释内容
[^2]:
	在注释中的文字过多的时候，为了美观可以采用多行注释的写法，
	渲染的时候仍然会渲染在一起。
	注意在多行注释的前面一定要保留缩进。
```

[^1]: 这里写注释内容
[^2]:
	在注释中的文字过多的时候，为了美观可以采用多行注释的写法，
	渲染的时候仍然会渲染在一起。
	注意在多行注释的前面一定要保留缩进。

### 2.5 更丰富的字体格式

MkDocs提供了一种将HTML中的文字格式标签简化的方式，下述字体格式的实现依赖下列插件：

```yaml title="mkdocs.yml"
markdown_extensions:
  - pymdownx.critic
  - pymdownx.caret
  - pymdownx.keys
  - pymdownx.mark
  - pymdownx.tilde
```

#### 2.5.1 字体格式

注意大括号必不可少

字体格式包括{\-\-删除块\-\-}和{\+\+添加块\+\+}以及{\>\>行内文字注释\<\<}

字体格式包括{--删除块--}和{++添加块++}以及{>>行内文字注释<<}

此外还支持Markdown原生的字体格式：
```markdown
==字体高亮==
~~删除线~~
^^下划线^^
```
==字体高亮==

~~删除线~~

^^下划线^^

#### 2.5.2 文字块

```markdown
{= =

与高亮的区别是必须要有空行，请忽略等号间的空格，如果没有那个空格就会被转换，用法就显示不出来

==}
```

{==

与高亮的区别是必须要有空行，请忽略等号间的空格，如果没有那个空格就会被转换，用法就显示不出来

==}

#### 2.5.3 上下标

用`~`或者`^`围起来

```markdown
H~2~O
A^T^A
```

H~2~O

A^T^A

#### 2.5.4 键盘按键

当需要展示一种快捷键的时候：

```markdown
++ctrl+alt+del++
++ctrl++
```

++ctrl+alt+del++

++ctrl++

### 2.6 图片增强

#### 2.6.1 并排显示（Markdown通用）

利用markdown兼容HTML语法的特性，利用figure环境实现：

```html
<center class="half">
<figure>
    <img src="" width="300"/>
    <img src="" width="300"/>
</figure>
</center>
```

<center class="half">
<figure>
    <img src="https://dummyimage.com/600x400/f5f5f5/aaaaaa&text=–%20Image%20–" width="300"/> <img src="https://dummyimage.com/600x400/f5f5f5/aaaaaa&text=–%20Image%20–" width="300"/>
</figure>
</center>


#### 2.6.2 图片标题（Markdown通用）

```html
<figure>
	<img src="" width="300"/>
	<figcaption>图片标题</figcaption>
</figure>
```

<figure>
	<img src="https://dummyimage.com/600x400/f5f5f5/aaaaaa&text=–%20Image%20–" width="300"/>
	<figcaption>图片标题</figcaption>
</figure>

#### 2.6.3 图片分栏显示

=== "Left"

    ``` markdown title="图片居左"
    ![Image title](图片链接){ align=left }
    ```
    
    ![Image title](https://dummyimage.com/600x400/f5f5f5/aaaaaa&text=–%20Image%20–){ align=left width=350 }
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

=== "Right"

    ``` markdown title="图片居右"
    ![Image title](图片链接){ align=right }
    ```
    
    ![Image title](https://dummyimage.com/600x400/f5f5f5/aaaaaa&text=–%20Image%20–){ align=right width=350 }
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

### 2.7 列表增强

除了传统的有序、无序列表，本主题还提供了两种增强列表，它们依赖于插件：

```yaml title="mkdocs.yml"
markdown_extensions:
  - def_list
  - pymdownx.tasklist:
      custom_checkbox: true
```

#### 2.7.1 定义列表

通过键值对的方式快速生成排版好的定义

```markdown
A
:	这里写定义内容

B
:	这里写定义内容
	
	还可以分多行
```

A
:	这里写定义内容

B
:	这里写定义内容
	
	还可以分多行

#### 2.7.2 待办事项

```markdown
* [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
* [ ] Vestibulum convallis sit amet nisi a tincidunt
    1. [x] In hac habitasse platea dictumst
    2. [x] In scelerisque nibh non dolor mollis congue sed et metus
    3. [ ] Praesent sed risus massa
* [ ] Aenean pretium efficitur erat, donec pharetra, ligula non scelerisque
```

* [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
* [ ] Vestibulum convallis sit amet nisi a tincidunt
    1. [x] In hac habitasse platea dictumst
    2. [x] In scelerisque nibh non dolor mollis congue sed et metus
    3. [ ] Praesent sed risus massa
* [ ] Aenean pretium efficitur erat, donec pharetra, ligula non scelerisque

### 2.8 链接增强

依赖插件：

```yaml title="mkdocs.yml"
markdown_extensions:
  - abbr
  - attr_list
  - pymdownx.snippets
```

超链接（markdown通用）：

```markdown
[将鼠标移到文字上方试试](https://wjsphy.tk/ "这里写提示内容")
```

[将鼠标移到文字上方试试](https://wjsphy.tk/ "这里写提示内容")

纯文本：

```markdown
The HTML is short for Hyper Text Markup Language.

*[HTML]: Hyper Text Markup Language
```

The HTML is short for Hyper Text Markup Language.

*[HTML]: Hyper Text Markup Language

### 2.9 按钮

通过按钮可以把网页链接替换为更为好看的按钮，使用方法：

```markdown
[显示的名称](链接){.md-button}
[显示的名称](链接){.md-button .md-button--primary}
```

对应两种不同的样式：

[链接是空的](#29){ .md-button }

[可以点着玩](#29){ .md-button .md-button--primary }

### 2.10 图标、表情

访问官方说明文档来查找需要的图标/表情，使用时用两个`:`括住即可：

[前往搜索链接](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/#search){.md-button}

或者在此搜索：

<div class="mdx-iconsearch" data-mdx-component="iconsearch">
  <input
    class="md-input md-input--stretch mdx-iconsearch__input"
    placeholder="Search the icon and emoji database"
    data-mdx-component="iconsearch-query"
  />
  <div class="mdx-iconsearch-result" data-mdx-component="iconsearch-result">
    <div class="mdx-iconsearch-result__meta"></div>
    <ol class="mdx-iconsearch-result__list"></ol>
  </div>
</div>
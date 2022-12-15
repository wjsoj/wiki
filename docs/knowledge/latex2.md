# LaTeX进阶操作

## 1. 修改各级标题的字体

利用`ctexart`的自身特性进行修改，使用`\ctexset`命令

下面是一个例子：

```latex
\ctexset{
    section={   
        name={,、},
        number={\chinese{section}},
        format=\heiti\centering\zihao{4},
        aftername=\hspace{0pt}
        },
    subsection={   
        name={\hspace{2em}（,）、},
        number={\chinese{subsection}},
        format=\bfseries\songti\zihao{-4},
        aftername=\hspace{0pt}
        },
    subsubsection={   
        name={\hspace{2em},、},
        number={\arabic{subsubsection}},
        format=\songti\zihao{-4},
        aftername=\hspace{0pt}
        }
}
```

1. `name`参数指定了编号的格式，用`,`占位表示编号
2. `number`参数指定了编号的形式，用`\chinese`可以换成中文小写数字
3. `format`参数指定了标题的格式，注意要加粗只能使用`\bfseries`命令（`\textbf`只用来在正文中显示加粗的文本），`\zihao`后的数字按照传统的中文字号进行定义，如-4表示小四号字，这样的字体定义方式只在`cTex`类的文档中可用。还可以指定标题的对齐方式，默认左对齐，使用`\centering`来居中，`raggedright`来右对齐。
4. `aftername`控制编号和标题文本间的内容，默认有较大的空隙，显示效果不太好，建议更改参数为0
5. `beforeskip`和`afterskip`用来控制标题和上下文的距离
6. 如果需要细节上的格式修改，参照下图：

![标题的各种格式](https://img-blog.csdnimg.cn/img_convert/e63730eb463b7c2f3e3ac2afa39d92a5.png)

## 2. 修改“摘要”的字体

默认摘要页的标题采用普通字体显示，效果不好，所以使用命令来自定义：

```latex
\renewcommand{\abstractname}{\textbf{\zihao{4}摘\quad 要}}
```

## 3. 修改目录的格式

先引入宏包：

```latex
\usepackage{titletoc}
```

下面是一个例子：

```latex
\titlecontents{section}[3em]{\heiti \bfseries \zihao{4}}{\contentslabel{1.5em}}{}{\titlerule*[0.5em]{$\cdot$}\contentspage}
\titlecontents{subsection}[5em]{\heiti \zihao{-4}}{\contentslabel{5em}}{}{\titlerule*[0.5em]{$\cdot$}\contentspage}
\titlecontents{subsubsection}[5em]{\zihao{-4}}{\contentslabel{3em}}{}{\titlerule*[0.5em]{$\cdot$}\contentspage}
```

其中：

1. `[5em]`指定了目录文字起始的位置距左侧页边的距离
2. `{\zihao{4}\heiti\bfseries}`指定了字体格式为黑体四号加粗
3. `\contentslabel{3em}`表示目录中显示编号，且文字与 **编号的起始位置** 的距离为3em，建议预留足够的空间，否则编号和文字会重叠
4. `{}`为标题内容，还不太会用，建议留空别用
5. `\titlerule*{0.5em}`表示指示线的间隔，后面的大括号指定了指示线的形式是点
6. `\contentspage`表示在目录显示页码

## 4. 修改文章标题页的格式

还没学会，先把坑埋着

## 5. 页面排版设置

使用`geometry`宏包：

```latex
\usepacksge{geometry}
```

目前还没遇上，先留个坑
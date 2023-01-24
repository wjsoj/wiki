---
created_time: 2022-11-16 09:54:52
modified_time: 2022-12-07 15:53:46
author: WJS
github: wjsoj
---
# LaTeX基础语法

以下内容均整理自[OverLeaf文档](https://www.overleaf.com/learn)

## 1. 导言区

### 1.1 文档格式

中文输入必须指定特定的文档类型：

```tex
\documentclass{ctexart}
```

如果要指定更多参数（这里设定默认字体大小12pt，A4纸单面打印）：

```tex
\documentclass[12pt, a4paper, oneside]{ctexart}
```

### 1.2 宏包

如果要插入图片：

```tex
\usepackage{graphicx}
```

一些数学的定理环境和更丰富的显示效果：

```tex
\usepackage{amsmath, amsthm, amssymb}
```

### 1.3 标题信息

**注意：要显示标题信息需要在正文部分添加`\maketitle`命令**

```tex
\title{Your title}
\author{Your name \thanks{other author}}
\date{\today}

\begin{document}
\maketitle
\end{document}
```

## 2. 正文

### 2.1 目录结构

#### 2.1.1 摘要

```tex
\begin{abstract}
摘要内容
\end{abstract}
```

#### 2.1.2 段落和空行

$\LaTeX$默认不自动换行和分段，如果要新建一个新的段落，请使用一个空行。如果要手动换行，可以使用：

```tex
\\
\newline
```

如果要在段落之间产生一个间距：

```tex
\bigskip
\medskip
\smallskip
```

#### 2.1.3 段首缩进

在帮助文档中提到：

> By default LaTeX does not indent the first paragraph contained in a document section

如果想要控制缩进：

```tex
\setlength{\parindent}{20pt}
\indent
\noindent
```

#### 2.1.4 结构

在`book`类和`report`类中包含part和chapter两种层级，其他文章类型一般最高级就是`section`

```tex
\documentclass{book}
\part
\chapter
\section
\subsection
\subsubsection
\paragraph
\subparagraph
```

#### 2.1.5 目录

想要添加目录，只需要使用命令：

```tex
\tableofcontents
```

默认只生成带编号的标题，如果要添加无编号的标题到目录中：

```tex
\section*{Unnumbered Section}
\addcontentsline{toc}{section}{Unnumbered Section}
```

#### 2.1.6 页码

想要修改页码样式，使用命令：

```tex
\pagenumbering{digit type}
```

可选参数如下表：

| 命令     | 样式                 |
| -------- | -------------------- |
| `arabic` | 阿拉伯数字，默认样式 |
| `roman`  | 小写罗马数字         |
| `Roman`  | 大写罗马数字         |
| `alph`   | 小写英文字母         |
| `Alph`   | 大写英文字母         |

强行指定当前页码（比如正文重新进行页码排序）或当前页不标记页码：

```tex
\setcounter{page}{2}
\thispagestyle{empty}
```

### 2.2 字体设置

分别对应粗体、斜体、下划线

```tex
\textbf{}
\textit{}
\underline{}
% 在常规文本中斜体，斜体中变常规
\emph{}
```

如果想要修改颜色可以用两种方法：

```tex
% 第一种方法，利用RGB值
\textcolor[RGB]{text content}
% 第二种方法，利用宏包
\usepackage{xcolor}
\textcolor[blue]{text content}
```

### 2.3 表格

建议直接在线生成，[Tables Generator](https://www.tablesgenerator.com/)

搭配table环境可以和图片一样添加标题，浮动显示位置，添加引用标签等。下面是一个例子：

```tex
\begin{table}[h!]
\centering
\begin{tabular}{||c c c c||} 
 \hline
 Col1 & Col2 & Col2 & Col3 \\ [0.5ex] 
 \hline\hline
 1 & 6 & 87837 & 787 \\ 
 2 & 7 & 78 & 5415 \\
 3 & 545 & 778 & 7507 \\
 4 & 545 & 18744 & 7560 \\
 5 & 88 & 788 & 6344 \\ [1ex] 
 \hline
\end{tabular}
\caption{Table to test captions and labels.}
\label{table:data}
\end{table}
```

### 2.4 数学公式

建议直接在线生成，[latexlive](https://www.latexlive.com/)

#### 2.4.1 行内公式

方法同markdown，如果要展现出行间公式的效果，使用命令：

```tex
$\displaystyle$
```

#### 2.4.2 公式块

建议用下面两种方式输入：

```tex
\[a^2+b^2 = c^2\]
\begin{displaymath}
a^2+b^2 = c^2
\end{displaymath}
```

#### 2.4.3 常用数学排版记号

##### 2.4.3.1 空格

| LATEX code                   | Description                                                  |
| :--------------------------- | :----------------------------------------------------------- |
| `\quad`                      | space equal to the current font size (= 18 [mu](https://www.overleaf.com/learn/latex/Lengths_in_LaTeX)) |
| `\,`                         | 3/18 of `\quad` (= 3 mu)                                     |
| `\:`                         | 4/18 of `\quad` (= 4 mu)                                     |
| `\;`                         | 5/18 of `\quad` (= 5 mu)                                     |
| `\!`                         | -3/18 of `\quad` (= -3 mu)                                   |
| `\ `(space after backslash!) | equivalent of space in normal text                           |
| `\qquad`                     | twice of `\quad` (= 36 mu)                                   |

##### 2.4.3.2 字体

| 字体        | 适用场景                 |
| ----------- | ------------------------ |
| `\mathbb{}` | 对数域的表示             |
| `\texfrf{}` | 公式内文本（建议用英语） |

#### 2.4.4 其他格式操作

##### 2.4.4.1 多行公式（展示基于mathjax插件，与LaTeX可能有较大出入）

使用`split`或者`align`环境，用`&`标明垂直对齐的位置：

```tex
$$
\begin{align}
A & = \frac{\pi r^2}{2} \\
 & = \frac{1}{2} \pi r^2
\end{align}
$$
```

$$
\begin{align}
A & = \frac{\pi r^2}{2} \\\\
 & = \frac{1}{2} \pi r^2
\end{align}
$$

`multiline`则会将第一行左对齐，第二行右对齐，例如：

```tex
\begin{multline}
p(x) = 3x^6 + 14x^5y + 590x^4y^2 + 19x^3y^3\\\\
- 12x^2y^4 - 12xy^5 + 2y^6 - a^3b^3
\end{multline}
```

$$
\begin{multline}
p(x) = 3x^6 + 14x^5y + 590x^4y^2 + 19x^3y^3\\\\
- 12x^2y^4 - 12xy^5 + 2y^6 - a^3b^3
\end{multline}
$$



##### 2.4.4.2 给公式编号

使用`equation`环境以及上面提到的多行公式环境都会自动产生一个编号，如果不希望保留编号，请不使用定理环境或者在环境词的后面加`*`号。如果需要引用公式，添加`\label`标签即可。

#### 2.4.5 与mathjax的兼容问题

不同版本还有较大出入，目前还在研究。

### 2.5 插入图片

要插入图片，请在导言区加入宏包并指定路径（非必须，建议这么做）：

```tex
\usepackage{graphicx}
% 注意下面一行括号内的写法
\graphicspath{{images/}}
```

下面是正文中插入图片的一个例子：

```tex
\begin{figure}[htbp]
	\centering
	\includegraphics[width=0.6\textwidth]{img.jpg}
	\caption{图片标题}
	\label{fig:1}
\end{figure}

如果想要在正文中引用图片，只需要输入\ref{fig:1}
还可以通过\pageref{fig:1}获取图片所在的页面页码
```

其中，`[htbp]`参数会自动选择最优位置，`img.jpg`应当位于导言区规定的目录中，扩展名可以省略，`\label`指定了图片在引用时使用的标签，序号会自动添加。

#### 2.5.1 路径指定

两种方式，第一种会在出现了`\includegraphics`命令的代码所在目录下寻找，第二种则只会在`main.tex`同级的目录下寻找：

```tex
\graphicspath{{images/}}
\graphicspath{{./images/}}
```

如果在本地编辑器上使用，可以用绝对路径。

如果需要多个图片目录：

```tex
\graphicspath{ {./images1/}{./images2/} }
```

#### 2.5.2 可选参数

```tex
% 等比例缩放
\includegraphics[scale=1.5]{img}
% 强制指定宽度和高度（单独指定时按比例进行缩放）
\includegraphics[width=4cm, height=3cm]{img}
% 利用LaTeX默认参数
\includegraphics[width=\textwidth]{img}
\columnsep, \linewidth, \textheight, \paperheight ...
% 旋转指定角度（逆时针）
\includegraphics[angle=45]{img}
```

#### 2.5.3 figure 环境

在需要对图片的出现位置做更精细的控制时，就需要使用figure环境，当参数为`[htbp]`或空白时，$\LaTeX$会自动为你选择图片出现的最优位置，其他可选的参数及意义如表：

| **Parameter** | **Position**                                                 |
| :-----------: | :----------------------------------------------------------- |
|       h       | Place the float *here*                                       |
|       t       | Position at the *top* of the page.                           |
|       b       | Position at the *bottom* of the page.                        |
|       p       | Put on a special *page* for floats only.                     |
|       !       | Override internal parameters LaTeX uses for determining "good" float positions. |
|       H       | Places the float at precisely the location in the LATEX code. Requires the `float` package, though may cause problems occasionally. This is somewhat equivalent to `h!`. |

#### 2.5.4 文字环绕

在导言区添加：

```tex
\usepackage{wrapfig}
```

图片位于文字右侧：

```tex
\begin{wrapfigure}{r}{0.25\textwidth}
    \centering
    \includegraphics[width=0.25\textwidth]{mesh}
\end{wrapfigure}
```

可选参数 **（大写表示浮动图片）** ：

| **Parameter** | **Position**                                           |
| :-----------: | ------------------------------------------------------ |
|      l L      | right side of the text                                 |
|      r R      | left side of the text                                  |
|      i I      | inside edge–near the binding (in a *twoside* document) |
|      o O      | outside edge–far from the binding                      |

#### 2.5.5 标题

标题的位置取决于`\caption`和`\includegraphics`命令的相对位置。

如果想要把标题显示在侧边：

```tex
\usepackage[rightcaption]{sidecap}
% 或者 \usepackage[leftcaption]{sidecap}
\begin{SCfigure}[h]
	\caption{标题}
	\includegraphics[width=0.6\textwidth]{universe}
\end{SCfigure}
```

#### 2.5.6 标签

熟悉一下三个命令：

```tex
\label{fig:img}
\ref{fig:img}
\pageref{fig:img}
```

如果需要生成图片列表（只会列出有标题的图片）：

```tex
\listoffigures
```

### 2.6 列表

#### 2.6.1 无序列表

```tex
\begin{itemize}
  \item The individual entries are indicated with a black dot, a so-called bullet.
  \item The text in the entries may be of any length.
\end{itemize}
```

#### 2.6.2 有序列表

```tex
\begin{enumerate}
  \item The individual entries are indicated with a number.
  \item The text in the entries may be of any length.
\end{enumerate}
```

#### 2.6.3 自定义标号

单个元素：

```tex
\item[label text]
```

改变一层列表的标号或格式：

```tex
\renewcommand{\labelenumii}{\arabic{enumi}.\arabic{enumii}}
\renewcommand{\labelenumiii}{\arabic{enumi}.\arabic{enumii}.\arabic{enumiii}}
\renewcommand{\labelenumiv}{\arabic{enumi}.\arabic{enumii}.\arabic{enumiii}.\arabic{enumiv}}
% 显示结果
% 第二层 3.1
% 第三层 3.1.1
\begin{enumerate}
\item One
\item Two
\item Three
\begin{enumerate}
    \item Three point one
    \begin{enumerate}
    \item Three point one, point one
        \begin{enumerate}
        \item Three point one, point one, point one
        \item Three point one, point one, point two
        \end{enumerate}
    \end{enumerate}
\end{enumerate}
\item Four
\item Five
\end{enumerate}
```

可选的样式：


|样式|命令|
|:----|:---:|
| 阿拉伯数字   | `\arabic{*counter variable*}` |
| 小写罗马数字 | `\roman{*counter variable*}`  |
| 大写罗马数字 | `\Roman{*counter variable*}`  |
| 大写字母     | `\Alph{*counter variable*}`   |
| 小写字母     | `\alph{*counter variable*}`   |

### 2.7 超链接

要使用超链接，请在导言区加入：

```latex
\usepackage[colorlinks,linkcolor=black,urlcolor=blue]{hyperref}
```

另一种配置方式：

```latex
\usepackage{hyperref}
\hypersetup{
    colorlinks=true,
    linkcolor=blue,
    filecolor=magenta,      
    urlcolor=cyan,
    pdftitle={Overleaf Example},
    pdfpagemode=FullScreen,
    }
```

`urlcolor`项指定了网页链接的显示颜色，如果要插入网页链接，请使用：

```latex
\href{https://wjsoj.github.io/wiki/}{主页}
% 或者
\url{https://wjsoj.github.io/wiki/}
```

`filecolor`指定了在文章中调用文件的链接的显示方式，例如下面这行命令会链接到当前目录下一个`file.txt`的文件：

```latex
\href{run:./file.txt}{File.txt}
```

`linkcolor`项指定了一般的链接的颜色（如目录页、参考文献的DO.I编号等）

其他关于pdf viewer的配置如下：

| Option          | Default value | Description                                                  |
| :-------------- | :------------ | :----------------------------------------------------------- |
| `bookmarks`     | true          | Acrobat bookmarks are written, similar to the table of contents. |
| `bookmarksopen` | false         | Bookmarks are shown with all sub-trees expanded.             |
| `pdfpagemode`   | empty         | Determines how the file is opened. Possibilities are UseThumbs (Thumbnails), UseOutlines (Bookmarks) and FullScreen. |
| `pdftitle`      |               | Sets the document title.                                     |
| `pdfauthor`     |               | Sets the document Author.                                    |
| `pdfstartpage`  | 1             | Determines on which page the PDF file is opened.             |

## 3. 参考文献

根据overleaf的官方帮助文档，使用`biblatex`能提供更好的参考文献引用体验。

下面是一个例子：

```tex
\usepackage[backend=bibtex,style=numeric,sorting=none,natbib=true]{biblatex}
\addbibresource{sample.bib} %Import the bibliography file
\begin{document}
Let's cite! Einstein's journal paper \cite{einstein} and Dirac's
book \cite{dirac} are physics-related items. 
\printbibliography %Prints bibliography
\end{document}
```

另一种加入参考文献的方法（初学者建议用这个， **只需要两行** 后面的内容可以跳过）：

```tex
% 在\end{document}前面加入：
% 按引用位置排序
\bibliographystyle{unsrt}
\bibliography{sample.bib}
```

这一种方法下的`style`可选参数：

| option    | description                                      |
| --------- | ------------------------------------------------ |
| `plain`   | 按字母的顺序排列，比较次序为作者、年度和标题.    |
| `unsrt`   | 样式同plain，只是按照引用的先后排序.             |
| `alpha`   | 用作者名首字母+年份后两位作标号，以字母顺序排序. |
| `abbrv`   | 类似plain，将月份全拼改为缩写，更显紧凑.         |
| `ieeetr`  | 国际电气电子工程师协会期刊样式.                  |
| `acm`     | 美国计算机学会期刊样式.                          |
| `siam`    | 美国工业和应用数学学会期刊样式.                  |
| `apalike` | 美国心理学学会期刊样式.                          |

### 3.1 可选参数

**（在VS Code里其实是必选参数，而且必须用`bibtex`编译，目前不清楚其他编辑器的情况）**

下面是另一个例子：

```tex
\usepackage[
backend=biber,
style=alphabetic,
sorting=ynt
]{biblatex}
% 建议用[backend=bibtex,style=numeric,sorting=none,natbib=true]
% 表示按数字显示，按引用位置排序
\addbibresource{sample.bib}
```

其中`style`指定了结尾显示文献列表和在文本中引用文献时的格式，其他格式请参考[overleaf帮助文档](https://www.overleaf.com/learn/latex/Biblatex_bibliography_styles)

`sorting`参数指定了参考文献排序的依据，可选的参数如表：

| option  | description                                         |
| :------ | :-------------------------------------------------- |
| `nty`   | sort by name, title, year                           |
| `nyt`   | sort by name, year, title                           |
| `nyvt`  | sort by name, year, volume, title                   |
| `anyt`  | sort by alphabetic label, name, year, title         |
| `anyvt` | sort by alphabetic label, name, year, volume, title |
| `ydnt`  | sort by year (descending), name, title              |
| `none`  | entries are processed in citation order             |

### 3.2 添加到目录

```tex
\printbibliography[
heading=bibintoc,
title={Whole bibliography}]
```

如果参考文献分为多个部分，可以使用副标题：

```tex
\printbibliography[heading=subbibintoc,type=article,title={Articles only}]
```

### 3.3 脚注

使用`\footnote`命令，格式为：

```tex
\footnote{注释内容}
```

注释会自动加在页面底部并编号。

## 4. 关键字

### 4.1 保留字符

```tex
# $ % ^ & _ { } \
```

如果想显示大括号建议使用`\brace`，也均可以使用转义字符`\`输出。

如果要输出反斜杠和波浪线	，利用公式环境：

```tex
$\backslash$
$\sim$
```



### 4.2 一些常用的长度参数

| Abbreviation   | Definition                                          |
| :------------- | :-------------------------------------------------- |
| `pt`           | A point, is the default length unit. About 0.3515mm |
| `mm`           | a millimetre                                        |
| `cm`           | a centimetre                                        |
| `in`           | an inch                                             |
| `ex`           | the height of an **x** in the current font          |
| `em`           | the width of an **m** in the current font           |
| `\columnsep`   | distance between columns                            |
| `\columnwidth` | width of the column                                 |
| `\linewidth`   | width of the line in the current environment        |
| `\paperwidth`  | width of the page                                   |
| `\paperheight` | height of the page                                  |
| `\textwidth`   | width of the text                                   |
| `\textheight`  | height of the text                                  |


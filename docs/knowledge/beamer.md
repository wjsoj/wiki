# 如何用LaTeX写PPT

## 1. 前言与基本格式

$\LaTeX$中的PPT并不是真正的PPT，而是编译成类似PPT版式的pdf文件，如果想要放映展示的话可以直接使用odf的全屏播放功能，或者再单独转换成PPT文件。之所以用$\LaTeX$写PPT，原因在于其提供的主题大多简洁明了，没有任何特效或者额外的排版，所以特别适合用来做学术报告。同时如果你的论文本身就是用$\LaTeX$排版的，再用它来写PPT就非常方便。最后最重要的一点是它能提供完全无图形 、纯文本的沉浸式写作体验，再也不用担心排版问题，也能在写作的时候更加专心。

要想实现PPT的效果，需要将文件类型修改为`beamer`：
```latex
\documentclass{beamer}
```

!!! note "重要"
	默认不支持中文，如果需要支持中文：
	```latex
	\usepackage{bookmark} % 不知道为什么，不加这个宏包就报错
	\usepackage[UTF8]{ctex}
	```

添加文件的基本信息：

```latex
\title{Sample title}
\author{Anonymous}
\institute{Overleaf}
\date{2021}
```

下面是一个简单的例子：

=== "代码"

	```latex
	\begin{document}
	\frame{\titlepage}
	
	\begin{frame}
	\frametitle{Sample frame title}
	This is some text in the first frame. 
	This is some text in the first frame. 
	This is some text in the first frame.
	\end{frame}
	
	\end{document}
	```

=== "效果图"

	<center><img src="https://sharelatex-wiki-cdn-671420.c.cdn77.org/learn-scripts/images/d/da/BeamerExample1OverleafUpdated.png" width="70%"></center>

## 2. 语法示例

### 1. 标题页

下面是一个例子：

=== "代码"

	```latex
	\title[About Beamer] %用在页面底部，可选参数
	{About the Beamer class in presentation making}
	
	\subtitle{A short story}
	
	\author[Arthur, Doe] % (optional, for multiple authors)
	{A.~B.~Arthur\inst{1} \and J.~Doe\inst{2}}
	
	\institute[VFU] % (optional)
	{
	  \inst{1}
	  Faculty of Physics\\
	  Very Famous University
	  \and
	  \inst{2}
	  Faculty of Chemistry\\
	  Very Famous University
	}
	
	\date[VLC 2021] % 用于页面底部
	{Very Large Conference, April 2021}
	
	% 前提是主题要支持logo显示
	\logo{\includegraphics[height=1cm]{overleaf-logo}}
	```

=== "效果图"
	<center><img src="https://sharelatex-wiki-cdn-671420.c.cdn77.org/learn-scripts/images/1/1b/Beamer-titlepageUpdated.png" width="85%"></center>

### 2.目录页

在这里添加目录变得无比的简单，只需要用论文中类似的写法即可：

```latex
\begin{frame}
\frametitle{Table of Contents}
\tableofcontents
\end{frame}
```

如果需要在每一个section的前面加一个目录显示，只高亮当前章节，也非常的简单，只需要在 __导言区__ 添加如下内容：

=== "代码"

    ```latex
    % 在每一个section的开头显示目录
    \AtBeginSection[] 
    {
      \begin{frame}
        \frametitle{Table of Contents}
        \tableofcontents[currentsection]
      \end{frame}
    }
    ```
=== "效果图"

	<center><img src="https://sharelatex-wiki-cdn-671420.c.cdn77.org/learn-scripts/images/1/17/BeamerEx3Overleaf.png" width="85%"></center>

### 3. 简单的暂停效果

支持两种写法：

=== "普通"
	```latex
    \begin{frame}
    \frametitle{Sample frame title}
    This is a text in second frame. 
    For the sake of showing an example.

    \begin{itemize}
     \item Text visible on slide 1 \pause
     \item Text visible on slide 2 \pause
     \item Text visible on slide 3 \pause
     \item Text visible on slide 4
    \end{itemize}
    \end{frame}
    ```
=== "进阶"
	```latex
    \begin{frame}
    \frametitle{Sample frame title}
    This is a text in second frame. 
    For the sake of showing an example.

    \begin{itemize}
     \item<1-> Text visible on slide 1
     \item<2-> Text visible on slide 2
     \item<3> Text visible on slide 3
     \item<4-> Text visible on slide 4
    \end{itemize}
    \end{frame}
    ```

第二种写法允许进行更细致的操作，例如`<2->`表明这一内容从第二页幻灯片开始，持续到最后一页

### 4. 好看的文字块（用来展示定理、定义、引理等）

=== "代码"

    ```latex
    \begin{frame}
    \frametitle{Sample frame title}
    
    In this slide, some important text will be
    \alert{highlighted} because it's important.
    Please, don't abuse it.
    
    \begin{block}{Remark}
    Sample text
    \end{block}
    
    \begin{alertblock}{Important theorem}
    Sample text in red box
    \end{alertblock}
    
    \begin{examples}
    Sample text in green box. The title of the block is ``Examples".
    \end{examples}
    \end{frame}
    ```
=== "效果图"

	<center><img src="https://sharelatex-wiki-cdn-671420.c.cdn77.org/learn-scripts/images/2/2f/BeamerHighlights.png" width="85%"></center>

### 5. 修改字体

字号：修改方法与论文中`normalsize`的修改方法一致，例如：

```latex
\documentclass[17pt]{beamer}
```

beamer支持的字体大小有限，仅有8、9、10、11、12、14、17、20pt，默认为11pt

字体：使用`\usefonttheme{}`来使用默认的字体主题（包括`structurebold`, `structurebolditalic`, `structuresmallcapsserif`, `structureitalicsserif`, `serif`,`default`），或者调用系统中的字体宏包。

### 6. 分栏

使用`column`环境：
=== "代码"
    ```latex
    \begin{frame}
    \frametitle{Two-column slide}
    \begin{columns}
    \column{0.5\textwidth}
    This is a text in first column.
    $$E=mc^2$$
    \begin{itemize}
    \item First item
    \item Second item
    \end{itemize}

    \column{0.5\textwidth}
    This text will be in the second column
    and on a second thoughts, this is a nice looking
    layout in some cases.
    \end{columns}
    \end{frame}
    ```
=== "效果图"

	<center><img src="https://s3.uuu.ovh/imgs/2022/12/01/e8fd28993b79928b.png" width="85%"></center>

## 3. 推荐一个主题

```latex
\usetheme{Madrid}
\usecolortheme{default}
```


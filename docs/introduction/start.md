# Getting Started

本网站全部基于MkDocs Material主题构建，下面是本网站的部署与配置教程。

如果遇到解决不了的问题，请参考Material主题的[官方说明页](https://squidfunk.github.io/mkdocs-material/)

## 1. 准备工作

首先确保安装了python并已添加至环境变量，运行下面的命令：

```bash title="安装"
pip install mkdocs-material
```

!!! note "注意"
	这一命令会同时安装相关的所有依赖包，安装时间较长，建议将pip提前更换至国内镜像源。

在希望保存网站根目录的地方执行命令：

```bash
mkdocs new project_name
```

其中`project_name`自行更改，建议要简单好记，因为后边会用到。

如果希望部署到github-pages，请在github上新建一个repo，名称和`project_name`保持一致，以备后续使用。

## 2. 基本配置

MkDocs的全部配置基于修改`mkdocs.yml`文件

### 2.1 添加页面

MkDocs的页面全部基于Markdown编写，如果要让它们显示在网站中，需要修改`nav`。语法如下：

```yaml
nav:
  - 介绍: 
      - 1.简介: index.md
      - 2.如何部署: introduction/start.md
      - 3.原生欢迎页: introduction/mkdocs.md
  - 一级目录:
      - 文章1: knowledge/latex.md
      - 文章2: knowledge/markdown.md
```

其中路径是`docs`文件夹中的相对路径，导航允许多重嵌套，一般建议不超过两层。

### 2.2 一些参数


``` yaml
theme:
  features:
    - navigation.tabs
```

=== "With tabs"

    [![Navigation tabs enabled]][Navigation tabs enabled]

=== "Without"

    [![Navigation tabs disabled]][Navigation tabs disabled]

## 3.部署到github

## 4.进阶操作

[Navigation tabs enabled]: https://raw.githubusercontent.com/squidfunk/mkdocs-material/master/docs/assets/screenshots/navigation-tabs.png
[Navigation tabs disabled]: https://raw.githubusercontent.com/squidfunk/mkdocs-material/master/docs/assets/screenshots/navigation.png


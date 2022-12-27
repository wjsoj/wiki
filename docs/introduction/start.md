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

下文某些选项的配置可能会需要额外的python库，目前本网站使用的库如下（关于每个库具体的用处会在下文提到）：

```bash
pip install mkdocs-glightbox mkdocs-git-revision-date-localized-plugin mkdocs-minify-plugin
```

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

## 3.部署到github

目前有两种部署方案：

### 3.1 使用gh-deploy

这种方法非常简便，使用`gh-deploy`会在github上的同名仓库下自动创建gh-pages分支并开启github pages服务，并把本地编译生成的静态页面文件上传到github pages中，只需要在项目根目录下执行命令：

```bash
mkdocs gh-deploy
```

### 3.2 使用github actions

如果你希望将自己的项目公开在github上（这里指公开自己的项目而不仅仅是生成的静态页面文件），请务必使用这种方法（虽然很麻烦）

**第一步：** 在项目根目录下新建`.github/workflows/ci.yml`文件

**第二步：** 修改`ci.yml`文件

```yaml title="ci.yml"
name: ci 
on:
  push:
    branches:
      - master 
      - main
permissions:
  contents: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-python@v4
        with:
          python-version: 3.x
      - run: pip install mkdocs-material  # (1)
      - run: mkdocs gh-deploy --force
```

1. 请根据实际需要增加需要安装的库（否则会报错）

!!!note "注意"
	`ci.yml`文件中的`pip install`命令后面的库要根据自己的实际需要进行增加，这里只列出了最简的配置方案

**第三步：** 使用`git`命令将自己的项目push到github上

这里简单展示`git`基础的一键三连操作：

```bash
git add . # (1)
git commit -m "在这里写自己这次提交都干了些什么"
git push
```

1. 这里`.`表示将所有的文件都更新，如果只更新部分文件，请在这里指定文件的名称

如果需要检查哪些文件发生了改动：
```bash
git pull
git status
```

!!!warning "注意"
	一般来说在push之前都要先pull一下，这是在团队协作的项目中的基本礼貌。一旦别人修改了部分代码却没有告诉你，此时如果你的本地没有同步这一更改就直接push，可能会酿成无法挽回的后果。（但是目前本网站不需要大家一起push，所以也就无所谓了）

**补充：** 鉴于github在某些地方（特指某大学宿舍）访问速度特别慢，经常会出现`fatal: Could not read from remote repository.`这样的错误，如果你不注意，很容易轻信了网上的解释尝试更新SSH key，其实这完全是网络原因造成的。建议使用加速器或者全局代理之后，修改本地项目隐藏文件夹`.git`里的config文件，把url从SSH地址的形式修改成`https`链接的形式（例如：`https://github.com/wjsoj/wiki.git`），然后问题即可解决。

这是因为当代理处于开启状态时，git默认是不走代理端口的，使用`https`协议可以强行把流量给到git上。

!!! info "如何避免提交时写提交信息？"
	像我这样的懒人经常不愿意写`commit -m "message"`后边的内容，但不写提交信息会导致报错，为了避免报错要使用`--allow-empty-message`参数。但如果不指定-m后的内容，git会在提交前打开编辑器让你检查提交的文件，为了跳过这一步骤要使用`--no-edit`参数
	为了简化上述流程，可以自定义一个命令的别名，比如用`qcommit`指代上述命令，以后提交就直接执行`qcommit`即可：
	```bash
	git config --global alias.qcommit "commit --allow-empty-message --no-edit"
	```

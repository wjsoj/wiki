# 常见包管理器的使用

## 1. pip

### 1.1 换源

查看源：

```bash
pip config list
```

换源：

```ini title="pip.ini"
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple/
[install]
trusted-host = https://pypi.tuna.tsinghua.edu.cn
```

文件`pip.ini`位于`C:\Users\Your Name\AppData\Roaming\pip`位置，你也可以使用命令：

```bach
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple/
```

来自动生成

### 1.2 更新

```bash
python.exe -m pip install --upgrade pip
```

### 1.3 更新已经安装的包

查看有升级的包：

```bash
pip list --outdated
```

更新某个包：

```bash
pip install Package_Name -U
```

更新全部包（Windows下借助`pip-review`）：

```bash
pip install pip-review
pip-review --local --interactive # 更新所有包，但会询问更新哪些包
pip-review --auto # 更新所有包
```

当然也可以自己写一个脚本：

```python
import os
for line in os.popen('pip list').readlines():
    os.system('pip install --upgrade ' + line.split(' ')[0])
```




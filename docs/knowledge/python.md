# 关于Python的一些语法补充

## 1. 输入输出

### 1.1 多数据输入

```python
a = [int(x) for x in input().split()]
u, v, w = [int(x) for x in input().split()]
a = map(int,input().split())
```

### 1.2 不定行数输入

```python
while True:
    try:
        s = input()
    except EOFError:
        break
```

### 1.3 格式化输出

```python
# 控制结尾样式，默认是换行
print(a[0], a[1], end='')
# 控制间隔样式 默认空格
print(a[0], a[1], sep=', ')
# 数据格式化
print('{:.2f}'.format(f))
print('{:b}'.format(f))
print('{:,}'.format(2147423647)) #千位分隔符
# b d o x 分别对应以 2 10 8 16 进制输出
# 也可以直接在字符串内指定 %和{:}等价
print('%.4f - %f = %d' % (3.1415926, 0.1416, 3))
# 注意中间用 % 分隔
# 其中%f默认6位小数
```

### 1.4 可能出现的邻接表建图操作

```python
u, v, w = map(list, zip(*mat))   
# *将 mat 解包得到里层的多个列表
# zip() 将多个列表中对应元素聚合成元组，得到一个迭代器
# map(list, iterable) 将序列中的元素（这里为元组）转成列表
```

### 1.5 文件输入输出

```python
with open('in.txt') as f:
    N = int(f.readline())  # 读入第一行的 N
    a = [[int(x) for x in f.readline().split()] for i in range(N)]

with open('out.txt', 'w') as f:
    f.write('1\n')
```

### 1.6 转义字符

```python
# r会忽略字符串中出现的转义符号
print(r'忽略这个\n换行符')
# \ 会忽略换行，可以用来定义超长字符串
a = """
some\
content
"""
```

### 1.7 输出优化

```python
# 实测比逐行输出理论上快2-3倍
print(' '.join(a_list))
```

### 1.8 字符串前的字母

1. f 在字符串中更方便德=地引用变量，也可以是表达式

```python
a = 10
print(f'some {a} word')
```

2. r 去除转义字符（正则表达式模块常用）

```python
import re
re.match(r'\some content\n')
```

3. b 转换成bytes（网络编程常用）

```python
response = b'<h1>Hello World</h1>'
str.encode('utf-8') # 转成bytes
bytes.decode('utf-8') # 转成str
```

4. u 以Unicode编码（中文字符串常用）

### 1.9 填充与对齐

前面写要填充的字符，后面是总长度

```python
# ^ 居中
print('{:^10}'.format('1881')) #'   1881   '
# < 左对齐
print('{A:<10}'.format('1881'))#'1881AAAAAA'
# > 右对齐
print('{A:>10}'.format('1881'))#'AAAAAA1881'
```

## 2. 字符串操作

### 2.1 长字符串定义

```python
text = '''
some content
'''
```

### 2.2 常用函数

```python
s = 'some content'
len(s)
s.count()
s.find()
s.lower()
s.upper()
s.swapcase()
```

### 2.3 字符与ASCII互转

```python
# 字符转ASCII
ord()
# ASCII转字符
chr()
```

## 3. list操作

### 3.1 常见函数

```python
a= []
a.append()
a.pop()
a.insert(pos,val)
a.remove(val)
len(a)
a.reverse()
b = sorted(a)
a.sort(reverse=True)
a.count(val)
a.index(val) # return pos
a.clear()
```

### 3.2 开二维数组

```python
# 注意python深拷贝与浅拷贝的区别
# 常用方法
a = [[0]*105 for i in range(n)]
```

**注意：** 对二维数组单独的排序优先按第0项排序，与后面的项无关，只有第0项相同才会考虑后面的项

### 3.3 列表切片

```python
del a[l:r]
if val in a:
    # 不能用来检测子序列，只能检测一个值，字符串则不同
```

## 4. 其它数据类型

### 4.1 dict

### 4.2 set

创建方式：大括号（与字典区别）、`set`函数

```python
s = {'a','b'}
a = set(other_element)
```

其他操作

```python
# 添加元素
a.add(value)
a.update(value)
# 删除
a.remove(value)
a.pop() # 随机删除
# 清空
a.clear()
# 复制
a.copy()
# 差集
a.difference_update(b)
# 并集
a.union(b)
# 交集
a.intersection(b)
# 子集检测
a.issubset(b)
# 运算符表示
a - b # 差集
a | b # 并集
a & b # 交集
a ^ b # 并集减去交集
```



## 5. 常见的一些骚操作

### 5.1 内建快速幂

```python
pow(base,exp,mod)
```

### 5.2 判断闰年&今天星期几

```python
import calendar
# 是否为闰年
calendar.isleap(year)
# 返回某一天是星期几
calendar.weekday(year,month,day)
```

### 5.3 判断完全平方数

```python
a**0.5 % 1 ==0
```

### 5.4 排列组合

```python
import math
math.comb(n,m)
math.perm(n,m)
```

### 5.5 for循环步长控制

```python
for i in range(0,n,step):
```

### 5.6 decimal——python中的高精度

**建议：** 使用`from ... import *`的形式替代`import ...`

可以避免一些奇怪的Bug

```python
from decimal import Decimal,getcontext
# 设置有效数字个数，注意是 有效数字
getcontext().prec = 6
# 修改四舍五入的规则
getcontext().rounding = ROUND_UP
# Decimal默认只能传整型或者字符串
a = Decimal('5555.55')
# 如果非要从浮点数转
Decimal.from_float(5.5)
# 四舍五入保留几位小数，例如保留两位
Decimal('3.1415926').quantize(Decimal('0.00'))
```

### 5.7 自己修改排序规则

```python
# 指定元素排序
a.sort(key=lambda x:(x[0],x[1]))
# 例如按照二维数组两个数的比值排序
import functools
a.sort(key=functools.cmp_to_key(mycmp))
def mycmp(x,y):
    if x[0]/x[1] > y[0]/y[1]:
        return -1
    elif x[0]/x[1] < y[0]/y[1]:
        return 1
    else:
        return 0
```

### 5.8 自己写快速排序

```python
def partition(arr,low,high): 
    i = ( low-1 )
    pivot = arr[high]
    for j in range(low , high):
        if   arr[j] <= pivot: 
            i = i+1 
            arr[i],arr[j] = arr[j],arr[i]
    arr[i+1],arr[high] = arr[high],arr[i+1]
    return ( i+1 )

def quickSort(arr,low,high): 
    if low < high: 
        pi = partition(arr,low,high)
        quickSort(arr,low, pi-1) 
        quickSort(arr, pi+1, high)

quickSort(arr,0,n-1)
```

### 5.9 欧拉筛

```python linenums='1'
prime = []
isp = [1]*2010
isp [1]=0
def get_prime():
    nm = 2005
    for i in range(2,nm):
        if isp[i]:
            prime.append(i)
        for j in prime:
            if i*j>nm:
                break
            isp[i*j]=0
            if i%j==0:
                break
```

### 5.10 获取程序运行时间

```python
from time import perf_counter
st = perf_counter()
# 或者
time.time()
```

### 5.11 二分

```python
# 向下找
def binary_search(low,high):
    while low<high:
        mid = (low+high)//2
        if can(mid):
            high = mid
        else:
            low = mid+1
    return low

# 向上找
def binary_search(low,high):
	while high>low:
    	mid = ceil((high+low)/2)
    	if can(mid):
        	low = mid
    	else:
        	high = mid-1
    return high
```

### 5.12 优先队列

```python
import heapq
# 把列表转成Priority queue
heapq.heapify(pq)
# 取出x，默认是最小的
x = heapq.heappop(pq)
# 加入x
heapq.heappush(pq,x)
```

### 5.13 exec()和eval()

`exec()`：执行复杂代码，不返回任何值

`eval()`：执行一行代码并返回运算值

### 5.14 Operator模块

用来过滤：

```python
from operator import itemgetter
a =[('alpha',1),('delta',0),('gamma',100)]
a.sort(key=itemgetter(1))
# 仅对第二个参数进行排序
```

用来加速运算（没啥用）

```python
add()
truediv()
floordiv()
pow()
mod()
mul()
```

### 5.15 reduce()

对列表元素进行逐一进行操作

用例：

```python title="求和"
from functools import reduce
def add(x, y) :
    return x + y
sum1 = reduce(add, [1,2,3,4,5])   # 计算列表和：1+2+3+4+5
sum2 = reduce(lambda x, y: x+y, [1,2,3,4,5])  # 使用 lambda 匿名函数
print(sum1)
print(sum2)
```

### 5.16 排列组合

```python
from itertools import combinations,permutations
permutations(迭代对象,元素个数)
combinations(lst,n)
```

### 5.17 类（实现C++中结构体）

```python
# 定义
class platform:
    def __init__(self,u,v,w):
        self.l=u
        self.r=v
        self.h=w
# 排序
sort(key=lambda x:x.h,reverse=True)
# 初始化
for i in range(1,n+1):
    u,v,w = [int(x) for x in input().split()]
    pl[i]=platform(u,v,w)
```

### 5.18 BFS

```python
vis = {(1,1)} # (1)
queue = [(1,1,0)]
dx=[0,0,1,-1]
dy=[1,-1,0,0]
while queue:
    x,y,ans=queue.pop(0)
    if mp[x][y]==1:
        print(ans)
        exit()
    for i in range(4):
        nx =x+dx[i];ny=y+dy[i]
        if (nx,ny) not in vis and mp[nx][ny]!=2:
            queue.append((nx,ny,ans+1))
            vis.add((nx,ny))
```

1. 集合的查询速度更快

### 5.19 dp最长上升子序列、最长下降子序列

```python
dp = [1]*1005
ddp = [1]*1005
for i in range(n):
    for j in range(i+1,n):
        if h[j]>h[i]:
            dp[j]=max(dp[j],dp[i]+1)
for i in range(n-1,-1,-1):
    for j in range(i-1,-1,-1):
        if h[j]>h[i]:
            ddp[j]=max(ddp[j],ddp[i]+1)
```

### 5.20 其他操作

```python
# 进制转化
bin(dex)
oct(dex)
hex(dex)
int(x,base) # base进制转十进制
# ASCII
chr(int)
ord(char)
# all & any
all([1,0,2,3])=False
any([0,0,1])=True
bool([0])=True
bool([])=False
divmod(10,3)=(3,1)
```



## 6. 其他一些优化技巧

### 6.1 关于输出

把答案存起来用`print('\n'.join())`比逐行输出快好多

### 6.2 关于标记元素是否被访问过

速度 直接开vis数组 > 字典`i in dic.keys()` > 元素`in list`

### 6.3 遍历列表元素

`i in list`比`i in range(n)`快

### 6.4 for循环同时迭代两个元素

注意必须用`zip`

```python
[[int(x),i] for x,i in zip(input().split(),range(1,n+1))]
```

### 6.5 递归过程自动记忆化

```python
from functools import lru_cache
@ lru_cache(maxsize=n)
def function():
    # 这里的递归中间过程会被保留在缓存中
```


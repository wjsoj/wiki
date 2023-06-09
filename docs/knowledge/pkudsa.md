---
created_time: 2023-06-09 10:14:48
modified_time: 2023-06-09 13:34:29
author: WJS
github: wjsoj
---
# 数据结构与算法

## 1. 概述

### 1.1 抽象“计算”概念

**基于有穷观点的能行方法**

1. 由有限数量的明确有限指令构成
2. 指令在有限步骤后终止
3. 指令每次执行总能得到唯一结果
4. 原则上可以由人单独使用纸笔完成，而不需要其他辅助
5. 每条指令可以机械地被精确执行，而不需要智慧或灵感

**可以通过计算解决的问题：**

分类问题、证明问题、过程问题（本课的主要内容）

**突破计算机极限：**

超大规模分布式计算、光子计算、DNA计算、量子计算、众包

### 1.2 抽象和实现

抽象：逻辑层面，调用接口，得到答案

实现：物理层面

算法+数据结构 = 程序

数据抽象：ADT（Abstract Data Type）

## 2. 算法分析

### 2.1 变位词判断问题

逐个比较：$ n^2 $

排序后再比较：$ nlogn $

暴力枚举法：$ n! $

计数比较：$ n $

### 2.2 基本数据类型的性能

| operation | list | dict |
| --------- | ---- | ---- |
| 索引      | 1    | 1    |
| 移除(0)   | 1    | 1    |
| 移除(n)   | n    | 1    |
| 添加      | 1    | 1    |
| 查找      | n    | 1    |

## 3. 基本线性结构

### 3.1.1 栈（Stack）

后进先出 LIFO

```python title="代码实现"
# ADT Stack class
class Stack:
    def __init__(self):
        self._stack = []

    def push(self, item):
        self._stack.append(item)

    def pop(self):
        return self._stack.pop()

    def peek(self):
        return self._stack[-1]

    def is_empty(self):
        return len(self._stack) == 0

    def size(self):
        return len(self._stack)

    def __str__(self):
        return str(self._stack)
```

#### 案例：通用括号匹配算法

```python
def par_checker(symbol_string):
    s = Stack()
    balanced = True
    index = 0
    while index < len(symbol_string) and balanced:
        symbol = symbol_string[index]
        if symbol in '([{':
            s.push(symbol)
        else:
            if s.is_empty():
                balanced = False
            else:
                top = s.pop()
                if not matches(top, symbol):
                    balanced = False
        index += 1
    if balanced and s.is_empty():
        return True
    else:
        return False

def matches(open, close):
    opens = '([{'
    closes = ')]}'
    return opens.index(open) == closes.index(close)
```

#### 案例：十进制转换到十六进制以下任意进制

```python
def base_converter(dec_number, base):
    digits = '0123456789ABCDEF'
    rem_stack = Stack()
    while dec_number > 0:
        rem = dec_number % base
        rem_stack.push(rem)
        dec_number = dec_number // base
    new_string = ''
    while not rem_stack.is_empty():
        new_string = new_string + digits[rem_stack.pop()]
    return new_string
```

#### 案例：通用的中缀表达式转后缀表达式算法

```python
def infix_to_postfix(infix_expr):
    prec = {'*': 3, '/': 3, '+': 2, '-': 2, '(': 1}  # 操作符优先级
    op_stack = Stack()  # 操作符栈
    postfix_list = []  # 后缀表达式列表
    token_list = infix_expr.split()  # 中缀表达式列表

    for token in token_list:
        if token in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' or token in '0123456789':
            postfix_list.append(token)
        elif token == '(':
            op_stack.push(token)
        elif token == ')':
            top_token = op_stack.pop()
            while top_token != '(':
                postfix_list.append(top_token)
                top_token = op_stack.pop()
        else:
            while (not op_stack.is_empty()) and (prec[op_stack.peek()] >= prec[token]):
                postfix_list.append(op_stack.pop())
            op_stack.push(token)

    while not op_stack.is_empty():
        postfix_list.append(op_stack.pop())

    return ' '.join(postfix_list)
```

#### 案例：后缀表达式求值

```python
def postfix_eval(postfix_expr):
    operand_stack = Stack()
    token_list = postfix_expr.split()

    for token in token_list:
        if token in "0123456789":
            operand_stack.push(int(token))
        else:
            # 注意操作数的顺序
            operand2 = operand_stack.pop()
            operand1 = operand_stack.pop()
            result = do_math(token, operand1, operand2)
            operand_stack.push(result)

    return operand_stack.pop()

def do_math(op, op1, op2):
    if op == "*":
        return op1 * op2
    elif op == "/":
        return op1 / op2
    elif op == "+":
        return op1 + op2
    else:
        return op1 - op2
```

### 3.1.2 队列（Queue）

先进先出 FIFO

```python title="代码实现"
class Queue:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def enqueue(self, item): # O(n)
        self.items.insert(0,item)

    def dequeue(self): # O(1)
        return self.items.pop()

    def size(self):
        return len(self.items)
```

#### 案例：“热土豆”问题

```python
def hotPotato(namelist, num):
    simqueue = Queue()
    for name in namelist:
        simqueue.enqueue(name)
    while simqueue.size() > 1:
        for i in range(num): # 传递num次
            simqueue.enqueue(simqueue.dequeue())
        simqueue.dequeue() # 传递num次后，将最后一个人出列
    return simqueue.dequeue() # 返回最后一个人
```

#### 案例：打印任务模拟

```python
class Printer:
    def __init__(self, ppm):
        self.pagerate = ppm # 打印速度
        self.currentTask = None # 当前任务
        self.timeRemaining = 0 # 当前任务剩余时间

    def tick(self): # 打印1秒
        if self.currentTask != None:
            self.timeRemaining = self.timeRemaining - 1
            if self.timeRemaining <= 0: # 当前任务打印完毕
                self.currentTask = None

    def busy(self): # 打印机是否繁忙
        if self.currentTask != None:
            return True
        else:
            return False

    def startNext(self, newtask): # 开始新任务
        self.currentTask = newtask
        self.timeRemaining = newtask.getPages() * 60/self.pagerate # 计算打印时间

class Task:
    def __init__(self, time):
        self.timestamp = time # 创建时间
        self.pages = random.randrange(1,21) # 随机生成打印页数

    def getStamp(self): # 返回创建时间
        return self.timestamp

    def getPages(self): # 返回打印页数
        return self.pages

    def waitTime(self, currenttime): # 返回等待时间
        return currenttime - self.timestamp

def newPrintTask(): # 生成新任务
    num = random.randrange(1,181)
    if num == 180:
        return True
    else:
        return False

def simulation(numSeconds, pagesPerMinute):
    labprinter = Printer(pagesPerMinute) # 创建打印机
    printQueue = Queue() # 创建打印队列
    waitingtimes = [] # 等待时间列表

    for currentSecond in range(numSeconds): # 模拟numSeconds秒
        if newPrintTask(): # 生成新任务
            task = Task(currentSecond) # 创建新任务
            printQueue.enqueue(task) # 将新任务加入打印队列

        if (not labprinter.busy()) and (not printQueue.isEmpty()): # 打印机空闲且队列不为空
            nexttask = printQueue.dequeue() # 取出队首任务
            waitingtimes.append(nexttask.waitTime(currentSecond)) # 计算等待时间
            labprinter.startNext(nexttask) # 打印机开始打印任务

        labprinter.tick() # 打印机打印1秒

    averageWait = sum(waitingtimes)/len(waitingtimes) # 计算平均等待时间
    print("Average Wait %6.2f secs %3d tasks remaining."%(averageWait,printQueue.size()))
```

### 3.1.3 双端队列（Deque）

注意维护一致性，以及队首队尾设置带来的复杂度区别

```python title="代码实现"
class Deque:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def addFront(self, item): # O(n)
        self.items.insert(0, item)

    def addRear(self, item): # O(1)
        self.items.append(item)

    def removeFront(self): # O(n)
        return self.items.pop(0)

    def removeRear(self): # O(1)
        return self.items.pop()

    def size(self):
        return len(self.items)
```

#### 案例：回文词判定

```python
def palchecker(aString):
    chardeque = Deque()
    for ch in aString:
        chardeque.addRear(ch)

    stillEqual = True
    while chardeque.size() > 1 and stillEqual:
        first = chardeque.removeFront()
        last = chardeque.removeRear()
        if first != last:
            stillEqual = False

    return stillEqual
```

### 3.1.4 无序表的链表实现

链表：存储不连续，但需顺序存取

```python
class Node:
    def __init__(self, initdata):
        self.data = initdata
        self.next = None

    def get_data(self):
        return self.data
    
    def get_next(self):
        return self.next
    
    def set_data(self, newdata):
        self.data = newdata
    
    def set_next(self, newnext):
        self.next = newnext

class UnorderedList:
    def __init__(self):
        self.head = None
    
    def is_empty(self):
        return self.head == None
    
    def add(self, item):
        temp = Node(item)
        temp.set_next(self.head)
        self.head = temp
    
    def size(self):
        current = self.head
        count = 0
        while current != None:
            count = count +1
            current = current.get_next()
        return count
    
    def search(self, item):
        current = self.head
        found = False
        while current != None and not found: # 如果当前节点不为空且没有找到
            if current.get_data() == item:
                found = True
            else:
                current = current.get_next()
        return found
    
    def remove(self, item):
        current = self.head
        previous = None
        found = False
        while not found: # 如果没有找到
            if current.get_data() == item:
                found = True
            else:
                previous = current # 保存当前节点
                current = current.get_next() # 移动到下一个节点
        if previous == None: # 如果当前节点是头节点
            self.head = current.get_next() # 头节点指向下一个节点
        else:
            previous.set_next(current.get_next()) # 如果当前节点不是头节点，将前一个节点的next指向当前节点的next
```

### 3.1.5 有序表的链表实现

注意修改`add`和`search`方法

```python
class Node:
    def __init__(self, initdata):
        self.data = initdata
        self.next = None

    def get_data(self):
        return self.data
    
    def get_next(self):
        return self.next
    
    def set_data(self, newdata):
        self.data = newdata
    
    def set_next(self, newnext):
        self.next = newnext

class OrderedList:
    def __init__(self):
        self.head = None
    
    def is_empty(self):
        return self.head == None
    
    def add(self, item):
        current = self.head
        previous = None
        stop = False

        while current != None and not stop: # 找到第一个比item大的数
            if current.get_data() > item:
                stop = True
            else:
                previous = current
                current = current.get_next()
        
        temp = Node(item) # 创建新节点
        if previous == None: # 如果是空表或者item比第一个数小
            temp.set_next(self.head)
            self.head = temp
        else:
            # 注意顺序
            temp.set_next(current)
            previous.set_next(temp)
    
    def size(self):
        current = self.head
        count = 0
        while current != None: # 遍历链表
            count += 1
            current = current.get_next()
        return count
    
    def search(self, item):
        current = self.head
        found = False
        stop = False

        while current != None and not found and not stop: # 遍历链表
            if current.get_data() == item:
                found = True
            else:
                if current.get_data() > item: # 如果找到比item大的数，停止遍历
                    stop = True
                else:
                    current = current.get_next()
        
        return found
    
    def remove(self, item):
        current = self.head
        previous = None
        found = False

        while not found: # 遍历链表
            if current.get_data() == item:
                found = True
            else:
                previous = current
                current = current.get_next()
        
        if previous == None: # 如果是第一个数
            self.head = current.get_next()
        else:
            previous.set_next(current.get_next())
```

## 4. 递归

### 4.1 递归三定律

1. 基本结束条件
2. 向结束条件演进（减小问题规模）
3. 调用自身（减小规模后是相同问题）

### 4.2 应用

#### 进制转换

```python
def toStr(n, base):
    convertString = "0123456789ABCDEF"
    if n < base:
        return convertString[n]
    else:
        return toStr(n // base, base) + convertString[n % base]
```

#### 汉诺塔

```python
def moveTower(height, fromPole, toPole, withPole):
    if height >= 1:
        moveTower(height - 1, fromPole, withPole, toPole)
        moveDisk(height, fromPole, toPole)
        moveTower(height - 1, withPole, toPole, fromPole)

def moveDisk(disk, fromPole, toPole):
    print("moving disk[{}] from {} to {}".format(disk, fromPole, toPole))
```

#### 硬币找零问题（记忆化）

```python
def recDC(coinValueList, change, knownResults):
    minCoins = change
    if change in coinValueList:
        knownResults[change] = 1
        return 1
    elif knownResults[change] > 0:
        return knownResults[change]
    else:
        for i in [c for c in coinValueList if c <= change]:
            numCoins = 1 + recDC(coinValueList, change-i, knownResults)
            if numCoins < minCoins:
                minCoins = numCoins
                knownResults[change] = minCoins
    return minCoins
```

#### 动态规划解法

```python
def dpMakeChange(coinValueList,change,minCoins):
    for cents in range(change+1):
        coinCount = cents
        for j in [c for c in coinValueList if c<=cents]:
            if minCoins[cents-j]+1 < coinCount:
                coinCount = minCoins[cents-j]+1
        minCoins[cents] = coinCount
    return minCoins[change]
```


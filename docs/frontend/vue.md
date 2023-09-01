# Vue速查（组合式API）

## 响应式数据

使用`ref()`函数，在代码中获取值必须要使用.value

```vue
<script setup>
	import { ref } from 'vue'
</script>
```

## 渲染数据源

### v-text

纯文本，空元素

```vue
<script setup>
    import { reactive } from 'vue'

    let student = reactive({
        name: 'Jack',
        desc: '<h3>我是来自中国的小朋友！</h3>'
    })
</script>

<template>
  <div v-text="student.name"></div>
</template>
```

### 插值表达式

纯文本方式渲染，使用简便

### v-html

能够解析html表达式

## v-model双向绑定（常用于输入数据）

```vue
<script setup>
import { ref } from 'vue' 

let inputText = ref('ABC')  // 单行文本框
let message = ref('本次更新有以下几点：……') // 多行文本框
let open = ref(true) // 开灯（复选框）
let determine = ref('不确定') // 是否确定（复选框）
let likes = ref(['YMQ']) // 兴趣爱好（复选框）
let sex = ref('woman') // 性别（单选按钮）
let level = ref('B') //  // 证书等级（单选下拉框）
let city = ref(['苏C', '苏B']) // 去过的城市（多选下拉框）
</script>

<template>

    <!-- 单行文本框 -->
    <input type="text" v-model="inputText">

    <hr>
    <!-- 多行文本框 -->
    <textarea v-model="message"></textarea>

    <hr>
    <!-- 默认情况下，复选框的值：true/false -->
    <input type="checkbox" v-model="open"> 灯

    <hr>
    <!-- 自定义复选框值： true-value/false-value -->
    <input type="checkbox" true-value="确定" false-value="不确定" v-model="determine"> 是否确定

    <hr>
    <input type="checkbox" value="LQ" v-model="likes"> 篮球
    <input type="checkbox" value="ZQ" v-model="likes"> 足球
    <input type="checkbox" value="YMQ" v-model="likes"> 羽毛球
    <input type="checkbox" value="PPQ" v-model="likes"> 乒乓球

    <hr>
    <input type="radio" value="man" v-model="sex"> 男
    <input type="radio" value="woman" v-model="sex"> 女

    <hr>
    证书等级：
    <select v-model="level">
        <option value="C">初级</option>
        <option value="B">中级</option>
        <option value="A">高级</option>
    </select>

    <hr>
    去过的城市：
    <select multiple v-model="city">
        <option value="苏A">南京</option>
        <option value="苏B">无锡</option>
        <option value="苏C">徐州</option>
        <option value="苏D">常州</option>
    </select>

</template>
```

#### 修饰符

![img](https://cdn.nlark.com/yuque/0/2022/png/32552977/1663041025682-01dccf69-42fd-41e9-9ea9-27b960e83bb9.png?x-oss-process=image%2Fresize%2Cw_847%2Climit_0)

## v-bind : 属性绑定

支持单个属性绑定：

```vue
<img :src="picture.src" :width="picture.width">
```

或者用对象同时绑定多个属性：

```vue
<script setup>
import {reactive} from 'vue'
let attrs = reactive({
    class: 'error',
    id: 'borderBlue'
})
</script>

<template>
    <!-- 直接使用 v-bind 来为元素绑定多个属性及其值 -->
    <button v-bind="attrs">我是一个普通的按钮</button>
</template>

<style>
    .error {
        background-color: rgb(167, 58, 58);
        color: white;
    }
    #borderBlue {
        border: 2px solid rgb(44, 67, 167);
    }
</style>
```

## 条件渲染

### v-if，v-else，v-else-if

决定该元素是否被渲染，条件为js表达式

### v-show

通过改变元素的display CSS属性实现条件渲染

## v-on @ 事件绑定

### 事件修饰符

| **事件修饰符** | **说明**                                                     |
| -------------- | ------------------------------------------------------------ |
| `**.prevent**` | **阻止默认行为**（例如超链接标签）                           |
| `**.stop**`    | **阻止事件冒泡**（当监听器出现嵌套时父级事件不会被执行）     |
| `**.capture**` | **以捕获模式触发当前的事件处理函数**（当冒泡时优先执行当前元素的事件，变冒泡排序为从外向内捕获） |
| `**.once**`    | **绑定的事件只触发1次**                                      |
| `**.self**`    | **只有在**`**event.target**`**是当前元素自身时触发事件处理函数**（当出现元素嵌套时不监听子元素） |
| `**.passive**` | **向浏览器表明了不想阻止事件的默认行为**（即使在事件函数中执行了`.preventDefault()`）函数 |

### 按键修饰符（`@keydown.`）

按键别名：`.enter`、`.tab`、`.esc`、`.space`、`.up`、`.down`、`.left`、`.right`、`.delete` (捕获`Delete`和`Backspace`两个按键)

系统修饰符：`.ctrl`、`.alt`、`.shift`、`.meta`

准确的修饰符（只按下某些键）：`.exact`

### 鼠标修饰符（区分`@click.`和`@mousedown`）

鼠标按键修饰符：`.left`、`.right`、`.middle`

## v-for列表渲染

### 数组

1. `in`前一个参数：`item in items` 
   `item`：值 （允许解构对象要迭代的对象）
   `items`：需要循环的数组
2. `in`前两个参数：`(value, index) in items` 
   `value`：值
   `index`：索引 
   `items`：需要循环的数组

### 对象

1. `in`前一个参数：`value in object` 
   `value`：属性值 
   `items`：需要循环的对象
2. `in`前两个参数：`(value, name) in object` 
   `value`：属性值 
   `name`：键 
   `items`：需要循环的对象
3. `in`前三个参数：`(value, name, index) in object` 
   `value`：属性值 
   `name`：键 
   `index`：索引 
   `items`：需要循环的对象

### 使用key

Vue默认优先载入缓存来优化加载的性能，这会导致一部分节点不能被及时更新，所以需要添加key，使用方法为绑定属性

```vue
 <ul>
    <li v-for="sub in subject" :key="sub.id">
        <input type="checkbox">
        {{ sub }}
    </li>
</ul>
```

## 侦听器

注意侦听对象中的某一属性必须使用getter函数

```vue
<script setup>
watch(
    () => emp.salary,
    (newData, oldData) => {
        console.log('===== 员工薪资新旧值 =====')
        console.log(oldData)
        console.log(newData)
        console.log('-----------------------')
    }
)
</script>
```

侦听对象，建议直接监听或使用getter函数+深度侦听选项，但newData和oldData是同一个值

```vue
<script setup>
watch(
    () => region,
    // 如果嵌套属性值发生变化，并且配置深度侦听，会触发该回调函数，但是 newData, oldData 是相等的
    (newData, oldData) => {
        console.log('===== 区域信息新旧值 =====')
        console.log(oldData)
        console.log(newData)
        console.log('-----------------------')
    },
    // 深度侦听
    { deep: true }
)
</script>
```

停止侦听器：调用`watch()`返回的函数即可

## 计算属性

相当于简单的计算函数，但Vue为其优化了缓存策略和调用逻辑，使用computed生成的函数可以直接作为普通的变量使用

```vue
<script setup>
import { computed, ref } from 'vue'
let age = ref(20) // 年龄
// 计算属性：年龄阶段
let ageState = computed(() => {
    if (age.value < 18) {
        return '未成年'
    } else if (age.value < 35) {
        return '青年'
    } else if (age.value < 50) {
        return '中年'
    } else {
        return '老年'
    }
})
</script>

<template>
    年龄：<input type="number" v-model.lazy="age">
	<!-- 计算属性 -->
	<h3>年龄阶段（复杂）：{{ ageState }} </h3>
</template>
```

## 组件注册

### 全局（main.js）

```javascript
import { createApp } from 'vue'
import App from './App.vue'
// 1：引入需要被注册的组件
import Login from './components/Login.vue' 
const app = createApp(App)

// 2：全局注册组件
app.component('MLogin', Login)
app.mount('#app')
```

### 局部注册

```vue
<script setup>
// 1：引入需要注册的组件
import LoginVue from './components/Login.vue';
</script>

<template>
    <h3>登录系统</h3>
    <!-- 2：使用注册的组件 -->
    <LoginVue />
</template>
```

## 组件传值

### 父传子

字符串数组（只读）：

```vue
./components/test.vue
<script setup>
let propsData = defineProps(['title', 'error', 'flat'])
</script>
...
<template>
<test :title="text" :error="flag" :flat="flat"/>
</template>
```

对象（只读，拥有更丰富的校验功能）：

```vue
<script>
    defineProps({
        // 基础类型检查
        // （给出 `null` 和 `undefined` 值则会跳过任何类型检查）
        propA: Number,
        // 多种可能的类型
        propB: [String, Number],
        // 必传，且为 String 类型
        propC: {
            type: String,
            required: true
        },
        // Number 类型的默认值
        propD: {
            type: Number,
            default: 100
        },
        // 对象类型的默认值
        propE: {
            type: Object,
            // 对象或数组的默认值
            // 必须从一个工厂函数返回。
            // 该函数接收组件所接收到的原始 prop 作为参数。
            default(rawProps) {
                return { message: 'hello' }
            }
        },
        // 自定义类型校验函数
        propF: {
            validator(value) {
                // The value must match one of these strings
                return ['success', 'warning', 'danger'].includes(value)
            }
        },
        // 函数类型的默认值
        propG: {
            type: Function,
            // 不像对象或数组的默认，这不是一个工厂函数。这会是一个用来作为默认值的函数
            default() {
                return 'Default function'
            }
        }
    })
</script>
```

### 子传父

子组件向父组件传值是通过监听事件进行的

例子：

```vue title="子组件"
<script setup>
// 自定义事件
let emit = defineEmits({
    changeAge: null, // 无需验证
    changeAgeAndName: null, // 无需验证
    changeStudent: stu => {
        if (stu.age <= 0) {
            console.warn('年龄不得小于等于0')
            // false：验证不通过，会有警告语句，父组件依旧可以获取该值
            return false
        }
        // true：验证通过
        return true
    }
})

function emitEventAge() {
    // 选项式通过 this.$emit 触发自定义事件，并传值
    emit('changeAge', 30)
}
</script>

<template>
    <button @click="emitEventAge">更改年龄</button>
    <button @click="emit('changeAgeAndName', 10, 'Annie')">
        更改年龄和名字
    </button>
    <button @click="emit('changeStudent', { age: 40, name: 'Drew', sex: '男' })">
        更改学生（验证通过）
    </button>
    <button @click="emit('changeStudent', { age: -10, name: 'Tom', sex: '男' })">
        更改学生（验证失败）
    </button>
</template>
```

```vue title="父组件"
<script setup>
import { reactive } from 'vue';
import StudentVue from './components/Student.vue';

let student = reactive({
    name: 'Jack',
    age: 18,
    sex: '男'
})
// 获取子组件传递值
function getNewAge(newAge) {
    console.log('年龄的新值：' + newAge)
    student.age = newAge
}
function getNewAgeAndName(newAge, newName) {
    console.log('年龄的新值：' + newAge)
    console.log('名字的新值：' + newName)
    student.age = newAge
    student.name = newName
}
function getNewStudent(stu){
    console.log('学生新值：');
    console.log(stu);
    student.age = stu.age
    student.name = stu.name
    student.sex = stu.sex
}
</script>

<template>
    {{ student }}
    <hr>
    <StudentVue 
                @change-student="getNewStudent"
                @change-age-and-name="getNewAgeAndName" 
                @change-age="getNewAge" />
</template>
```

### 依赖注入（祖先传子）

应用层提供：

```javascript
import { createApp } from 'vue'
const app = createApp({ })
app.provide('message', 'hello!') // message 注入名， 'hello' 值
```

组件中提供：

```vue
<script setup>
import { ref, provide } from 'vue'

const message = 'hello'
const title = ref('博客')
const subtitle = ref('百万博主分享经验')

function changeSubtitle(sub) {
    this.subtitle = sub
}

provide('message', message) // 提供固定数据
provide('title', title) // 提供响应式数据
provide('subtitle', subtitle) // 提供响应式数据
provide('changeSubtitle', changeSubtitle) // 为后代组件提供修改响应式数据 subtitle 的函数
</script>
```

使用：

```vue
<script setup>
import { inject } from 'vue'

const c_message = inject('message')
const title = inject('title')
const c_subtitle = inject('subtitle')
const c_changeSub = inject('changeSubtitle')
// 祖先组件并未提供 content，则会报警告，设置默认值来解决
const c_content = inject('content',  '暂时还未有内容') 
</script>
```

## 插槽

```vue
<script setup>
import CardVue from './components/Card.vue'
</script>

<template>
    <CardVue>
        <!-- 向具名插槽提供内容 -->
        <template v-slot:cardTitle>
            博客
        </template>

        <template #default>
            <button>关闭</button>
        </template>
    </CardVue>
</template>
```

```vue
<template>
    <div class="card">
        <h2 class="title">
            <!-- 带有 name 的属性的插槽，称为具名插槽 -->
            <slot name="cardTitle"></slot>
        </h2>
        <div class="action">
            <!-- 定义一个插槽 -->
            <!-- 插槽的默认内容，只有没有提供内容时，才会显示 -->
            <!-- 没有 name 属性的插槽称为默认插槽，会有一个隐含的名字：default -->
            <slot>卡片功能区域</slot>
        </div>
    </div>
</template>
```

## 单文件CSS（scoped）

**建议使用tailwind.css提升开发体验**

使用scoped选项，css将只会作用于当前组件和子组件的根元素

css同样可以绑定响应式数据：

```vue
<style scoped>
    button {
        /* 使用 v-bind() 可以使用该组件的中数据源，如果绑定的数据源值发生变化，则样式也会随着更新 */
        background-color: v-bind('btnTheme.backColor');
        color: v-bind('btnTheme.textColor');
    }
</style>
```

## 生命周期

常用四个：

**created**

1. `created`选项式生命周期函数
2. 在组件实例化成功后调用
3. 可访问组件的实例`this`及其组件中的数据源和函数等
4. 不能访问组件中的视图`DOM`元素

**mounted** 、**onMounted**

1. `mounted`：选项式生命周期函数、`onMounted`：组合式生命周期钩子
2. 组件视图在浏览器渲染之后调用
3. 可访问组件实例东西（数据源、函数、计算属性等）
4. 可以访问组件视图中的`DOM`元素

**updated**、**onUpdated**

1. `updated`：选项式生命周期函数、`onUpdated`：组合式生命周期钩子
2. 数据源发生变化时，组件视图重新渲染之后调用
3. 可访问组件实例东西（数据源、函数、计算属性等）
4. 不可以访问该组件中在**更新之前**的`DOM`元素，但是可以访问该组件中在更新之后的`DOM`元素

**unmounted**、**onUnmounted**

1. `unmounted`：选项式生命周期函数、`onUnmounted`：组合式生命周期钩子
2. 组件实例被卸载之后调用
3. 可访问组件实例东西（数据源、函数、计算属性等）
4. 不可以访问组件视图中的`DOM`元素
5. 一般在这个生命周期函数里，我们可以手动清理一些副作用，例如计时器、`DOM`事件监听器或者与服务器的连接

## 模板引用

可以很方便地访问DOM元素，直接字符串形式设置ref属性即可

```vue
<script setup>
import { ref } from 'vue';
// 账号输入框
let account = ref(null) // ref 变量名和账号输入框中的 ref 属性值一样

function changeAccountInputStyle() {
    console.log(account.value)
    account.value.style = 'padding: 10px'
    account.value.className = 'rounded'
    account.value.focus()
}
</script>

<template>
    <!-- ref 字符串值形式 -->
    账号输入框：<input type="text" ref="account">
    <button @click="changeAccountInputStyle">改变账号输入框的样式</button>
</template>
```

## 路由

### 创建路由

一般情况下脚手架会配置好需要的文件

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // 引入路由模块
let app = createApp(App)

app.use(router) // 初始化路由插件

app.mount('#app')
```

### 编写路由规则

```javascript
import { createRouter, createWebHistory } from 'vue-router'
import BlogHomeView from '@/views/BlogHomeView.vue'

let routes = [
    {
        path: '/',
        redirect: '/home' // 如果访问是 / 则强制跳转到 /home
    },
    {
        path: '/home', // URL 地址
        name: 'home',  // 名称
        component: () => import('@/views/HomeView.vue')  // 渲染该组件
    },
    {
        path: '/blog',
        name: 'blog',
        component: BlogHomeView
    },
    {
        path: '/school',
        name: 'school',
        component: SchoolHomeView,
        //  嵌套路由，下面要展示的组件需要在父级路由的组件中（router-view）进行展示
        children: [
            {
                path: 'english', // 嵌套路由中的 path 前面不要加 /
                name: 'school-english',
                component: () => import('@/views/EnglishView.vue')
            },
            {
                path: 'math',
                name: 'school-math',
                component: MathView
            }
        ]
    }
]

// 创建路由
const router = createRouter({
    history: createWebHistory(), // 使用 history 模式路由
    routes // 路由规则
})

export default router // 将路由对象暴露出去
```

### 导航

```vue
<template>
	<!--   路由链接，点击是路由地址会切换到属性 to 的地方   -->
    <router-link to="/home">首页</router-link>
    <router-link to="/blog">博客</router-link>
    
	<!--   路由视图，路由切换组件展示的地方   -->
    <router-view/>
</template>
```

### 路径传参

```javascript
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SchoolView from '@/views/SchoolView.vue'
import BlogContentView from '@/views/blog/BlogContentView.vue'

let routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/blog-content/:id',  // 路径传参
        name: 'blog-content',
        component: BlogContentView,
        props: true  // 将路径参数传递到展示组件的 props 中
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
```

```vue
<script setup>
import { useRoute } from 'vue-router'

const routeObj = useRoute() // 获取的跳转的路由对象
const propsData = defineProps(['id'])

function showRouteParams() {
    console.log(routeObj.params) // 获取路由路径参数对象
    console.log(routeObj.params.id) // 获取路由路径参数对象指定的属性
    console.log(propsData.id) // 在 props 取出路由路径参数（建议使用）
}
</script>

<template>
    <div class="blog-content">
        博客详情界面
        <ul>
            <li>{{ routeObj.params }}</li>
            <li>{{ routeObj.params.id }}</li>
            <li>{{ id }}</li>
        </ul>
        <button @click="showRouteParams">在 JS 中获取路由路径参数</button>
    </div>
</template>

<style scoped>
div.blog-content {
    padding: 50px;
    background-color: rgb(228, 78, 190);
}
</style>
```

### 编程式导航

可以使用js代码来切换路由

```javascript
import { useRouter } from 'vue-router'

const router = useRouter()


// ====================================================================
router.push('/home') // 简单的字符串地址
router.push({ path : '/home' }) // 路径地址对象 path（路由地址）
router.push({ name : 'home' }) // 路径地址对象 name（路由名称）


// --------------------- 嵌套路由 -------------------------

router.push('/school/english') // 简单的字符串地址
router.push({ path : '/school/english' }) // 路径地址对象 path（路由地址）
router.push({ name : 'schoo-english' }) // 路径地址对象 name（路由名称）


// --------------------- 路径传参 -------------------------
const id_one = 110
const id_two = 119
const id_three = 120

router.push(`/blog-content/${ id_one }`) // 简单的字符串地址
router.push({ path : `/blog-content/${ id_two }`}) // 路径地址对象 path（路由地址）
router.push({ name : 'blog-content' , params: { id_three } }) // 路径地址对象 name（路由名称）

router.go(1) // 前进 1 条记录
router.go(-1) // 后退 1 条记录
router.go(3) // 前进 3 条记录

// 如果没有那么多记录，静默失败
router.go(-100)
router.go(100)
```

### 导航守卫

给导航跳转添加条件，主要用于解决登录凭证等问题

router:

```javascript
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import MainHomeView from '@/views/admin/MainHomeView.vue'

// 路由规则
const routes = [
    {
        path: '/', 
        redirect: '/home' // 重定向地址
    },{
        path: '/home', // 路由地址
        name: 'home', // 路由名称
        component: HomeView
    },{
        path: '/login', 
        name: 'login', 
        component: LoginView
    },{
        path: '/admin/main', 
        name: 'admin-main', 
        meta: { isLogin : true }, // 自定 mate 属性，isLogin：是否需要用户登录
        component: MainHomeView
    }
]

// 创建路由对象
const router = createRouter({
    history: createWebHistory(), // 采用 html 5 路由模式
    routes
})

// 注册全局前置守卫
// to：将要访问的路由信息对象
// from：将要离开的路由信息对象
router.beforeEach((to, from, next) => {

    // 判断将要访问的路由信息对象是否需要用户登录
    if (to.meta.isLogin) {
        let userLogin = localStorage.getItem('loginUser') // 获取存储对象
        // 判断用户是否已经登陆了
        if(userLogin == null) {
            // 未登录 --> 跳转至登录页
            return next({ path: '/login' }) 
        }
    }

    return next() // 放行
})

// 将路由对象暴露出去
export default router
```

login:

```vue
<script setup>
import { reactive } from 'vue';

const user = reactive({
    account: '',
    password: ''
})

function toLogin() {
    localStorage.setItem('loginUser', JSON.stringify(user)) // 存储对象到本地
    alert('登录成功')
}

function loginSingout() {
    localStorage.removeItem('loginUser') // 删除存储对象
    alert('注销成功')
}

function isLogined() {
    let userLogin = localStorage.getItem('loginUser') // 获取存储对象
    console.log(userLogin)
}
</script>

<template>
    <div class="login">
        登录界面
        <hr>
        账号：<input type="text" v-model="user.account"> <br>
        密码：<input type="password" v-model="user.password"> <br>
        <button @click="toLogin">登录</button>
        |
        <button @click="loginSingout">注销</button>
        |
        <button @click="isLogined">查看是否已经登录</button>
    </div>
</template>
```

## Axios

### 常见配置项

```json
{
    url: '/user', // 请求的服务器地址 URL        
    method: 'GET', // 请求方式，默认值 GET
    baseURL: 'https://some-domain.com/api/', // 如果 url 不是绝对地址，则会发送请求时在 url 前方加上 baseURL
    headers: {'X-Requested-With': 'XMLHttpRequest'}, // 自定义请求头
    params: { ID: 12345 }, // 与请求一起发送的 URL 参数
    data: { firstName: 'Fred' },  // 作为请求体被发送的数据，仅适用 'PUT', 'POST', 'DELETE 和 'PATCH' 请求方法
    timeout: 1000, // 请求超时的毫秒数，如果请求时间超过 `timeout` 的值，则请求会被中断，默认值是 `0` (永不超时)，
    responseType: 'json', // 期望服务器返回的数据类型，选项包括: 'arraybuffer', 'document', 'json', 'text', 'stream'， 浏览器专属：'blob'，默认值 json
    // 允许在向服务器发送前，修改请求数据，它只能用于 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    transformRequest: [function (data, headers) {   
        return data; // 对发送的 data 进行任意转换处理
    }],
    // 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [function (data) {
    	return data; // 对接收的 data 进行任意转换处理
    }]
}
```

### 创建实例

```javascript
import axios from 'axios'

const request = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})

export default request
```

### 响应体与异常捕获

```javascript
axios({
    method: 'GET', // 请求方式
    url: '/example-url/……', // 请求地址
}).then(response => {
    console.log(response.data) // 获取服务器传递来的数据
}).catch(error => {
    console.log('请求失败！')
})
```

## 跨域（Vite）

修改`vite.config.js`

```javascript
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    // 服务
    server: {
        // 代理
        proxy: {
            '/ok': {
                target: 'https://v.api.aa1.cn/api', // 代理后台服务器地址
                changeOrigin: true, //允许跨域               
                rewrite: path => path.replace(/^\/ok/,'') // 将请求地址中的 /ok 替换成空
            }
        }
    }
})
```


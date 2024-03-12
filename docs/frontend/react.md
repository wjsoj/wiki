# React知识速查

## 关于JSX的三个原则

1. 永远用一个父标签包括其他元素
2. 标签总是闭合的
3. 驼峰命名一切

## 基本概念

### 组件树：

组件名必须大写开头，return一个html element ，用闭合标签使用组件，迭代对象需指定key

```react
function Header({ title }) {
  return <h1>{ title }</h1>;
  return <h1>{props.title}</h1>;
  return <h1>{`Cool ${title}`}</h1>;
  return <h1>{title ? title : 'Default Title'}</h1>;
}
 
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = React.useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  );
}
 
const root = ReactDOM.createRoot(app);
root.render(<Header />);
```

子组件修改父组件中的值：

1. 将修改函数（一般写成括号函数）传给子组件
2. 在子组件的对应方法后调用父组件传进来的函数

子组件依据不同传入值重写子组件的数据：为子组件设定key
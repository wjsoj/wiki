[跳转测试](.\about\about.md)

## Material color palette 颜色主题

### Primary colors 主色

> 默认为 `white`

点击色块可更换主题的主色

<div class="tx-switch">
<button data-md-color-primary="red"><code>Red</code></button>
<button data-md-color-primary="pink"><code>Pink</code></button>
<button data-md-color-primary="purple"><code>Purple</code></button>
<button data-md-color-primary="deep-purple"><code>Deep Purple</code></button>
<button data-md-color-primary="indigo"><code>Indigo</code></button>
<button data-md-color-primary="blue"><code>Blue</code></button>
<button data-md-color-primary="light-blue"><code>Light Blue</code></button>
<button data-md-color-primary="cyan"><code>Cyan</code></button>
<button data-md-color-primary="teal"><code>Teal</code></button>
<button data-md-color-primary="green"><code>Green</code></button>
<button data-md-color-primary="light-green"><code>Light Green</code></button>
<button data-md-color-primary="lime"><code>Lime</code></button>
<button data-md-color-primary="yellow"><code>Yellow</code></button>
<button data-md-color-primary="amber"><code>Amber</code></button>
<button data-md-color-primary="orange"><code>Orange</code></button>
<button data-md-color-primary="deep-orange"><code>Deep Orange</code></button>
<button data-md-color-primary="brown"><code>Brown</code></button>
<button data-md-color-primary="grey"><code>Grey</code></button>
<button data-md-color-primary="blue-grey"><code>Blue Grey</code></button>
<button data-md-color-primary="white"><code>White</code></button>
</div>
<script>
  var buttons = document.querySelectorAll("button[data-md-color-primary]");
  Array.prototype.forEach.call(buttons, function(button) {
    button.addEventListener("click", function() {
      document.body.dataset.mdColorPrimary = this.dataset.mdColorPrimary;
      localStorage.setItem("data-md-color-primary",this.dataset.mdColorPrimary);
    })
  })
</script>


### Accent colors 辅助色

> 默认为 `red`

点击色块更换主题的辅助色

<div class="tx-switch">
<button data-md-color-accent="red"><code>Red</code></button>
<button data-md-color-accent="pink"><code>Pink</code></button>
<button data-md-color-accent="purple"><code>Purple</code></button>
<button data-md-color-accent="deep-purple"><code>Deep Purple</code></button>
<button data-md-color-accent="indigo"><code>Indigo</code></button>
<button data-md-color-accent="blue"><code>Blue</code></button>
<button data-md-color-accent="light-blue"><code>Light Blue</code></button>
<button data-md-color-accent="cyan"><code>Cyan</code></button>
<button data-md-color-accent="teal"><code>Teal</code></button>
<button data-md-color-accent="green"><code>Green</code></button>
<button data-md-color-accent="light-green"><code>Light Green</code></button>
<button data-md-color-accent="lime"><code>Lime</code></button>
<button data-md-color-accent="yellow"><code>Yellow</code></button>
<button data-md-color-accent="amber"><code>Amber</code></button>
<button data-md-color-accent="orange"><code>Orange</code></button>
<button data-md-color-accent="deep-orange"><code>Deep Orange</code></button>
</div>
<script>
  var buttons = document.querySelectorAll("button[data-md-color-accent]");
  Array.prototype.forEach.call(buttons, function(button) {
    button.addEventListener("click", function() {
      document.body.dataset.mdColorAccent = this.dataset.mdColorAccent;
      localStorage.setItem("data-md-color-accent",this.dataset.mdColorAccent);
    })
  })
</script>

### 颜色模式

> 默认为 `default`

<div class="tx-switch">
<button data-md-color-scheme="default"><code>Default</code></button>
<button data-md-color-scheme="slate"><code>Slate</code></button>
</div>
<script>
  var buttons = document.querySelectorAll("button[data-md-color-scheme]")
  Array.prototype.forEach.call(buttons, function(button) {
    button.addEventListener("click", function() {
      document.body.dataset.mdColorScheme = this.dataset.mdColorScheme;
      localStorage.setItem("data-md-color-scheme",this.dataset.mdColorScheme);
    })
  })
</script>

<style>
button[data-md-color-accent]> code {
    background-color: var(--md-code-bg-color);
    color: var(--md-accent-fg-color);
  }
button[data-md-color-primary] > code {
    background-color: var(--md-code-bg-color);
    color: var(--md-primary-fg-color);
  }
button[data-md-color-primary='white'] > code {
    background-color: var(--md-primary-bg-color);
    color: var(--md-primary-fg-color);
  }
button[data-md-color-accent],button[data-md-color-primary],button[data-md-color-scheme]{
    width: 6.6rem;
    margin-bottom: .4rem;
    padding: 2.5rem .4rem .4rem;
    transition: background-color .25s,opacity .25s;
    border-radius: .2rem;
    color: #fff;
    font-size: .8rem;
    text-align: middle;
    cursor: pointer;
}
button[data-md-color-accent]{
  background-color: var(--md-accent-fg-color);
}
button[data-md-color-primary]{
  background-color: var(--md-primary-fg-color);
}
button[data-md-color-scheme='default']{
  background-color: hsla(0, 0%, 100%, 1);
}
button[data-md-color-scheme='slate']{
  background-color: var(--md-default-bg-color);
}
button[data-md-color-accent]:hover, button[data-md-color-primary]:hover {
    opacity: .75;
}
</style>
// MathJax支持
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => { 
  MathJax.typesetPromise()
})

// 全局配色修改
window.addEventListener('load', function() { 
  var p=localStorage.getItem("data-md-color-primary");
  if (p){
      document.body.setAttribute('data-md-color-primary',p);
  }
  var a=localStorage.getItem('data-md-color-accent');
  if (a){
      document.body.setAttribute('data-md-color-accent',a);
  }
  var s = localStorage.getItem('data-md-color-scheme');
  if (s) {
      document.body.setAttribute('data-md-color-scheme', s);
  }

}, false);

// 表格排序
document$.subscribe(function() {
  var tables = document.querySelectorAll("article table:not([class])")
  tables.forEach(function(table) {
    new Tablesort(table)
  })
})

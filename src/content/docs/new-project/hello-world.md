---
title: Hello World
description: A guide in my new Starlight docs site.
---

This is my first guide in my new Starlight docs site.

![unsplash.com](https://source.unsplash.com/random/800x600)

## 二级标题

内容

### 三级标题

内容

## 第二个二级标题

内容

## 代码示例

```js "return true;" ins="inserted" del="deleted"
function demo() {
  console.log('These are inserted and deleted marker types');
  // The return statement uses the default marker type
  return true;
}
```

### 添加正则表达式

```js "Individual terms" /Even.*supported/
// Individual terms can be highlighted, too
function demo() {
  return 'Even regular expressions are supported';
}
```

### 添加 diff 标记

```diff lang="js"
  function thisIsJavaScript() {
    // This entire block gets highlighted as JavaScript,
    // and we can still add diff markers to it!
-   console.log('Old code to be removed')
+   console.log('New and shiny code!')
  }
```

### 添加文件名

```js  

// my-test-file.js
console.log('Hello World!');
```

### 添加一个终端窗口

```bash title="Terminal"
echo "Hello World!"
```

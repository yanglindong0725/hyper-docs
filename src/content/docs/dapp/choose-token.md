---
title: Choose Token
description: A guide in my new Starlight docs site.
---

# _Token-list token列表_

[guides](/guides/example/)

针对`tokenType`类型使用

```
interface tokenType {
  chainId: number
  address: string
  name: string
  symbol: string
  decimals: number
  logoURI: string
  isRecommended: boolean
}
```

```js "return true;" ins="inserted" del="deleted"
function demo() {
  console.log('These are inserted and deleted marker types');
  // The return statement uses the default marker type
  return true;
}
```

```js "Individual terms" /Even.*supported/
// Individual terms can be highlighted, too
function demo() {
  return 'Even regular expressions are supported';
}
```

```diff lang="js"
  function thisIsJavaScript() {
    // This entire block gets highlighted as JavaScript,
    // and we can still add diff markers to it!
-   console.log('Old code to be removed')
+   console.log('New and shiny code!')

  }
```

```js
// my-test-file.js
console.log('Hello World!');
```

## 库及组件

引用的库是`vue-virtual-scroller`，使用的组件是`RecycleScroller`

## 本组件作用

在传入参数后，可以在很短时间内生成`token`列表

## 参数

### height: Number

***required***

高度：列表外边框高度，传入数字类型格式，列表高度为外边框高度的95%

### tokenList: tokenType[]

***required***

列表数据：列表展示的具体数据，数据类型为`tokenType`数组

### selectedToken: tokenType

***requied***

选中的数据：传入一个变量，类型为`tokenType`，可使该选项在列表中显示为被选中效果，最好传入响应式变量，这样可以使得选中的数据也可以变化

## 绑定事件

### (e: 'handleCoinSelect', data: tokenType): void

父组件中定义的事件：需要在父组件中先有定义，事件参数类型为`tokenType`,在事件中定义选中`token`之后会触发的事件

## 注意事项

需要引入样式`import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'`该组件样式才能生效

`tokenList`和`selectedToken`要同时是响应式或者同时都是非响应式,不然会出现选中标志无法生效

具体调用详情可以参考demo.vue

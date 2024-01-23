# 01-数据渲染（forEach，filter,解构）
### 将数据渲染到页面
  1. 一般先定义一个`render(data)`方法,参数为`数据`
    - `let str = ''` 一个空的字符串,用来存储需要循环渲染的数据
  2. 使用`forEach`方法遍历拿到的数组
    - `data.forEach(item => {})`
  3. 解构拿到的数据
    - `const {数据的key} = item`
    - 使用模板字符串,替换对应数据,根据页面结构依次添加到str中
  4. 将拿到的数据使用`当前页面结构的上一级.innerHTML = str`渲染到页面上
  5. 根据页面情况,判断使用事件委托还是循环绑定
    - 事件委托:没有复杂的嵌套结构时使用
  6. 循环绑定事件
    - 使用`document.querySelectorAll`获取一个伪数组
    - 使用for循环或者其他方法遍历
    - 添加点击事件
  7. 实现点击后切换样式
    - 先移除:`document.querySelector('元素.类名').classList.remove('类名')`
    - 后添加:`this.classList.add('类名')`
  8. 筛选元素
    - 获取到被点击的元素的自定义属性值`this.dataset.data-后面的内容`
    - 使用数组方法:filter(function(ele){条件})筛选满足条件的元素,返回一个数组(不改变原数组)
    - 然后重新调用`render`方法渲染页面
### 选择器优先级
 - 通配符 < 标签 < 类 < id < 行内 < !important
 ![选择器优先级计算规则](../2_images/选择器优先级计算规则.png)
 
### 复合选择器
 - 后代选择器
   -  ```父选择器 子选择器 { CSS属性 }```
   - 父子选择器之间用空格隔开
   - 会选中所有后代标签
 - 子代选择器
   - ```父选择器 > 子选择器 { CSS属性 }```
 - 并集选择器
   - ```选择器1,选择器2,选择器3...```
 - 交集选择器
   - ```选择器1选择器2 {CSS属性}```
   - 选择器连写，不用隔开
   - 选中同时满足多个条件的元素 
 - 伪类选择器
  - ```选择器:hover {CSS属性}```
### 伪类选择器（超链接状态）
 1. `:link`     访问前
 2. `:visited`  访问后
 3. `:hover`    鼠标悬停
 4. `:active`   点击时

### 结构伪类选择器
 - `E:first-child`  查找第一个E元素
 - `E:last-child`   查找最后一个E元素
 - `E:nth-child(N)` 查找第N个E元素（第一个元素N值为1）
 - `E:nth-child(公式)` 
 ![公式](../2_images/Nth公式.png)

### 伪元素选择器
 - `E::before` 在E元素里面最`前面`添加一个伪元素 
 - `E::after`  在E元素里面最`后面`添加一个伪元素
 ![伪元素选择器](../2_images/伪元素选择器.png)
### 背景属性
 - 背景色`background-color`
 - 背景图`background-image`
 - 背景图平铺方式`background-repeat`
   - `no-repeat` 不平铺
   - `repeat`    平铺
   - `repeat-x`  水平方向平铺
   - `repeat-y`  垂直方向平铺
 - 背景图位置`background-position`
   - `left`   左侧
   - `right ` 右侧
   - `center` 居中
   - `top`    顶部
   - `bottom` 底部
 - 背景图缩放`background-size`
   - `cover`   完全缩放
   - `contain` 根据背景区域缩放
   - 百分比、数字+单位
 - 背景图固定`background-attachment`
   - `fixed`  固定定位
 - 背景复合属性`background`
   - 背景色 背景图 背景图平铺方式 背景图位置/背景图缩放

### 标签显示模式
 - 块级元素
   - 独占一行
   - 宽度默认是父级的100%
   - 添加宽高元素生效
 - 行内元素
   - 一行多个
   - 尺寸由内容撑开
   - 添加宽高元素不生效
 - 行内块元素
   - 一行多个
   - 尺寸由内容撑开
   - 添加宽高元素生效

### 转换显示模式`display`
 - `block`        块级
 - `inline-block` 行内块
 - `inline`       行内

# 练习项目2笔记内容

 ### 文件结构
- CSS
   1. `base.css` 基础公共样式
   2. `common.css` 各个网页悬停模块样式
   3. `index.css` 首页CSS样式
 - `iconfont` 字体图标素材
 - `images` 固定使用的图片素材
 - `uploades` 非固定使用的图片素材
 - `favicon.ico` Favicon图标
 - `index.html` 首页HTML文件
 ### 浏览器SEO标签
 - `title` 网页标题标签
 - `description` 网页描述
 - `keywords` 网页关键词
    ```css
    <meta name="description" content="网页描述">
    <meta name="keywords" content="网页关键词">
    <title>网页标题标签</title>
    ```
 ### Favicon图标
  - Favicon图标：网页图标，出现在浏览器标题栏，增加网站辨识度。
  - 图标：favicon.ico，一般存放到网站的根目录。
  - 引入方法：写在`<head>`标签里面
    ```html
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    ```
 ### 网站版心常用格式
  - 编写一个类名为`wrapper`的`div`，使用以下样式实现居中
    ```css
    .wrapper {
        margin: 0 auto;
        width: 内容的宽度;
    }
     ```
 ### 网站Logo图标
  - HTML格式
    - 一般用一个类名为`logo`的`div`标签；嵌套`h1`标签；再嵌套`a`标签
    ```html
    <div class="logo">
        <h1><a href="#">网页名称</a></h1>
    </div>
    ```
  - CSS格式
    - 根据设计稿设计名为`logo`的`div`标签宽高
    ```css
    .logo {
        width: 200px;
        height: 88px;
    }
    .logo a {
        display: block;
        width: 200px;
        height: 88px;
        /* 使用背景图片显示引入图片 */
        background-image: url(../images/logo.png);
        /* 设置字体大小为0来隐藏文字 */
        font-size: 0;
    }
    ```
 ### 字体图标的引入和使用
  - 直接引入文件内iconfont.css文件
    ```css
    <link rel="stylesheet" href="./iconfont/iconfont.css">
    ```
  - 一般使用`span`标签来显示字体图标
    ```html
    <span class="iconfont 图标的类名"></span>
    ```
 ### input输入框
  - 默认文字属性`placeholder`
  - 更改属性样式`属性名::属性值`，例：`input::placeholder`
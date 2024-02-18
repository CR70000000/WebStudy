### Nodejs
  #### Node.js
  - 定义：Node.js是一个跨平台JavaScript运行环境，使开发者可以搭建服务器端的JavaScript应用程序。
  - 作用：使用Node.js编写服务器端程序
    - 编写数据接口，提供网页资源浏览功能等等
    - 前端工程化：为后续学习Vue和React等框架做铺垫
      - 定义：前端工程化是指将前端开发、构建、测试等流程自动化，提高开发效率和质量
  #### fs模块 - 读写文件
  - 模块：类似插件，封装了方法/属性
  - fs模块：封装了与本机文件系统进行交互的方法/属性
  - 语法
    1. 加载fs模块对象
    2. 写入文件内容
    3. 读取文件内容
    ```js
    const fs = require('fs')
    fs.writeFile('文件路径', '写入内容', err => {
      
    })
    fs.readFile('文件路径', (err, data) => {
      
    })
    ```
  #### path模块 - 处理文件路径
  - `__dirname` 内置变量（获取当前模块目录-绝对路径）
  - 注意：`path.join()` 会使用特定平台的分隔符，作为定界符，将所有传入的路径片段连接起来
  - 语法
    1. 加载path模块对象
    2. 使用path.join()方法拼接文件路径
    ```js
    const path = require('path')
    path.join(__dirname, '文件路径')
    ```
  #### http模块 - 创建HTTP服务器
  - 定义：http模块是Node.js内置的模块，用于创建HTTP服务器
  - 语法
    1. 加载http模块对象，创建Web服务对象
    2. 监听request请求事件，设置响应头和响应体
    3. 配置端口号并启动Web服务
    4. 浏览器请求 http://localhost:3000/ 测试
    ```js
    const http = require('http')
    const server = http.createServer()

    server.on('request', (req, res) => {
      // 设置响应头: 内容类型，普通文本； 编码格式为 utf-8
      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      // 设置响应体
      res.end('Hello World')
    })
    server.listen(3000, () => {
      console.log('server is running at http://localhost:3000')
    })
    ```
### NodeJs 模块化
  #### 模块化
  - 定义:CommonJS 模块是为 Node.js 打包 JavaScript 代码的原始方式。 Node.js 还支持浏览器和其他 JavaScript 运行时使用的 ECMAScript 模块标准。
  - 概念：项目是由很多个模块文件组成的
  - 好处：提高代码复用性，按需加载，独立作用域
  - 使用：需要标准语法导出和导入进行使用
  #### CommonJS 标准
  - 使用步骤
    1. 导出: module.exports = {内置模块/自定义模块}
    2. 导入: const 变量名 = require('模块文件路径')
  #### ECMAScript 标准
  - 默认导出和导入
    - 使用步骤
      1. 导出: export default {内置模块/自定义模块}
      2. 导入: import 变量名 from '模块文件路径'
    - 注意: 如果需要使用ECMAScript 标准，需要在运行模块文件新建package.json文件，并在文件中配置{"type": "module"}
  - 命名导出和导入
    - 使用步骤
      1. 导出: export const 变量名 = {内置模块/自定义模块}
      2. 导入: import {变量名} from '模块文件路径'

### NodeJs 包管理器
  #### 包
  - 定义: 将模块，代码，其他资料聚合成一个文件夹
  - 分类:
    - 项目包:主要用于编写项目和业务逻辑
    - 软件包:封装工具和方法进行使用
  - 要求：根目录中，必须有 package.json 文件（记录包的清单信息）
  - 注意：导入软件包时，引入的默认是 index.js 模块文件 / main 属性指定的模块文件
  ![包](../3_框架前置(AJAX-Node.js-Webpack-Git)/2_Node.js/2_images/包.png)
  #### npm - 包管理器
  - 使用:
    1. 初始化清单文件：npm init -y（得到 package.json 文件，有则略过此命令）
    2. 下载软件包：npm i 软件包名称
    3. 使用软件包
  - 安装所有依赖
    - npm i
  - 卸载软件包
    - npm uninstall 软件包名称
  - 更新软件包
    - npm update 软件包名称
  #### npm - 全局软件包 nodemon
  - 软件包区别：
    - 本地软件包：当前项目内使用，封装属性和方法，存在于 node_modules 
    - 全局软件包：本机所有项目使用，封装命令和工具，存在于系统设置的位置
  - nodemon 作用：替代 node 命令，检测代码更改，自动重启程序
  - 使用：
    1. 安装：npm i nodemon -g（-g 代表安装到全局环境中）
    2. 运行：nodemon 待执行的目标 js 文件

### 总结
  #### Node.js 模块化
  - 概念：每个文件当做一个模块，独立作用域，按需加载
  - 使用：采用特定的标准语法导出和导入进行使用
  - CommonJS  标准：一般应用在 Node.js 项目环境中
  - ECMAScript 标准：一般应用在前端工程化项目中
  ![模块化标准](../3_框架前置(AJAX-Node.js-Webpack-Git)/2_Node.js/2_images/模块化标准.png)
  #### Node.js 包
  - 概念：把模块文件，代码文件，其他资料聚合成一个文件夹
  - 项目包：编写项目需求和业务逻辑的文件夹
  - 软件包：封装工具和方法进行使用的文件夹（一般使用 npm 管理）
    - 本地软件包：作用在当前项目，一般封装的属性/方法，供项目调用编写业务需求
    - 全局软件包：作用在所有项目，一般封装的命令/工具，支撑项目运行
  ![包管理](../3_框架前置(AJAX-Node.js-Webpack-Git)/2_Node.js/2_images/包管理.png)
  #### 常用命令
  ![常用命令](../3_框架前置(AJAX-Node.js-Webpack-Git)/2_Node.js/2_images/常用命令.png)

### WebPack
  #### 概念
  - 定义：本质上，webpack 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 依赖图(dependency graph)，然后将你项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，用于展示你的内容。
  - 静态模块：指的是编写代码过程中的，html，css，js，图片等固定内容的文件
  - 打包：把静态模块内容，压缩，整合，转译等（前端工程化）
    - 把 less / sass 转成 css 代码
    - 把 ES6+ 降级成 ES5
    - 支持多种模块标准语法

  #### 使用
  1. 新建并初始化项目，编写业务源代码
  2. 下载 webpack webpack-cli 到当前项目中（版本独立），并配置局部自定义命令
  3. 运行打包命令，自动产生 dist 分发文件夹（压缩和优化后，用于最终运行的代码）
  ![使用Webpack](../3_框架前置(AJAX-Node.js-Webpack-Git)/3_Webpack/2_images/使用Webpack.png)

  #### 修改 Webpack 打包入口和出口
  - Webpack 配置：影响 Webpack 打包过程和结果
  - 步骤：
    1. 项目根目录，新建 webpack.config.js 配置文件
    2. 导出配置对象，配置入口，出口文件的路径
    3. 重新打包观察
  - 注意：只有和入口产生直接/间接的引入关系，才会被打包
  ![修改Webpack打包入口和出口](../3_框架前置(AJAX-Node.js-Webpack-Git)/3_Webpack/2_images/修改Webpack打包入口和出口.png)

  #### 自动生成html网页
  - 插件 html-webpack-plugin： 在 Webpack 打包时生成 html 文件
  - 步骤：
    1. 下载 html-webpack-plugin 本地软件包
    2. 配置 webpack.config.js 让 Webpack 拥有插件功能
    3. 重新打包观察效果
   ![自动生成html网页](../3_框架前置(AJAX-Node.js-Webpack-Git)/3_Webpack/2_images/自动生成html网页.png)

  #### 打包 css 代码
  - 加载器 css-loader：解析 css 代码
  - 加载器 style-loader：把解析后的 css 代码插入到 DOM
  - 步骤：
    1. 准备 css 文件代码引入到 src/login/index.js 中（压缩转译处理等）
    2. 下载 css-loader 和 style-loader 本地软件包
    3. 配置 webpack.config.js 让 Webpack 拥有该加载器功能
    4. 打包后观察效果
  - 注意：Webpack 默认只识别 js 代码
  ![打包css代码](../3_框架前置(AJAX-Node.js-Webpack-Git)/3_Webpack/2_images/打包css代码.png)

  #### 优化-提取css文件
  - 插件 mini-css-extract-plugin：提取 css 代码
  - 步骤：
    1. 下载 mini-css-extract-plugin 本地软件包
    2. 配置 webpack.config.js 让 Webpack 拥有该插件功能
    3. 打包后观察效果
  - 注意：不能和 style-loader 一起使用
  - 好处：css 文件可以被浏览器缓存，减少 js 文件体积
  ![优化-提取css文件](../3_框架前置(AJAX-Node.js-Webpack-Git)/3_Webpack/2_images/优化-提取css文件.png)

  #### 优化-压缩过程
  - 问题：css 代码提取后没有压缩
  - 解决：使用 css-minimizer-webpack-plugin 插件
  - 步骤：
    1. 下载 css-minimizer-webpack-plugin 本地软件包
    2. 配置 webpack.config.js 让 webpack 拥有该功能
    3. 打包重新观察
  ![优化-压缩过程](../3_框架前置(AJAX-Node.js-Webpack-Git)/3_Webpack/2_images/优化-压缩过程.png)

  #### 打包 less 代码
  - 加载器 less-loader：把 less 代码编译为 css 代码
  - 步骤：
    1. 新建 less 代码（设置背景图）并引入到 src/login/index.js 中
    2. 下载 less 和 less-loader 本地软件包
    3. 配置 webpack.config.js 让 Webpack 拥有功能
    4. 打包后观察效果
  - 注意：less-loader 需要配合 less 软件包使用
  ![打包less代码](../3_框架前置(AJAX-Node.js-Webpack-Git)/3_Webpack/2_images/打包less代码.png)

  #### 打包图片
  - 资源模块：Webpack5 内置资源模块（字体，图片等）打包，无需额外 loader
  - 步骤：
    1. 配置 webpack.config.js 让 Webpack 拥有打包图片功能
       - 占位符 【hash】对模块内容做算法计算，得到映射的数字字母组合的字符串
       - 占位符 【ext】使用当前模块原本的占位符，例如：.png / .jpg 等字符串
       - 占位符 【query】保留引入文件时代码中查询参数（只有 URL 下生效）
    2. 打包后观察效果和区别
    - 注意：判断临界值默认为 8KB
      - 大于 8KB 文件：发送一个单独的文件并导出 URL 地址
      - 小于 8KB 文件：导出一个 data URI（base64字符串）
  ![打包图片](../3_框架前置(AJAX-Node.js-Webpack-Git)/3_Webpack/2_images/打包图片.png)

  #### 搭建开发环境
  - 问题：之前改代码，需重新打包才能运行查看，效率很低
  - 开发环境：配置 webpack-dev-server 快速开发应用程序
  - 作用：启动 Web 服务，自动检测代码变化，热更新到网页
  - 注意：dist 目录和打包内容是在内存里（更新快）
  - 步骤：
    1. 下载 webpack-dev-server 软件包到当前项目
    2. 设置模式为开发模式，并配置自定义命令
    3. 使用 npm run dev 来启动开发服务器，试试热更新效果
  ![搭建开发环境](../3_框架前置(AJAX-Node.js-Webpack-Git)/3_Webpack/2_images/搭建开发环境.png)

  #### 打包模式
  - 打包模式：告知 Webpack 使用相应模式的内置优化
  - 分类：
    ![打包模式分类](../3_框架前置(AJAX-Node.js-Webpack-Git)/3_Webpack/2_images/打包模式分类.png)
  - 设置：
    - 方式1：在 webpack.config.js 配置文件设置 mode 选项
    - 方式2：在 package.json 命令行设置 mode 参数
  - 注意：命令行设置的优先级高于配置文件中的，推荐用命令行设置
  ![打包模式](../3_框架前置(AJAX-Node.js-Webpack-Git)/3_Webpack/2_images/打包模式.png)


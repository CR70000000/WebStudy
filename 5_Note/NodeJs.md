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
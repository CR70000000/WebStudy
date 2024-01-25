### AJAX
  #### Axios
  - Axios 使用
    1. 引入 axios.js:https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js
    2. 使用 axios 函数
      - 传入再配置
      - 再用 .then 回调函数接受结果，并做后续处理
        ```js
        axiod({
          url:'目标资源地址',
        }).then((res)=>{
          // 对服务器返回的数据进行处理
        })
        ```
  - Axios 查询参数
    - 语法：使用 axios 提供的 params 函数
    - 注意：axios 在运行时把参数名和值，会拼接到 url?参数名 = 值
      ```js
      axiod({
        url:'目标资源地址',
        method:'GET', // 可以省略
        params:{
          参数名:值
        }
      }).then((res)=>{
        // 对服务器返回的数据进行处理
      })
      ``` 
  - Axios 请求配置
    - url:请求的URL网址
    - method:请求的方法，GET可以忽略（不区分大小写）
    - data:提交数据
      ```js
      axiod({
        url:'目标资源地址',
        method:'请求方法',
        data:{
          参数名:值
        }
      }).then((res)=>{
        // 对服务器返回的数据进行处理
      })
      ```
  - Axios 错误处理
    - 语法：使用 axios 提供的 catch 函数
      ```js
      axios({
        // 请求选项
      }).then({
        // 处理数据
      }).catch({
        // 处理错误
      })
      ```
  #### URL
  - URL 组成
    - http协议：超文本传输协议，规定浏览器和服务器之间通信的规则
    - 域名：标记服务器在互联网中的方位
    - 资源路径：标记资源在服务器下的具体位置
  - URL 查询参数
    - 浏览器提供给服务器的额外详细，让服务器返回浏览器想要的数据
    - 格式：?key=value&key=value
    - 示例：https://www.baidu.com/s?wd=%E6%B5%B7%E9%98%94%E6%B5%B7%E6%B9%BE&rsv_spt=1&rsv_iqid=0x8a57599
  #### 常用请求方法
  - GET 获取数据
  - POST 提交数据
  - PUT 修改数据（全部）
  - DELETE 删除数据
  - PATCH 修改数据（局部）
  #### HTTP协议
  - 请求报文：浏览器按照HTTP协议要求的格式，发送给服务器的内容
    1. 请求行：请求方法，URL，协议
    2. 请求头：以键值对的格式携带的附加信息
    3. 空行：分割请求头，空行之后是发送给服务器的资源
    4. 请求体：提交的数据
  - 请求报文-错误排查
  - 响应报文：服务器按照HTTP协议要求的格式，发送给浏览器的数据
    1. 状态行：协议，状态码，状态描述
    2. 响应头：以键值对的格式携带的附加信息
    3. 空行：分割响应头，空行之后是服务器返回的数据
    4. 响应体：返回的资源
  #### HTTP 响应状态码
  - HTTP 响应状态码：用来表示服务器对请求的处理结果
    - 1XX 信息提示
    - 2XX 成功
    - 3XX 重定向
    - 4XX 客户端错误
    - 5XX 服务器错误
  #### 接口文档
  - 接口文档：描述接口的文章
  - 接口：使用AJAX和服务器通讯时，使用的URL，请求方法，以及参数
  #### form-serialize插件
  - 作用：将表单中的数据序列化
  - `serialize(from, { hash: true, empty: true })`
    - hash: 设置获取数据结构
      - true: JS对象
      - false: 查询字符串
    - empty: 设置是否获取空值
      - true: 获取
      - false: 不获取

### 实际案例
 ### 图书管理
  #### Bootrstrap弹框
  #### 渲染列表
  #### 添加图书
  #### 删除图书
  #### 修改图书
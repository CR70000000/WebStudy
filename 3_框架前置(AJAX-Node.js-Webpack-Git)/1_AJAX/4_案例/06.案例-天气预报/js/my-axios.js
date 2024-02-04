// 定义一个myAxios函数，用于发送请求
function myAxios(config) {
  // 返回一个Promise对象
  return new Promise((resolve, reject) => {
    // 创建一个XMLHttpRequest对象
    const xhr = new XMLHttpRequest()
    // 如果config.params存在，则将config.params转换为URLSearchParams对象，并将其转换为字符串
    if (config.params) {
      const paramsObj = new URLSearchParams(config.params)
      const queryString = paramsObj.toString()
      // 将config.url和queryString拼接，作为新的请求地址
      config.url += `?${queryString}`
    }
    // 使用config.method或者GET方法，发送请求
    xhr.open(config.method || 'GET', config.url)
    // 监听请求结束事件
    xhr.addEventListener('loadend', () => {
      // 如果请求状态码大于等于200且小于300，则将响应数据解析为JSON对象，并resolve
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.response))
      // 否则，将响应数据作为错误信息，reject
      } else {
        reject(new Error(xhr.response))
      }
    })
    // 如果config.data存在，则将config.data转换为JSON字符串，并设置请求头
    if (config.data) {
      const jsonStr = JSON.stringify(config.data)
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(jsonStr)
    // 否则，直接发送请求
    } else {
      xhr.send()
    }
  })
}
/**
 * 目标：基于 fs 模块读写文件内容
 *  1. 加载 fs 模块对象
 *  2. 写入文件内容
 *  3. 读取文件内容
 */
// 1. 加载 fs 模块对象
const fs = require('fs')
// 2. 写入文件内容
fs.writeFile('./test.txt', 'Hello Node.js', (err) => {
  if (err) {
    console.log('写入文件失败', err)
  }
  else {
    console.log('写入文件成功')
  }
})
// 3. 读取文件内容
fs.readFile('./test.txt', (err, data) => {
  if (err) {
    console.log('读取文件失败', err)
  }
  else {
    // data 是 buffer 16 进制数据流对象
    // .toString() 转换成字符串
    console.log('读取文件成功', data.toString())
  }
})


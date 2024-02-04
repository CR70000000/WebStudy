// axios 公共配置
// 基地址
axios.defaults.baseURL = 'http://geek.itheima.net'; // 设置默认的API接口基地址

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 统一携带 token 令牌字符串在请求头
  const token  = localStorage.getItem('token')
  token && (config.headers.Authorization = `Bearer ${token}`)
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
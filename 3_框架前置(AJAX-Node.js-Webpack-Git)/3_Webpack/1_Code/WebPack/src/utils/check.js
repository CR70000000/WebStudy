// 封装校验手机号长度和验证码长度的函数
// 命名导出：export
export const checkPhone = (phone) => {
  return phone.length === 11
}
export const checkCode = (code) => {
  return code.length === 6
}
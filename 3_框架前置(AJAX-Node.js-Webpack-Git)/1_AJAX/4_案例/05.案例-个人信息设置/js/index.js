/**
 * 目标1：信息渲染
 *  1.1 获取用户的数据
 *  1.2 回显数据到标签上
 * */
const creator = '播仔'
// 1.1 获取用户的数据
axios({
  url: 'https://hmajax.itheima.net/api/settings',
  params: {
    creator
  }
}).then(res => {
  console.log(res)
  const userObj = res.data.data
  // 1.2 回显数据到标签上
  Object.keys(userObj).forEach(key => {
    if (key === 'avatar') {
      document.querySelector('.prew').src = userObj[key]
    } else if (key === 'gender') {
      const gRadioList = document.querySelectorAll('.gender')
      const gNum = userObj[key]
      gRadioList[gNum].checked = true
    } else {
      document.querySelector(`.${key}`).value = userObj[key]
    }
  })
})

document.querySelector('.upload').addEventListener('change', e => {
  const fd = new FormData()
  fd.append('avatar', e.target.files[0])
  fd.append('creator', creator)
  axios({
    url: 'https://hmajax.itheima.net/api/avatar',
    method: 'PUT',
    data: fd
  }).then(res => {
    console.log(res)
    const imgUrl = res.data.data.avatar
    document.querySelector('.prew').src = imgUrl
  })
})

document.querySelector('.submit').addEventListener('click', e => {
  const userForm = document.querySelector('.user-form')
  const userObj = serialize(userForm, { hash: true, empty: true })
  userObj.creator = creator
  userObj.gender = +userObj.gender
  axios({
    url: 'https://hmajax.itheima.net/api/settings',
    method: 'PUT',
    data: userObj
  }).then(res => {
    const toastDom = document.querySelector('.my-toast')
    const toast = new bootstrap.Toast(toastDom)
    toast.show()
  })
})
/**
 * 目标：网站-更换背景
 *  1. 选择图片上传，设置body背景
 *  2. 上传成功时，"保存"图片url网址
 *  3. 网页运行后，"获取"url网址使用
 * */
document.querySelector('.bg-ipt').addEventListener('change', e => {
  const file = e.target.files[0]
  const fd = new FormData()
  fd.append('img', file)
  axios({
    url: 'https://hmajax.itheima.net/api/uploadimg',
    method: 'POST',
    data: fd
  }).then(res => {
    console.log(res)
    const imgUrl = res.data.data.url
    document.body.style.backgroundImage = `url(${imgUrl})` // 设置背景图片

    localStorage.setItem('bg-img', imgUrl) // 保存图片url网址
  })
})


const bgUrl = localStorage.getItem('bg-img')
bgUrl && (document.body.style.backgroundImage = `url(${imgUrl})`) // 获取保存的图片url网址并设置背景图片
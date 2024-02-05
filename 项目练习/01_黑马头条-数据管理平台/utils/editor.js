// 富文本编辑器
// 创建编辑器函数，创建工具栏函数
const { createEditor, createToolbar } = window.wangEditor

// 编辑器配置对象
const editorConfig = {
  // 占位提示文字
  placeholder: '发布文章内容...',
  // 编辑器变化时的回调函数
  onChange(editor) {
    // 获取富文本内容
    const html = editor.getHtml()
    console.log('editor content', html)
    // 也可以同步到 <textarea>
    // 为后续快速获取表单内容
    document.querySelector('.publish-content').value = html
  }
}

// 创建编辑器
const editor = createEditor({
  selector: '#editor-container',
  // 默认内容
  html: '<p><br></p>',
  // 配置项
  config: editorConfig,
  mode: 'default', // or 'simple'
})

// 工具栏配置对象
const toolbarConfig = {}

// 创建工具栏
const toolbar = createToolbar({
  // 为指定的编辑器创建工具栏
  editor,
  // 工具栏创建的位置
  selector: '#toolbar-container',
  // 工具栏配置对象
  config: toolbarConfig,
  // 配置集成模式
  mode: 'default', // or 'simple'
})

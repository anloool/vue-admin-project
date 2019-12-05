export const menu = [
  {
    icon: 'el-icon-s-data',
    title: '首页',
    index: 'dashbord'
  },
  {
    icon: 'el-icon-s-flag',
    title: '引导指南',
    index: 'flag'
  },
  {
    icon: 'el-icon-tickets',
    title: '表单',
    index: 'form',
    subs: [
      {
        title: '经典表单',
        index: 'base-form'
      },
      {
        title: '文件上传',
        index: 'upload-form'
      },
      {
        title: '富文本',
        index: 'summernote-form'
      }
    ]
  },
  {
    icon: 'el-icon-menu',
    title: '表格',
    index: 'table',
    subs: [
      {
        title: '普通表格',
        index: 'base-table'
      },
      {
        title: '复杂表格',
        index: 'complex-table'
      }
    ]
  }
]

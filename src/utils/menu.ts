export const menu = [
  {
    icon: 'dashboard',
    title: '首页',
    index: 'dashbord'
  },
  {
    icon: 'flag',
    title: '引导指南',
    index: 'flag'
  },
  {
    icon: 'form',
    title: '表单',
    index: 'form',
    subs: [
      {
        title: '普通表单',
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
    icon: 'table',
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
  },
  {
    icon: 'echart',
    title: '图表',
    index: 'echart'
  },
  {
    icon: 'excel',
    title: 'Excel',
    index: 'excel',
    subs: [
      {
        title: '导出excel',
        index: 'excel-out'
      },
      {
        title: '导入excel',
        index: 'excel-in'
      }
    ]
  }
]

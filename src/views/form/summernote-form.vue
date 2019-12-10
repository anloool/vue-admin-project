<template>
  <div class="summernote-form">
    <el-card class="form-card">
      <div class="header">富文本编辑器</div>
      <div class="editor">
        <quill-editor ref="editor" v-model="content" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)" @change="onEditorChange($event)">
        </quill-editor>
        <div class="code">
          <code>{{ content }}</code>
        </div>
        <div class="btn">
          <el-button type="primary" @click="save">保存</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// 工具栏
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // 加粗，斜体，下划线，删除线
  ['blockquote', 'code-block'], // 引用，代码块
  [{ 'header': 1 }, { 'header': 2 }], // 标题，键值对的形式；1、2表示字体大小
  [{ 'list': 'ordered' }, { 'list': 'bullet' }], // 列表
  [{ 'script': 'sub' }, { 'script': 'super' }], // 上下标
  [{ 'indent': '-1' }, { 'indent': '+1' }], // 缩进
  [{ 'direction': 'rtl' }], // 文本方向
  [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // 几级标题
  [{ 'color': [] }, { 'background': [] }], // 字体颜色，字体背景颜色
  [{ 'font': [] }], // 字体
  [{ 'align': [] }], // 对齐方式
  ['clean'], // 清除字体样式
  ['image', 'video'] // 上传图片、上传视频
]

@Component({
  name: 'summernote-form'
})
export default class SummernoteForm extends Vue {
  public content = '<p>hello world</p>'
  public editorOption = {
    modules: {
      toolbar: {
        container: toolbarOptions // 工具栏
      }
    },
    placeholder: '请输入文本...'
  }

  mounted () {
    // 设置富文本编辑器的高度
    console.log(this.$refs['editor'])
    this.$refs['editor'].quill.container.style.height = `${400}px`
  }

  public onEditorBlur (e) {
    console.log('editor blur!', e)
  }

  public onEditorFocus (e) {
    console.log('editor focus!', e)
  }

  public onEditorReady (e) {
    console.log('editor ready!', e)
  }

  public onEditorChange (e) {
    console.log('editor change!', e)
  }

  public save () {
    console.log(this.content)
  }
}
</script>
<style lang="less" scoped>
  .summernote-form {
    padding: 20px;
    .form-card {
      margin-bottom: 20px;
      .header {
        font-size: 14px;
        padding-bottom: 15px;
      }
      .code {
        padding: 10px;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        height: 250px;
        overflow-y: auto;
        code {
          font-size: 14px;
          font-family: mono,Consolas,Monaco,Andale Mono,Courier New,Microsoft YaHei;
          line-height: 2em;
          margin: 0;
          padding: 0;
          vertical-align: baseline;
          word-break: break-all;
          word-wrap: break-word;
              }
      }
      .btn {
        margin-top: 10px;
        text-align: right;
      }
    }
  }
</style>

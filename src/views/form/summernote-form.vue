<template>
  <div class="summernote-form">
    <el-card class="form-card">
      <div class="header">富文本编辑器</div>
      <el-row class="editor">
        <quill-editor
          ref="editor"
          v-model="content"
          class="myQuillEditor"
          :options="editorOption"
        ></quill-editor>
      </el-row>
      <el-button type="primary" @click="submit">提交</el-button>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
@Component({
  name: 'summernote-form',
  components: {
    quillEditor
  }
})
export default class SummernoteForm extends Vue {
  public content = ''
  public editorOption = {}

  public submit (): void {
    console.log(1)
  }
}
</script>
<style lang="less" scoped>
  .summernote-form {
    padding: 20px;
    .form-card {
      margin-bottom: 20px;
      .header  {
        font-size: 14px;
        padding-bottom: 15px;
      }
    }
    .quill-editor {
      height: 400px;
    }
  }
</style>

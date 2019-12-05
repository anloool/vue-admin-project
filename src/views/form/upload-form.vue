<template>
  <div class="upload-form">
    <el-card class="form-card">
      <div class="header">拖拽上传</div>
      <el-upload drag multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'upload-form'
})
export default class UploadForm extends Vue {

}
</script>
<style lang="less" scoped>
  .upload-form {
    padding: 20px;
    .form-card {
      margin-bottom: 20px;
      .header  {
        font-size: 14px;
        padding-bottom: 15px;
      }
    }
  }
</style>

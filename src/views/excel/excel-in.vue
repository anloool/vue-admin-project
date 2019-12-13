<template>
  <div class="excel-in">
    <el-card class="excel-card">
      <div class="header">导入表格</div>
      <div class="operat">
        <input type="file" class="upFile" ref="fileExcel" accept=".xlsx, .xls" @change="uploadFile" />
        <el-button type="primary" size="medium"  @click="importExcel">导入</el-button>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  @Component({
    name: 'excel-in'
  })
  export default class ExcelIn extends Vue {

  }
</script>
<style lang="less" scoped>
  .excel-in {
    padding: 20px;
    .excel-card {
      margin-bottom: 20px;
      .header  {
        font-size: 14px;
        padding-bottom: 15px;
      }
    }
    .operat {
      margin-bottom: 10px;
      .el-input {
        width: 200px;
        margin-right: 10px;
      }
    }
  }
  .upFile {
    display: none;
  }
</style>

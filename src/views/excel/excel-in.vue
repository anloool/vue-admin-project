<template>
  <div class="excel-in">
    <el-card class="excel-card">
      <div class="header">导入表格</div>
      <div class="operat">
        <input type="file" class="upFile" ref="fileExcel" accept=".xlsx, .xls" @change="uploadFile" />
        <el-button type="primary" size="medium"  @click="importExcel">导入</el-button>
      </div>

      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column
          v-for="item in tableHeader"
          :prop="item"
          :key="item"
          :label="item"
        ></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import XLSX from 'xlsx'
  @Component({
    name: 'excel-in'
  })
  export default class ExcelIn extends Vue {
    public tableData = []
    public tableHeader = []

    public importExcel(): void {
      this.$refs.fileExcel.click()
    }

    generateData({ header, results}) {
      this.tableHeader = header
      this.tableData = results
    }

    public uploadFile(e) {
      const file = e.target.files[0]
      this.$refs.fileExcel.value = null
      this.readData(file)
    }

    public readData(file) {
      return new Promise(resolve => {
        const readfile = new FileReader()
        readfile.onload = e => {
          const data = e.target.result
          const workbook = XLSX.read(data, { type: 'array' })
          const firstSheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[firstSheetName]
          const header = this.getHeaderRow(worksheet)
          const results = XLSX.utils.sheet_to_json(worksheet)
          this.generateData({ header, results })
          resolve()
        }
        readfile.readAsArrayBuffer(file)
      })
    }

    public getHeaderRow(sheet) {
      const headers = []
      const range = XLSX.utils.decode_range(sheet['!ref'])
      let C
      const R = range.s.r
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
        /* find the cell in the first row */
        let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
      }
      return headers
    }
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

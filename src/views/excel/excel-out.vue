<template>
  <div class="excel-out">
    <el-card class="excel-card">
      <div class="header">导出表格</div>
      <div class="operat">
        <el-input v-model="filename" placeholder="请输入文件名" size="medium"></el-input>
        <el-button type="primary" size="medium" @click="exportExcel">导出</el-button>
      </div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="订单号"></el-table-column>
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="province" label="省份"></el-table-column>
        <el-table-column prop="city" label="市区"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="zip" label="邮编"></el-table-column>
      </el-table>
    </el-card>
    <el-card class="excel-card">
      <div class="header">选择导出</div>
      <div class="operat">
        <el-button type="primary" size="medium" @click="exportExcel">导出</el-button>
      </div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="订单号"></el-table-column>
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="province" label="省份"></el-table-column>
        <el-table-column prop="city" label="市区"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="zip" label="邮编"></el-table-column>
      </el-table>
    </el-card>
    <el-card class="excel-card">
      <div class="header">多级表头导出</div>
      <div class="operat">
        <el-button type="primary" size="medium" @click="exportExcel">导出</el-button>
      </div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="订单号"></el-table-column>
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column label="配送信息">
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column label="地址">
            <el-table-column prop="province" label="省份"></el-table-column>
            <el-table-column prop="city" label="市区"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column prop="zip" label="邮编"></el-table-column>
          </el-table-column>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  @Component({
    name: 'excel-out'
  })
  export default class ExcelOut extends Vue {
    public autoWidth: boolean = true
    public bookType: string = 'xlsx'
    public filename: string = ''
    public tableData = [
      {
        id: '310000201601103528',
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        id: '310000201601103528',
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        id: '310000201601103528',
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        id: '310000201601103528',
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }, {
        id: '310000201601103528',
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        id: '310000201601103528',
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }
    ]

    public exportExcel () {
      import('@/vendor/Export2Excel.js').then(moudle => {
        const tHeader = ['订单号', '日期', '姓名', '省份', '市区', '地址', '邮编']
        const filterVal = ['id', 'date', 'name', 'province', 'city', 'address', 'zip']
        const list = this.tableData
        const data = this.formatJson(filterVal, list)
        moudle.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename === '' ? 'filename' : this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
      })
    }

    public formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  }
</script>
<style lang="less" scoped>
  .excel-out {
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
</style>

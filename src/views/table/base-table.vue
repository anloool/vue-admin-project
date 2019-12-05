<template>
  <div class="base-table">
    <!-- 基础表格 -->
    <el-card class="table-card">
      <div class="header">基础表格</div>
      <el-table :data="tableData1" border style="width:100%">
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </el-card>
    <!-- 固定表头及固定列-->
    <el-card class="table-card">
      <div class="header">固定列及表头</div>
      <el-table :data="tableData2" height="300" border style="width: 100%">
        <el-table-column fixed="left" prop="id" label="订单号" width="200"></el-table-column>
        <el-table-column prop="date" label="日期" width="200"></el-table-column>
        <el-table-column prop="name" label="姓名" width="200"></el-table-column>
        <el-table-column prop="province" label="省份" width="200"></el-table-column>
        <el-table-column prop="city" label="市区" width="200"></el-table-column>
        <el-table-column prop="address" label="地址" width="300"></el-table-column>
        <el-table-column prop="zip" label="邮编" width="200"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template>
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 带分页表格-->
    <el-card class="table-card">
      <div class="header">带分页表格</div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="num" label="序号" width="120"></el-table-column>
        <el-table-column prop="id" label="ID#"></el-table-column>
        <el-table-column prop="name" label="产品名称"></el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
        <el-table-column prop="quantity" label="数量"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status | tagClass">{{
              scope.row.status | statusText
            }}</el-tag>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        :total="total"
        layout="sizes, prev, pager, next">
      </el-pagination>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { GET_TABLE_DATA } from '@/request/api'
@Component({
  name: 'base-table',
  filters: {
    tagClass (val: number) {
      if (val === undefined) return
      if (val === 0) {
        return 'warning'
      } else if (val === 1) {
        return ''
      } else {
        return 'info'
      }
    },
    statusText (val: number) {
      if (val === undefined) return
      if (val === 0) {
        return '待激活'
      } else if (val === 1) {
        return '已完成'
      } else {
        return '已取消'
      }
    }
  }
})
export default class BaseTable extends Vue {
  currentPage: number = 1
  pageSize: number = 5
  total: number = 0
  pageSizes: number[] = [5, 10, 15, 20]
  public tableData = []

  public tableData1 = [
    {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }
  ]

  public tableData2 = [
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

  created () {
    this.getTableDataByPage(this.currentPage, this.pageSize)
  }
  public handleSizeChange (val: number): void {
    this.pageSize = val
    this.getTableDataByPage(this.currentPage, this.pageSize)
  }

  public handleCurrentChange (val: number): void {
    this.currentPage = val
    this.getTableDataByPage(this.currentPage, this.pageSize)
  }

  public getTableDataByPage (currentPage: number, pageSize: number): void {
    GET_TABLE_DATA({ currentPage: currentPage, pageSize: pageSize }).then(res => {
      const data = res.data
      this.total = data.total
      this.tableData = data.tableList
    }).catch(err => {
      this.$message.error(err)
    })
  }
}
</script>
<style lang="less" scoped>
  .base-table {
    padding: 20px;
    .table-card {
      margin-bottom: 20px;
      .header  {
        font-size: 14px;
        padding-bottom: 15px;
      }
    }
    .pagination {
      text-align: right;
      margin-top: 20px;
    }
  }
</style>

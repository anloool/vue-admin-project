<template>
  <div class="complex-table">
    <el-card class="table-card">
      <div class="header">复杂操作表格</div>
      <div class="filter">
        <div class="filter-l">
          <el-button type="danger" icon="el-icon-plus">添加</el-button>
        </div>
        <div class="filter-r">
          <el-input v-model="filter.order" placeholder="请输入订单号"></el-input>
          <el-select v-model="filter.status" placeholder="请选择">
            <el-option
              v-for="(item, index) in statusOptions"
              :key="index"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-date-picker type="date" v-model="filter.date" placeholder="请选择日期" value-format="yyyy-MM-dd"></el-date-picker>
          <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        </div>
      </div>
      <el-table :data="tableData" border style="width:100%">
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="order" label="订单号"></el-table-column>
        <el-table-column prop="time" label="下单时间"></el-table-column>
        <el-table-column prop="address" label="配送地址"></el-table-column>
        <el-table-column prop="phone" label="联系电话"></el-table-column>
        <el-table-column prop="name" label="配送员"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status | tagClass">
              {{ scope.row.status | statusText }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column flex="right" label="操作" width="300">
          <template>
            <el-button plain size="small" type="primary">编辑</el-button>
            <el-button plain size="small" type="warning">审核</el-button>
            <el-button plain size="small" type="success">完成</el-button>
            <el-button plain size="small" type="info">取消</el-button>
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
        layout="total, sizes, prev, pager, next">
      </el-pagination>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { GET_TABLE_COMPLEXDATA } from '@/request/api'
@Component({
  name: 'complex-table',
  filters: {
    tagClass (val: number) {
      if (val === undefined) return
      if (val === 0) {
        return 'success'
      } else if (val === 1) {
        return 'danger'
      } else if (val === 2) {
        return 'warning'
      } else {
        return 'info'
      }
    },
    statusText (val: number) {
      if (val === undefined) return
      if (val === 0) {
        return '已完成'
      } else if (val === 1) {
        return '待审核'
      } else if (val === 2) {
        return '配送中'
      } else {
        return '已取消'
      }
    }
  }
})
export default class ComplexTable extends Vue {
  public filter = {
    order: '',
    status: null,
    date: null
  }
  public statusOptions = [
    { label: '待审核', value: 1 },
    { label: '配送中', value: 2 },
    { label: '已完成', value: 0 },
    { label: '已取消', value: 3 }
  ]
  public allData: any[]= []
  public searchData:any[] = []
  public tableData:any[] = []
  public currentPage: number = 1
  public pageSize: number = 10
  public pageSizes: number[] = [10, 15, 20, 25]
  public total: number = 0

  created () {
    this.getTableAllData(this.currentPage, this.pageSize)
  }

  public handleSizeChange (val:number): void {
    this.pageSize = val
    this.getTableData()
  }

  public handleCurrentChange (val:number): void {
    this.currentPage = val
    this.getTableData()
  }

  public getTableAllData (currentPage: number, pageSize: number): void {
    GET_TABLE_COMPLEXDATA().then(res => {
      const data = res.data
      this.allData = data.tableList
      this.searchData = data.tableList
      this.total = data.total
      this.getTableData()
    }).catch(err => {
      this.$message.error(err)
    })
  }

  public getTableData () {
    let start = (this.currentPage - 1) * this.pageSize
    let end = start + this.pageSize
    this.tableData = this.searchData.slice(start, end)
  }

  public search () {
    let allData = this.allData.filter(item => {
      let matchOrder = true
      let matchStatus = true
      let matchDate = true

      if (this.filter.order) {
        matchOrder = item.order.indexOf(this.filter.order) !== -1
      }

      if (this.filter.status) {
        matchStatus = this.filter.status === item.status
      }

      if (this.filter.date) {
        matchDate = item.time.indexOf(this.filter.date) !== -1
      }

      return matchOrder && matchStatus && matchDate
    })

    this.searchData = allData
    this.total = this.searchData.length
    this.getTableData()
  }
}
</script>
<style lang="less" scoped>
  .complex-table {
    padding: 20px;
    .table-card {
      margin-bottom: 20px;
      .header  {
        font-size: 14px;
        padding-bottom: 15px;
      }
      .filter {
        display: flex;
        padding-bottom: 15px;
        .filter-l {
          flex: 1;
        }
        .filter-r {
          flex: 3;
          text-align: right;
          >div {
          margin-right: 10px;
          }
          .el-input {
            width: 220px;
          }
        }
      }
    }
    .pagination {
      text-align: right;
      margin-top: 20px;
    }
  }
</style>

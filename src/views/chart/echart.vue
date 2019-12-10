<template>
  <div class="chart">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-card class="chart-card">
            <div class="header">Line Chart</div>
            <div ref="lineCharts" style="height: 300px"></div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-card class="chart-card">
            <div class="header">Area Chart</div>
            <div ref="areaCharts" style="height: 300px"></div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-card class="chart-card">
            <div class="header">Column Chart</div>
            <div ref="columnCharts" style="height: 300px"></div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-card class="chart-card">
            <div class="header">Bar Chart</div>
            <div ref="barCharts" style="height: 300px"></div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import echarts from 'echarts'
@Component({
  name: 'chart'
})
export default class Chart extends Vue {
  public option = {
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '直接访问',
        type: 'line',
        stack: '',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '搜索引擎',
        type: 'line',
        stack: '',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  }

  mounted () {
    this.initChart()
  }

  public initChart () {
    // Line Chart
    let lineChart = echarts.init(this.$refs.lineCharts)
    lineChart.setOption(this.setOptionType('line'))
    // Area Chart
    let areaChart = echarts.init(this.$refs.areaCharts)
    areaChart.setOption(this.setOptionAreaStyle())
    // Column Chart
    let columnChart = echarts.init(this.$refs.columnCharts)
    columnChart.setOption(this.setOptionType('bar'))
    // Bar Chart
  }

  public setOptionType (type: string) {
    let option = this.deepClone(this.option)
    let series = option.series.map(item => {
      item.type = type
      return item
    })
    option.series = series
    return option
  }

  public setOptionAreaStyle () {
    let option = this.deepClone(this.option)
    let series = option.series.map(item => {
      item.areaStyle = {}
      return item
    })
    option.series = series
    return option
  }

  public deepClone (obj) {
    let cloneObj = JSON.parse(JSON.stringify(obj))
    return cloneObj
  }
}
</script>
<style lang="less" scoped>
.chart {
  padding: 20px;
  .chart-card {
    margin-bottom: 20px;
    .header {
      font-size: 14px;
      padding-bottom: 15px;
    }
  }
}
</style>

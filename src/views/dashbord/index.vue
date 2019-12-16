<template>
  <div class="dashbord">
    <!-- 环形进度条 -->
    <el-row :gutter="20">
      <el-col :span="6">
        <progress-box
          :txt="'Total Visitors'"
          :percentage="65"
        />
      </el-col>
      <el-col :span="6">
        <progress-box
          :txt="'Messages'"
          :percentage="67"
        />
      </el-col>
      <el-col :span="6">
        <progress-box
          :txt="'Total Order Placeed'"
          :percentage="80"
        />
      </el-col>
      <el-col :span="6">
        <progress-box
          :txt="'Total Profit'"
          :percentage="89"
        />
      </el-col>
    </el-row>
    <!-- 数字滚动 -->
    <el-row :gutter="20">
      <el-col :span="6">
        <counter-box
          :endVal="vistors"
          :txt="'Total Visitors'"
          :icon="'el-icon-user'"
        />
      </el-col>
      <el-col :span="6">
        <counter-box
          :endVal="message"
          :txt="'Messages'"
          :icon="'el-icon-chat-line-square'"
        />
      </el-col>
      <el-col :span="6">
          <counter-box
            :endVal="order"
            :txt="'Total Order Placeed'"
            :icon="'el-icon-goods'"
          />
      </el-col>
      <el-col :span="6">
        <counter-box
          :endVal="profit"
          :txt="'Total Profit'"
          :icon="'el-icon-trophy'"
        />
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import progressBox from '@/components/ProgressBox.vue'
import counterBox from '@/components/CounterBox.vue'
import { getCardsData } from '@/request/api'
@Component({
  name: 'dashbord',
  components: {
    progressBox,
    counterBox
  }
})
export default class dashbord extends Vue {
  public vistors: number = 0
  public message: number = 0
  public order: number = 0
  public profit: number = 0

  public getAllData() :void {
    this.$http.all([getCardsData()])
        .then(
          this.$http.spread((cardData) => {
            this.vistors = cardData.data.vistors
            this.message = cardData.data.message
            this.order = cardData.data.order
            this.profit = cardData.data.profit
          })
        )
  }

  created() {
    this.getAllData ()
  }
}
</script>
<style lang="less" scoped>
.dashbord {
  padding: 20px;
  background: #f0f3f4;
}
</style>

<template>
  <div class="progressbox">
    <p>{{ txt }}</p>
    <el-progress 
      type="circle"
      :percentage="percentage"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  name: 'progressbox'
})
export default class progressbox extends Vue {
  @Prop() txt!: string
  @Prop() percentage!: number
}
</script>
<style lang="less" scoped>
.progressbox {
  padding: 20px;
  background: #ffffff;
  box-shadow: 0 0 10px #e2e2e2;
  text-align: center;
  margin-bottom: 20px;
  p {
    margin-bottom: 20px;
  }
}
</style>
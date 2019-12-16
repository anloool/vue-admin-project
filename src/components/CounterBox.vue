<template>
  <div class="counterbox">
    <div class="stats">
      <count-to
        class="color-count"
        :startVal="startVal"
        :endVal="endVal"
        :duration="duration"
      ></count-to>
      <p>{{ txt }}</p>
    </div>
    <div class="icon-rounded">
      <i :class="icon"></i>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import countTo from 'vue-count-to'
@Component({
  name: 'counterbox',
  components: {
    countTo
  }
})
export default class counterbox extends Vue {
  @Prop() endVal!: number
  @Prop() txt!: string
  @Prop() icon!: string

  public startVal: number = 0
  public duration: number = 2000
}
</script>
<style lang="less" scoped>
.counterbox {
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 25px 30px;
  background: #ffffff;
  box-shadow: 0 0 10px #e2e2e2;
  .icon-rounded {
    background: #1e88e5;
    border-radius: 100%;
    padding: 10px;
    margin-left: auto;
    i {
      font-size: 25px;
      color: #ffffff;
    }
  }
  .stats {
    margin-left: 20px;  // flex设置元素右对齐
    .color-count {
      color: #010101;
      font-size: 28px;
    }
    p {
      margin-top: 5px;
      color: #777;
    }
  }
}
</style>
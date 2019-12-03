<template>
  <div class="layout">
    <m-header class="layout-header"></m-header>
    <div class="layout-main">
      <side-bar></side-bar>
      <page-main></page-main>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MHeader from './header/index.vue'
import SideBar from './sidebar/index.vue'
import PageMain from './main/index.vue'
@Component({
  name: 'layout',
  components: {
    MHeader,
    SideBar,
    PageMain
  }
})
export default class layout extends Vue {
}
</script>
<style lang="less" scoped>
  .layout {
    width: 100%;
    height: 100%;
    .layout-header {
      width: 100%;
      height: 50px;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      background-color: #409eff;
    }
    .layout-main {
      width: 100%;
      height: calc(100% - 50px);
      padding-top: 50px;
      background-color: #606266;
    }
  }
</style>

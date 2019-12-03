<template>
  <div class="sidebar"></div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'SideBar'
})
export default class SideBar extends Vue {
}
</script>
<style lang="less" scoped>
  .sidebar {
    width: 200px;
    height: calc(100% - 50px);
    background-color: #3a3f51;
    position: fixed;
    bottom: 0;
    left: 0;
    overflow: hidden;
    -webkit-transition: width .3s;
    transition: width .3s;
    z-index: 999;
  }
</style>

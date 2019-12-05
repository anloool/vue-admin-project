<template>
    <div class="wrapper">
        <m-header class="wrapper-hearder"/>
        <div class="wrapper-main">
            <side-bar></side-bar>
            <page-main></page-main>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MHeader from './header/index.vue'
import PageMain from './main/index.vue'
import SideBar from './sidebar/index.vue'

@Component({
  name: 'layout',
  components: {
    MHeader,
    PageMain,
    SideBar
  }
})
export default class layout extends Vue {
  // created () {
  //   this.$message('hello')
  // }
}
</script>
<style lang="less">
  // .wrapper {}
</style>

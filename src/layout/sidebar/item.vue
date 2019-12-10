<template>
  <div class="sidebarItem">
    <router-link v-if="!item.subs" :to="'/'+item.index">
      <el-menu-item :index="item.index">
        <!-- <i :class="item.icon ? item.icon : ''"></i> -->
        <svg-icon v-if="item.icon" :name="item.icon ? item.icon : ''" />
        <span slot="title">{{ item.title}} </span>
      </el-menu-item>
    </router-link>
    <el-submenu v-else :index='item.index'>
      <template slot="title">
        <svg-icon v-if="item.icon" :name="item.icon ? item.icon : ''" />
        <span slot="title">{{ item.title}} </span>
      </template>
      <sidebar-item v-for="(sub, index) in item.subs" :key="index" :item="sub"></sidebar-item>
    </el-submenu>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  name: 'sidebarItem'
})
export default class sidebarItem extends Vue {
  @Prop() item!: any

  public hasSubs (item: any): boolean {
    if (item && item.subs && item.subs.length > 0) return true
    return false
  }
}
</script>
<style lang="less" scoped>
</style>

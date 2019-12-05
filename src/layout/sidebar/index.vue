<template>
  <div class="side-bar">
    <el-scrollbar class="">
      <el-menu
        mode="vertical"
        @open="handleOpen"
        @close="handleClose"
        :default-active='activePath()'
        text-color="rgb(181, 182, 189)"
        background-color="#3a3f51"
        active-text-color="rgb(79, 148, 212)"
      >
        <sidebar-item v-for="(item, index) in menu" :key="index" :item="item"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import { menu } from '@/utils/menu'
import sidebarItem from './item.vue'
@Component({
  name: 'sidebar',
  components: {
    sidebarItem
  }
})

export default class sidebar extends Vue {
  public menu: any = menu

  public handleOpen (key:string, keyPath:string) {
    console.log(key, keyPath)
  }
  public handleClose (key:string, keyPath:string) {
    console.log(key, keyPath)
  }
  public activePath () {
    console.log(this.$route.path)
    return this.$route.name
  }
}
</script>

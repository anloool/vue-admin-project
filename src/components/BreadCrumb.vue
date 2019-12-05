<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="(item, index) in breadList"
      :key="index"
      :to="item.path"
    >{{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
@Component({
  name: 'breadcrumb'
})
export default class breadcrumb extends Vue {
  public breadList: any[] = []

  @Watch('$route', { immediate: true })
  private onRouteChange (route): void{
    let matched = route.matched.filter(item => {
      if (item.meta && item.meta.title) {
        if (item.redirect) {
          item.path = ''
        }
        return true
      }
    })
    if (!this.isHome(matched[0])) {
      matched = [{ path: '/home', meta: { title: '首页' } }].concat(matched)
    }
    this.breadList = matched
  }

  public isHome (route): boolean {
    return (route.name === 'home' || route.name === 'dashbord')
  }
}
</script>

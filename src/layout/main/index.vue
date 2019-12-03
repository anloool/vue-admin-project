<template>
  <div class="pagemain"></div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'PageMain'
})
export default class PageMain extends Vue {
}
</script>
<style lang="less" scoped>
  .pagemain {
    height: 100%;
    margin-left: 200px;
    -webkit-transition: all .3s;
    transition: all .3s;
  }
</style>

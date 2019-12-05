<template>
  <div class="page-main">
    <transition name="fade-page" mode="out-in">
      <!-- <keep-alive>
        <router-view v-if="!$route.meta.noCache"></router-view>
      </keep-alive> -->
      <router-view></router-view>
    </transition>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'pageMain'
})

export default class PageMain extends Vue {

}
</script>

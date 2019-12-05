<template>
    <div class="page-header">
      <div class="header-l">
        <a href="javascript:;" class="logo">
          <img src="@/assets/img/logo.png">
          Admin Project
        </a>
      </div>
      <div class="header-r">
        <!-- 面包屑 -->
        <bread-crumb class="breadcrumb"></bread-crumb>
        <ul class="header-ul">
          <!-- 消息提醒 -->
          <li>
            <el-badge is-dot>
              <i class="el-icon-message-solid"></i>
            </el-badge>
          </li>
          <!-- 当前用户信息 -->
          <li>
            <user-dropdown></user-dropdown>
          </li>
        </ul>
      </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import BreadCrumb from '@/components/BreadCrumb.vue'
import UserDropdown from '@/components/UserDropdown.vue'
@Component({
  name: 'PageHeader',
  components: {
    BreadCrumb,
    UserDropdown
  }
})

export default class PageHeader extends Vue {

}
</script>

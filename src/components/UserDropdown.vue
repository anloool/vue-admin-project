<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      <span>{{ userInfo.name }}</span>
      <i class="el-icon-arrow-down el-icon--right"></i>
      <img class="user-img" src="@/assets/img/user.jpg" />
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>
        <i class="el-icon-s-custom"></i>我的主页
      </el-dropdown-item>
      <el-dropdown-item>
        <a  @click="loginOut()"><i class="el-icon-switch-button"></i>退出系统</a>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action, Getter, State } from 'vuex-class'
@Component({
  name: 'UserDropdown'
})
export default class UserDropdown extends Vue {
  @Getter userInfo
  @Action _loginOut

  public loginOut (): void {
    this._loginOut()
  }
}
</script>

<template>
  <div class="login-bg">
    <div class="login">
      <h2><strong>Vue</strong>后台管理系统</h2>
      <el-form class="form-box" ref="loginForm" :rules="rules" :model="ruleForm">
        <el-form-item>
          <el-input placeholder="请输入账号" prefix-icon="el-icon-user" clearable v-model="ruleForm.user"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" show-password v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-button type="primary" class="btn" @click="login('loginForm')">立即登录</el-button>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action, Getter, State } from 'vuex-class'
import { USER_LOGIN } from '@/request/api'
@Component({
  name: 'login'
})
export default class login extends Vue {
  @Action _login
  @Action _setToken

  public ruleForm: any = {
    user: 'admin',
    password: '123456'
  }

  public rules: any = {
    user: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 3, max: 15, message: '长度在3到5个字符', trigger: 'blur' }
    ],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
  }

  public login (form: any) {
    (this.$refs[form] as any).validate(async (valid: boolean) => {
      if (valid) {
        this._login(this.ruleForm).then(async res => {
          if (!res.success) {
            this.$message.error(res.msg)
          } else {
            await this._setToken(res.token)
            this.$router.push({
              path: '/home'
            })
          }
        }).catch(err => {
          console.log(err)
        })
      } else {
        return false
      }
    })
  }
}
</script>

<style lang="less" scoped>
.login-bg {
  width: 100%;
  height: 100%;
  background: url(../../assets/img/loginBg.jpg) no-repeat center center;
  background-size: 100% 100%;
  overflow: hidden;
  .login {
    width: 500px;
    margin: 15% auto;
    text-align: center;
    h2 {
      padding-bottom: 20px;
      font-size: 30px;
      color: #ffffff;
    }
  }
  .form-box {
    // width: 450px;
    background: #ffffff;
    padding: 30px;
    border-radius: 5px;
    .btn {
      width: 100%;
    }
  }
}
</style>

<template>
  <div class="base-form">
    普通表单
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'base-form'
})
export default class BaseForm extends Vue {

}
</script>
<style lang="less" scoped>
  .base-form {
    padding: 20px;
    .form-card {
      margin-bottom: 20px;
      .header  {
        font-size: 14px;
        padding-bottom: 15px;
      }
    }
  }
</style>

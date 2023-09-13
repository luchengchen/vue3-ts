<template>
  <div class="container">
    <div class="content flex">
      <div class="flex-left">LOGIN</div>
      <div class="flex-right">
        <el-form :model="form" label-width="120px">
          <el-form-item label="账户名">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" type="password" />
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
const form = reactive({
  name: '',
  password:''
})
const login = () => {};
</script>
<style></style>

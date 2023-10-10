<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">LOGIN</el-aside>
      <el-main>
        <el-form :model="form" label-width="120px">
          <el-form-item label="账户名">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" type="password" />
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="login">登录</el-button>
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import {userLogin} from "../../api/index"
const form = reactive({
  name: "",
  password: "",
});
const login = async () => {
  let para = {
    username: "luchengchen_666",
    orgNumber: "6666",
    password: "1234567_",
    grant_type: "password",
    client_id: "opcloud",
    client_secret: "1",
  };
  const res = await userLogin(para)
  console.log(res,"reeee")
};
</script>
<style></style>

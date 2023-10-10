<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">LOGIN</el-aside>
      <el-main>
        <el-form :model="form" label-width="120px">
          <el-form-item label="账户名">
            <el-input v-model="form.username" />
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
import { userLogin } from "../../api/index";
import { setStorage, setToken } from "../../utils/utils";
import { useRouter } from "vue-router";
const form = reactive({
  orgNumber: 666,
  username: "luchengchen",
  password: "1234567_",
});
const router = useRouter();
const login = async () => {
  let para = {
    username: form.username + "_" + form.orgNumber,
    orgNumber: form.orgNumber,
    password: form.password,
    grant_type: "password",
    client_id: "opcloud",
    client_secret: "1",
  };
  const res = await userLogin(para);
  if (res.data.code == 200) {
    goPlace(res.data);
  }
};
//登录跳转
const goPlace = (res: {
  data: { expiresIn: number; access_token: string };
}) => {
  const { expiresIn, access_token } = res.data;
  setToken("accessToken", access_token, expiresIn);
  setStorage("orgNumber", form.orgNumber);
  setStorage("username", form.username);
  setToken("userInfo", res.data, expiresIn);
  const routeQuery = router.currentRoute.value.query;
  if (routeQuery && routeQuery.redirect) {
    const redirect: string = routeQuery.redirect as string;
    router.replace(decodeURIComponent(redirect));
  } else {
    router.replace("/");
  }
};
</script>
<style></style>

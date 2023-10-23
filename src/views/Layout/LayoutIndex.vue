<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <sideMenu></sideMenu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import sideMenu from "@/components/Layout/SideMenu.vue";
</script>

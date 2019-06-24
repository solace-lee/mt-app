<template>
  <el-container class="layout-default">
    <el-header>
      <my-header/>
    </el-header>
    <el-main class="container">
      <div>
        <nuxt></nuxt>
      </div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import MyHeader from "../components/public/header/index";
export default {
  components: {
    MyHeader
  }
};
</script>

<style>
.container {
  margin-top: 220px;
}
</style>

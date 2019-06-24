<template>
  <el-row :gutter="0" class="m-header">
    <el-col :span="5">
      <div class="grid-content bg-purple">
        <geo/>
      </div>
    </el-col>
    <el-col :span="5">
      <div class="grid-content bg-purple">
        <user/>
      </div>
    </el-col>
    <el-col :span="14">
      <div class="grid-content bg-purple">
        <navbar/>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Geo from "./geo";
import User from "./user";
import Navbar from "./nav";

export default {
  components: {
    Geo,
    User,
    Navbar
  }
};
</script>

<style lang="scss">
@import "~@/assets/css/public/layout.scss";
@import "~@/assets/css/public/header.scss";
</style>

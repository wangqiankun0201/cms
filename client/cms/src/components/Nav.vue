<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="lightskyblue"
      active-text-color="yellow"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">管理中心</template>
        <el-menu-item index="2-1">学生管理</el-menu-item>
        <el-menu-item index="2-2">班级管理</el-menu-item>
        <el-menu-item index="2-3">教师管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">个人中心</el-menu-item>
    </el-menu>
    <div class="line"></div>
    <router-view/>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key) {
        switch(key){
          case "1":if(this.$route.path!=="/"){this.$router.push("/")}break;
          case "2-1":if(this.$route.path!=="/student"){this.$router.push("/student")}break;
          case "2-2":if(this.$route.path!=="/class"){this.$router.push("/class")}break;
          case "3":if(this.$route.path!=="/person"){this.$router.push("/person")}break;
        }
      }
    }
  }
</script>

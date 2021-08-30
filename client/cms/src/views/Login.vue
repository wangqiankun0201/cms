<template>
  <div>
      <el-container>
          <el-header></el-header>
          <el-container>
          <el-aside width="35%"></el-aside>
          <el-main><el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input  prefix-icon="el-icon-user" placeholder="请输入用户名" v-model="form.username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input  prefix-icon="el-icon-warning-outline" placeholder="请输入密码" type="password" v-model="form.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即登录</el-button>
        <el-button>注册</el-button>
      </el-form-item>
    </el-form></el-main>
          <el-aside width="35%"></el-aside>
          </el-container>
          <el-footer></el-footer>
      </el-container>
    
   
  </div>
</template>


<script>
import request from "../utils/request"
  export default {
    data() {
      return {
        form: {
        username:"",
        password:""
        }
      }
    },
    methods: {
      onSubmit() {
        request.post("/login",{
          user:this.form
        }).then((res)=>{
          if(res.data.code === 20000){
            localStorage.setItem("token",res.data.token);
            this.$message({
            message: '恭喜你，诺曼底成功登陆',
            type: 'success'
           });
           this.$router.push('/');
          }else{
            this.$message.error('账号或密码错了哦');
          }
        })
      }
    }
  }
</script>
<style>
  /* body{
    background-image: url("../../public/images/女孩喝啤酒.jpg");
    background-size: 100%;
  } */
  .el-header, .el-footer {
    color: #F56C6C;
    text-align: center;
    line-height: 60px;
    margin-top: 100px;
  }
  
  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #DCDFE6;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
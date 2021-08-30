<template>
  <div>
    <el-descriptions
      class="margin-top"
      title="个人信息"
      :column="3"
      border
    >
      <template slot="extra">
        <el-button type="primary" size="small" @click="logout">注销</el-button>
      </template>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          用户名
        </template>
        Qikuu
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          手机号
        </template>
        10086
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          居住地
        </template>
        火星
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          备注
        </template>
        <el-tag size="small">帅锅</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          联系地址
        </template>
        火星特大豪华情侣酒店404号房
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default{
    methods: {
        logout(){
            localStorage.setItem("token","");
            this.$router.push("/login")
        }
    },
}

</script>

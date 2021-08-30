<template>
  <div>
    <el-table
      :data="
        studentList.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="学号" width="180">
        <template slot-scope="scope">
          <i class="el-icon-user-solid"></i>
          <span style="margin-left: 10px">{{ scope.row.number }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>性别: {{ scope.row.sex }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="成绩" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.score }}</span>
        </template>
      </el-table-column>
      <el-table-column label="班级" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.myclass }}</span>
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit()">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.number)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" round icon="el-icon-circle-plus" @click="dialogFormVisible = true"
      >添加学生</el-button
    >

    <el-dialog title="添加学生" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="学号" :label-width="formLabelWidth">
          <el-input v-model="form.number" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item> 
        <el-form-item label="性别" :label-width="formLabelWidth">
           <el-radio v-model="form.sex" label="男">男</el-radio>
            <el-radio v-model="form.sex" label="女">女</el-radio>
        </el-form-item> 
        <el-form-item label="分数" :label-width="formLabelWidth">
          <el-input v-model="form.score" autocomplete="off"></el-input>
        </el-form-item> 
        <el-form-item label="班级" :label-width="formLabelWidth">
          <el-input v-model="form.myclass" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addStudent"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import request from "../utils/request";
export default {
  data() {
    return {
      studentList: [
        {
          number: "",
          name: "",
          sex: "",
          score:"",
          myclass: "",
        }
      ],
       dialogFormVisible:false,
      formLabelWidth: '120px',
      search: "",
      form:{
          number: "",
          name: "",
          sex: "",
          score:"",
          myclass: "",
      },
    };
  },
  methods: {
    handleEdit() {
      this.$alert("编辑功能暂未开启，sorry", "抱歉", {
        confirmButtonText: "确定",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },
    handleDelete(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          request.delete(`/student/${id}`).then(() => {
            this.getStudentList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    getStudentList() {
      request.get("/student").then((res) => {
        this.studentList=res.data;
      });
    },
    addStudent(){
      request.post("/student",{
        student:this.form
      }).then(()=>{
        this.getStudentList();
        this.dialogFormVisible=false;
      })
    }
  },
  created() {
    this.getStudentList();
  },
};
</script>

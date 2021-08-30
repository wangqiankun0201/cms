<template>
  <div>
    <el-table :data="classList" style="width: 100%" max-height="500">
      <el-table-column fixed prop="myclasses" label="班级" width="150">
      </el-table-column>
      <el-table-column prop="name" label="班长" width="120"> </el-table-column>
      <el-table-column prop="total" label="总人数" width="120">
      </el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click="deleteRow(scope.row.myclasses)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" round icon="el-icon-circle-plus" @click="dialogFormVisible = true"
      >添加班级</el-button
    >

    <el-dialog title="添加班级" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="班级" :label-width="formLabelWidth">
          <el-input v-model="form.myclass" autocomplete="off"></el-input>
        </el-form-item> 
        <el-form-item label="班长" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item> 
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addClass"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import request from "../utils/request"
export default {
  methods: {
    deleteRow(rows) {
       this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        let id = rows;
        request.delete(`/class/${id}`).then(()=>{
        this.getClasses();
      })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    addClass(){
      request.post("/class",{
        myclasses:this.form
      }).then(()=>{
        this.getClasses();
        this.dialogFormVisible=false;
      })
    },
    getClasses(){
      request.get("/class").then((res)=>{
        this.classList=res.data;
      })
    }
  },
  data() {
    return {
      classList: [
        {
          myclasses:"",
          name: "",
          total: "",
        }
      ],
      dialogFormVisible: false,
      formLabelWidth: '120px',
      form:{
        myclass:"",
        name:''
      }
    };
  },
  created(){
    this.getClasses();
  }
};
</script>

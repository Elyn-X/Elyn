<template>
  <div >
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="my-breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 栅格布局搜索栏 -->
    <el-row >
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-input placeholder="请输入内容" 
          @keyup.native.enter="search"
          v-model="sendData.query"
           class="input-with-select">
           <!-- 插件不支持自定义属性的话要加个native -->
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
          </el-input>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <!-- 添加按钮 -->
          <el-button type="success" @click="addFormVisiable=true" plain>添加用户</el-button>
        </div>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" border>
        <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="username" label="姓名" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
       <el-table-column label="用户状态">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="handleEdit(scope.$index,scope.row)" plain size="mini"></el-button>
          <el-button type="danger" icon="el-icon-delete" plain size="mini"></el-button>
          <el-button type="success" icon="el-icon-check" plain size="mini"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination>
    
    <!-- 添加内容弹框 -->
    <el-dialog title="添加用户" :visible.sync="addFormVisiable">
  <el-form :model="addForm">
    <el-form-item label="用户名" :label-width="formLabelWidth">
      <el-input v-model="addForm.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" :label-width="formLabelWidth">
      <el-input v-model="addForm.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" :label-width="formLabelWidth">
      <el-input v-model="addForm.email" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="电话" :label-width="formLabelWidth">
      <el-input v-model="addForm.mobile" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="addFormVisiable = false">取 消</el-button>
    <el-button type="primary" @click="addFormVisiable = false">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 提交的数据
      sendData: {
        query: "",
        pagenum: "1",
        pagesize: "10"
      },
    //   tabel数据
      tableData: [],
    // 标记新增框是否显示 默认false
        addFormVisiable:false,
        // 新增的表单数据 跟接口名一致较好
        addForm:{
                usename:"",
                password:"",
                email:"",
                mobile:""
        }
    };
  },
//   查询数据
    methods:{
        handleEdit(index, row) {
      console.log(index);
      console.log(row);
    },
    async search() {
         // let res = await this.$http.get('users',this.sendData);
    let res = await this.$http.get("users", {
      headers: {
        Authorization: window.sessionStorage.getItem("token")
      },
      params: this.sendData
    });

    // console.log(res);
    this.tableData = res.data.data.users;
    },
  
  },
  // 数据获取
   created() {
       this.search();
  }
};
</script>

<style>
.el-breadcrumb.my-breadcrumb {
  height: 45px;
  line-height: 45px;
  background-color: #d3dce6;
  padding-left: 10px;
}
</style>



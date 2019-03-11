<template>
<el-container class="index-container"> 
    <!-- 上 左 右  这种栅格布局  -->
  <el-header class="index-header"> 
      <!-- 这个是顶部位置 -->
      <el-row>
          <!-- 顶部位置的大小占比 4 16 4 -->
          <!-- 左边占比四份放logo -->
  <el-col :span="4">
      <div class="grid-content bg-purple">
          <img src="../../public/logo.png" alt="">
      </div>
      </el-col>
      <!-- 中间占比十六分放文字 -->
  <el-col class="header-center" :span="16"><div class="grid-content bg-purple-light">黑马程序员</div>
      </el-col>
      <!-- 右边占比四份放退出按钮 按钮使用饿了吗ui里面的 -->
  <el-col class="header-right" :span="4"><div class="grid-content bg-purple">
      <button type="button" class="el-button el-button--success">
          <span @click="logout">退出</span>
          </button>
      </div></el-col>
</el-row>
  </el-header>
 
 <!-- 中间内容 -->
  <el-container>
      <!-- 左边 -->
    <el-aside class="index-aside" width="200px">
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router
      >
      <!-- 是否使用 vue-router 的模式，
      启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        
          <el-menu-item index="users">
            <!-- 记得开启router -->
            <i class="el-icon-menu"></i>用户列表
            </el-menu-item>
       
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
        
          <el-menu-item index="2"><i class="el-icon-menu"></i>用户列表</el-menu-item>
        
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
        
          <el-menu-item index="3"><i class="el-icon-menu"></i>用户列表</el-menu-item>
       
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
       
          <el-menu-item index="4"><i class="el-icon-menu"></i>用户列表</el-menu-item>
        
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>数据统计</span>
        </template>
       
          <el-menu-item index="5"><i class="el-icon-menu"></i>用户列表</el-menu-item>
        
      </el-submenu>
    </el-menu>
    </el-aside>
    <!-- 右边 -->
    <el-main class="index-main">
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
    // 只需要使用缓存 使用钩子函数即可
    // 用beforceCreate即可   还有个created
    // beforeCreate(){
    //     if (window.sessionStorage.getItem('token')) {
    //         // 实际项目会结合后台对token的准确性进行判断
    //         // 有的话不用管 直接让他进来
    //     } else {
    //         this.$message.warning('吔x啦你,没登录就想进来');
    //         setTimeout(() => {
    //             this.$router.push('/login')
    //         },1000);
    //     }
    // },
       data() {
      return {
        tabPosition: 'left'
      };
    },
    methods:{
            logout() {
        this.$confirm('是否退出登录', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        //   this.$message({
        //     type: 'success',
        //     message: '删除成功!'
        //   });
        // 删除token并且返回登录页 用编程式导航
        window.sessionStorage.removeItem('token');
        this.$router.push('/login');

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '你真好,你真是个大~沙雕'
          });          
        });
      },
      //       handleOpen(key, keyPath) {
      //   console.log(key, keyPath);
      // },
      // handleClose(key, keyPath) {
      //   console.log(key, keyPath);
      // }
    
    }
}
</script>

<style>
.index-container {
    height:100%
    /* 占整个页面 没有滚动条 */
}

.index-header {
    height: 60px;
    background: #b3c0d1;
    line-height: 60px;
}

.header-center { 

    text-align: center;
    font-size: 30px;
    color: white;
    font-weight: 700;
}

.header-right {
    text-align: right;
}

.index-aside {

}

.el-main.index-main {
    background-color: #E9EEF3;
    padding-top: 0;
    
}
</style>

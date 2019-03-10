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
          <span>退出</span>
          </button>
      </div></el-col>
</el-row>
  </el-header>
 
 <!-- 中间内容 -->
  <el-container>
      <!-- 左边 -->
    <el-aside class="index-aside" width="200px">
          <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="用户管理"></el-tab-pane>
    <el-tab-pane label="配置管理"></el-tab-pane>
    <el-tab-pane label="角色管理"></el-tab-pane>
    <el-tab-pane label="定时任务补偿"></el-tab-pane>
            </el-tabs>
    </el-aside>
    <!-- 右边 -->
    <el-main class="index-main">Main</el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
       data() {
      return {
        tabPosition: 'left'
      };
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

.index-main {
    background-color: #E9EEF3
}
</style>

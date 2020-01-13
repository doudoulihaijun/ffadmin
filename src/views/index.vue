<template>


  <el-container>
    <el-header>
        <el-row :gutter="20">
          <div class="divheader">
            <div class="div1">
              <img style="width: 60px;height: 60px;" src="../assets/logo.png" />
            </div>
            <div class="div2">
                 数据维护管理系统
            </div>
            <div class="div3">
                <span><i class="el-icon-user-solid"></i>您好,杨超越</span>
                <el-button type="danger" style="margin-left: 30px;" round>退出</el-button>
            </div>

          </div>

        </el-row>
    </el-header>

    <el-container>
      <el-aside width="220px">
        <!--:default-openeds="['1', '3']"-->
        <el-menu :default-active="this.$route.path"  router >

              <el-menu-item index="/index/indexview" >首页</el-menu-item>

              <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>用户管理</template>
                <el-menu-item index="/userlist">用户列表</el-menu-item>
              </el-submenu>

             <el-submenu index="2">
               <template slot="title"><i class="el-icon-message"></i>用户管理</template>
               <el-menu-item index="/table1">用户列表</el-menu-item>
             </el-submenu>


             <el-submenu index="3">
               <template slot="title"><i class="el-icon-message"></i>用户管理</template>
               <el-menu-item index="/table2">用户列表</el-menu-item>
             </el-submenu>

            </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view  />
        </el-main>

        <el-footer>
                <div>版权所有：{{coment}}#六脉神剑#微信公众号：JAVA34567#&nbsp;&nbsp;&nbsp;技术支持：13811348632&nbsp;&nbsp;&nbsp;Email：531677565@qq.com</div>
        </el-footer>

      </el-container>
    </el-container>
  </el-container>



</template>

<style>

    .divheader{
        display:flex;
        flex-direction: row;
        height: 60px;
    }

    .divheader div{
          width:100%;
          text-align:center;

    }

    .div1 img{
      float: left;
      padding-left: 50px;
    }

    .div2{
      font-size: 28px;
      font-weight: 100;
      color: #333;
    }

    .div3{

      font-size: 18px;
      font-weight: 100;
      color: #333;
    }

    .el-container{
        height: 100%;
    }

   .el-header{
      background-color: #bbd1d1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }

    .el-footer {
      background-color: #bbd1d1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }



    .el-aside {
      background-color: #FFFFFF;
      color: #333;
      text-align: center;
      line-height: 200px;
      margin-left:-20px;
    }



    .el-main {
      background-color: #F0F0F0;
      border: 1px solid #D0D0D0;
      color: #333;
      text-align: center;
      padding: 0px;
    }

    /**css3有一个直接调用的css，保证隐藏滚动条的同时还可以继续通过滚轮向下翻**/
    ::-webkit-scrollbar {
      /*隐藏滚轮*/
      display: none;
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

<script>

  import global from '../utils/comment.vue'

  export default {
    data() {
       return {
         coment: global.enterprisename
       }
    },
    methods: {

      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

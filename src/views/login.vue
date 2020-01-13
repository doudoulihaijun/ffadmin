<template>
<div class="login-container">

   <div class="title-container">
         		  <h2 class="title">数据后台</h2>
   </div>

   <el-form    auto-complete="on"  class="login-form" >

           <el-form-item prop="username">



                       <el-input
          			          v-model="loginForm.username"
          			          placeholder="手机号"
          			          name="username"
          			          type="text"
          			          auto-complete="on"
                          prefix-icon="el-icon-user"
                         />

           </el-form-item>

           <el-form-item prop="password">

             <el-input
               type="password"
               v-model="loginForm.password"
               placeholder="密码"
               name="password"
               auto-complete="on"
               prefix-icon="el-icon-bank-card"
               />

           </el-form-item>

           <el-button type="primary" style="width:100%;margin-bottom:30px;" v-on:click="handleLogin" >登录</el-button>


   </el-form>


</div>

</template>

<script>

        //this.$layer.alert("1111");

        export default {
          name:'login',
          data() {

          			return {
          		      loginForm: {
          			        username: '',
          			        password: ''
          				  }
                }

          		},
          mounted() {
             // this.layer.alert("11");
              //this.$layer.alert("1--");
          },
          methods:{   //监听方法  click事件等，执行drawFeatures方法
               handleLogin() {
                 this.$router.push('/index')
               }
          }

         }

</script>

<style>

body {
    background: #179898 url(../../static/img/bj.png) repeat;
    width: 100%;
    height: 100%;
}

.login-container{
  width: 409px;
  height: 420px;
  background-color: #FFFFFF;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.login-form{
    margin:0 auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

}

.title-container h2 {
    font-size: 28px;
    font-weight: 100;
    color: #333;
    text-align: center;
    margin-bottom: 50px
}

.el-form-item{
  width: 300px;
}
</style>

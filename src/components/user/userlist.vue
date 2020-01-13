<template>

  <div >
        <div>

            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/userlist' }">用户列表</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            </el-breadcrumb>

        </div>

        <div class="search">

              <div class="serarchdiv">
              <label>日期：</label>
              <div class="block">
                  <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </div>
              </div>

              <div class="serarchdiv">
               <label>姓名：</label> <el-input v-model="input1" placeholder="请输入姓名"></el-input>
              </div>

              <div class="serarchdiv">
               <label>地址：</label> <el-input v-model="input2" placeholder="请输入地址"></el-input>
              </div>

              <div class="serarchdiv">
                  <el-button type="primary" icon="el-icon-search" >登录</el-button>
              </div>


        </div>

        <div class="tables">
                   <template>
                     <el-table
                       :data="tableData"
                       stripe
                       style="width: 100%">
                       <el-table-column
                         prop="date"
                         label="日期"
                         width="180">
                       </el-table-column>
                       <el-table-column
                         prop="name"
                         label="姓名"
                         width="180">
                       </el-table-column>
                       <el-table-column
                         prop="address"
                         label="地址">
                       </el-table-column>
                     </el-table>
                   </template>
        </div>

        <div class="fenye">

          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>

        </div>
  </div>

</template>

<script>
export default {
    data() {
      return {
        input1: '',
        input2: '',
        value1: '',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }

</script>


<style >

.el-breadcrumb{
  height: 30px;
  width: 100%;
  background-color: #FFFFFF;
  border-bottom: 1px solid #D0D0D0;
  padding-left:20px;
  padding-top: 15px;
}



.search{
  display:flex;
  flex-direction: row;
  height: 100px;
  width: 95%;
  background-color: #FFFFFF;
  margin:0 auto;
  margin-top:20px;
  margin-bottom: 20px;
  border: 1px solid #D0D0D0;
  align-items: center;
}


.serarchdiv label{
  width: 100px;
  font-size: 16px;
  font-weight: 100;
  color: #333;

}

.serarchdiv{
  display:flex;
  flex-direction: row;
  width: 400px;
  align-items: center;
  padding-left: 30px;
}


.tables{
  width: 95%;
  margin: 0 auto;
  margin-bottom:20px ;
}



</style>

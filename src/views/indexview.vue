<template>
  <div class="astop">
    <div class="nav">
      <div id="myChart" :style="{width: '500px', height: '300px'}"></div>
      <div id="ssssss" :style="{width: '500px', height: '300px'}"></div>
    </div>
    <div class="nav zanzhu">
        <div>
          <ul>
            <li><h2>支持我</h2></li>
            <li>如果您认为FFAdmin对您有所帮助,你可以扫描以上二维码支持我们</li>
            <li>您的支持,将会出现在我们官网展现</li>
            <li>如果您有任何的改进或者意见都可以关注我的微信公众号JAVA34567</li>
            <img src="../../static/pay/wx.jpg" style="width: 200px;height: 200px;"/>
            <img src="../../static/pay/zfb.jpg" style="width: 200px;height: 200px;"/>
            <img src="../../static/img/wxnum.jpg" style="width: 200px;height: 200px;"/>
          </ul>
        </div>

        <div class="nav">
          <div>
            <ul>
              <li><h2>企业赞助</h2></li>
              <li>北京中科飞海科技发展有限公司</li>
              <li>北京君乐联信息咨询有限公司</li>
              <li>腾讯云计算（北京）有限责任公司</li>
              <li>北京京东尚科信息技术有限公司</li>
              <li>小米科技有限责任公司</li>
              <li>阿里巴巴（中国）网络技术有限公司</li>
              <li>北京中烟追溯科技有限公司</li>
              <li>北京百度网讯科技有限公司</li>
            </ul>
          </div>

          <div>
           <ul>
             <li><h2>个人赞助</h2></li>
             <li>六脉神剑#公众号：xxxxxx#</li>
             <li>百合爱绿萝#公众号：xxxxxx#</li>
             <li>一粒沙#公众号：xxxxxx#</li>
             <li>迪丽热巴#公众号：xxxxxx#</li>
             <li>老鼠爱上猫#公众号：xxxxxx#</li>
             <li>上帝的宠儿#公众号：xxxxxx#</li>
             <li>钱多多#公众号：xxxxxx#</li>
             <li>芳园里#公众号：xxxxxx#</li>
           </ul>
         </div>

        </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){
      this.drawLine();
      this.ssssss();
    },
    methods: {


              drawLine(){
                  // 基于准备好的dom，初始化echarts实例
                  let myChart = this.$echarts.init(document.getElementById('myChart'))
                  // 绘制图表
                  myChart.setOption({
                      title: { text: '在职员工统计' },
                      tooltip: {},
                      xAxis: {
                          data: ["程序员","前端","产品","测试","运维","信用"]
                      },
                      yAxis: {},
                      series: [{
                          name: '销量',
                          type: 'bar',
                          data: [5, 1, 1, 2, 3, 2]
                      }]
                  });
              },

              ssssss(){
                  // 基于准备好的dom，初始化echarts实例
                  let myChart = this.$echarts.init(document.getElementById('ssssss'))

                  // 绘制图表
                  // 指定图表的配置项和数据
                         var option = {
                             tooltip: {
                                     trigger: 'item',
                                     formatter: '{a} <br/>{b}: {c} ({d}%)'
                                 },
                                 legend: {
                                     orient: 'vertical',
                                     left: 10,
                                     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                                 },
                                 series: [
                                     {
                                         name: '访问来源',
                                         type: 'pie',
                                         radius: ['50%', '70%'],
                                         avoidLabelOverlap: false,
                                         label: {
                                             normal: {
                                                 show: false,
                                                 position: 'center'
                                             },
                                             emphasis: {
                                                 show: true,
                                                 textStyle: {
                                                     fontSize: '30',
                                                     fontWeight: 'bold'
                                                 }
                                             }
                                         },
                                         labelLine: {
                                             normal: {
                                                 show: false
                                             }
                                         },
                                         data: [
                                             {value: 335, name: '直接访问'},
                                             {value: 310, name: '邮件营销'},
                                             {value: 234, name: '联盟广告'},
                                             {value: 135, name: '视频广告'},
                                             {value: 1548, name: '搜索引擎'}
                                         ]
                                     }
                                 ]
                         };

                    // 使用刚指定的配置项和数据显示图表。
                    myChart.setOption(option);



              }



    }



  }

</script>

<style>


  .nav{
    display:flex;
    flex-direction: row;
  }

  .nav div{
    width:50%;
    margin: 0 auto;
  }

  .zanzhu{
    line-height: 50px;
    text-align: left;

  }

  .zanzhu div{
     border: 1px solid #F3F3F3;
  }

  ul li{
      list-style-type:none;
  }
</style>

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*引入ElementUI*/
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
//全局使用该组件 注册到全局
Vue.use(ElementUI);

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

//配置是否允许vue-devtools检查代码，方便调试，生产环境中需要设置为false
Vue.config.devtools=true;
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

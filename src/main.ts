import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from '@/lang';

Vue.config.productionTip = false;

// 按需引入 element-ui 的组件
import {
  Button,
  Row,
  Col,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Message
} from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Aside.name, Aside);
Vue.component(Main.name, Main);
Vue.component(Footer.name, Footer);

Vue.prototype.$message = Message;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');

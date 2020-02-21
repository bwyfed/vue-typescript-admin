import Vue from 'vue';
import SvgIcon from 'vue-svgicon';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from '@/lang';
import '@/icons/components';

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
  Message,
  Menu,
  MenuItem,
} from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Aside.name, Aside);
Vue.component(Main.name, Main);
Vue.component(Footer.name, Footer);
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);

Vue.prototype.$message = Message;

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWith: '1em',
  defaultHeight: '1em',
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');

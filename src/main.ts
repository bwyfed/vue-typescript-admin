import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 按需引入 element-ui 的组件
import {
  Button,
  Row,
  Container,
  Header,
  Aside,
  Main,
  Footer
} from "element-ui";

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Aside.name, Aside);
Vue.component(Main.name, Main);
Vue.component(Footer.name, Footer);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

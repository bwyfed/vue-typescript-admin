import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 按需引入 element-ui 的组件
import { Button, Row } from "element-ui";

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

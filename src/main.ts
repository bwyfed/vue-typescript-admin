import Vue from 'vue';

import 'normalize.css';
import ElementUI from 'element-ui';
import SvgIcon from 'vue-svgicon';

import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.less';

import App from './App.vue';
import router from './router';
import store from './store';
import i18n from '@/lang';
import '@/icons/components';
import '@/styles/_svgicon.less';
import { AppModule } from './store/modules/app';

Vue.config.productionTip = false;

Vue.use(ElementUI, {
  size: AppModule.size, // Set element-ui default size
  i18n: (key: string, value: string) => i18n.t(key, value),
});

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

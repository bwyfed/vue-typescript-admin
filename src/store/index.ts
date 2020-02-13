import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { boy } from './modules/boy';
import { girl } from './modules/girl';
import { RootState } from './root-types';

Vue.use(Vuex);

// it will automatically require all vuex modules from ./modules directory
const modulesFiles = require.context('./modules', true, /\.ts$/);

interface Module {
  [name: string]: any;
}
const modules: Module = {};
modulesFiles.keys().forEach(modulePath => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  if (moduleName !== 'modules-types') {
    const value = modulesFiles(modulePath);
    modules[moduleName] = value[moduleName];
  }
});

const store: StoreOptions<RootState> = {
  state: {
    flowersInStock: 10
  },
  mutations: {
    updateFlowersInStock(state, payload) {
      state.flowersInStock = state.flowersInStock + payload;
    }
  },
  actions: {
    sellFlower({ commit, state }) {
      return new Promise((resolve, reject) => {
        if (state.flowersInStock > 0) {
          commit('updateFlowersInStock', -1);
          resolve();
        } else {
          reject();
        }
      });
    }
  },
  modules
};

export default new Vuex.Store<RootState>(store);

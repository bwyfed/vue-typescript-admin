import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { boy } from './modules/boy';
import { girl } from './modules/girl';
import { RootState } from './root-types';

Vue.use(Vuex);

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
  modules: { boy, girl }
};

export default new Vuex.Store<RootState>(store);

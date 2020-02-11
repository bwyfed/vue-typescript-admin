import { GirlState } from './modules-types';
import { Mutation, ActionTree, Module, MutationTree } from 'vuex';
import { RootState } from '../root-types';

const state: GirlState = {
  currentFlower: 0
};

const mutations: MutationTree<GirlState> = {
  updateCurrentFlower(state, payload) {
    state.currentFlower = state.currentFlower + payload;
  }
};

const actions: ActionTree<GirlState, RootState> = {
  encourage({ dispatch }, params) {
    dispatch('boy/beEncouraged', null, { root: true });
  }
};

export const girl: Module<GirlState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions
};

import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { IAppState } from './modules/app';
import { IStepsState } from './modules/steps';

Vue.use(Vuex);

export interface IRootState {
  app: IAppState;
  steps: IStepsState;
}

export default new Vuex.Store<IRootState>({});

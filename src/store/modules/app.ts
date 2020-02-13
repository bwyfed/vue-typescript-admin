import Cookies from 'js-cookie';
import { MutationTree, ActionTree, Module } from 'vuex';
import { AppState } from './modules-types';

enum SIDEBAR_STATUS_OPEND {
  CLOSED,
  OPENED
}

const initAppState = (): AppState => {
  let sidebarStatusCookie = Cookies.get('sidebarStatus');
  if (sidebarStatusCookie === undefined) {
    sidebarStatusCookie = '0';
  }
  let sidebarStatus: number;
  sidebarStatus = parseInt(sidebarStatusCookie);
  let sidebarOpened: boolean = true;
  if (sidebarStatus === SIDEBAR_STATUS_OPEND.CLOSED) {
    sidebarOpened = false;
  } else if (sidebarStatus === SIDEBAR_STATUS_OPEND.OPENED) {
    sidebarOpened = true;
  }
  let sizeCookie = Cookies.get('size');
  let size: string = '';
  if (sizeCookie !== undefined) {
    size = sizeCookie;
  }
  return {
    sidebar: {
      opened: sidebarOpened,
      withoutAnimation: false
    },
    device: 'desktop',
    size: size || 'medium'
  };
};

const state: AppState = initAppState();

const mutations: MutationTree<AppState> = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened;
    state.sidebar.withoutAnimation = false;
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', '1');
    } else {
      Cookies.set('sidebarStatus', '0');
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', '0');
    state.sidebar.opened = false;
    state.sidebar.withoutAnimation = withoutAnimation;
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device;
  },
  SET_SIZE: (state, size) => {
    state.size = size;
  }
};

const actions: ActionTree<AppState, AppState> = {
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR');
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation);
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device);
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size);
  }
};

export const app: Module<AppState, AppState> = {
  namespaced: true,
  state,
  mutations,
  actions
};

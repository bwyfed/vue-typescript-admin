import Vue from 'vue';
import VueRouter, { RouterOptions } from 'vue-router';
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

import { RouteLayoutInterface, IRouteBasic } from './router-types';
// Layout
import Layout from '@/layout/index.vue';

// const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: Home
//   },
//   {
//     path: "/about",
//     name: "about",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
// ];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes
// });
export const hiddenRoutes: Array<IRouteBasic> = [
  {
    path: '/vuex',
    name: 'VuexTest',
    component: () => import('@/views/boy-girl/index.vue'),
    hidden: true,
  },
  {
    path: '/',
    name: 'Root',
    redirect: '/dashboard',
    hidden: true,
  },
];
/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes: RouteLayoutInterface[] = [
  {
    path: '/dashboard',
    name: 'DashboardRoot',
    component: Layout,
    redirect: '/dashboard/index',
    meta: {
      title: 'dashboard',
      icon: 'dashboard',
      affix: true,
    },
    children: [
      {
        name: 'DashboardIndex',
        path: 'index',
        component: () =>
          import(
            /* webpackChunkName: "dashboard"*/ '@/views/dashboard/index.vue'
          ),
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          activeMenu: '/dashboard',
        },
        fullPath: '/dashboard/index',
      },
      {
        path: 'about',
        name: 'DashboardAbout',
        component: () =>
          import(/*webpackChunkName: "about"*/ '@/views/About.vue'),
        meta: {
          title: 'charts',
          icon: 'education',
          activeMenu: '/dashboard',
        },
        fullPath: '/dashboard/about',
      },
    ],
  },
  {
    path: '/documentation',
    name: 'DocumentationRoot',
    component: Layout,
    redirect: '/documentation/index',
    meta: {
      title: 'documentation',
      icon: 'documentation',
    },
    children: [
      {
        path: 'index',
        name: 'DocumentationAbout',
        component: () =>
          import(/*webpackChunkName: "about"*/ '@/views/About.vue'),
        meta: {
          title: 'documentation',
          icon: 'documentation',
          activeMenu: '/documentation',
        },
        fullPath: '/documentation/index',
      },
      {
        path: 'second',
        name: 'DocumentationSecond',
        component: () =>
          import(
            /*webpackChunkName: "docSecond"*/ '@/components/HelloWorld.vue'
          ),
        meta: {
          title: 'tinymce',
          icon: 'email',
          activeMenu: '/documentation',
        },
        fullPath: '/documentation/second',
      },
    ],
  },
];

const createRouter = () =>
  new VueRouter({
    mode: 'history', // require service support
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes: [...hiddenRoutes, ...constantRoutes],
  });

const router = createRouter();

export default router;

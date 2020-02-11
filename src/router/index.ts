import Vue from 'vue';
import VueRouter, { RouterOptions } from 'vue-router';
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

import { RouteLayoutInterface } from './router-types';
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
/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes: RouteLayoutInterface[] = [
  {
    path: '/vuex',
    component: () => import('@/views/boy-girl/index.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        name: 'Dashboard',
        path: 'dashboard',
        component: () =>
          import(
            /* webpackChunkName: "dashboard"*/ '@/views/dashboard/index.vue'
          ),
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    redirect: '/about/index',
    children: [
      {
        path: 'index',
        name: 'About',
        component: () =>
          import(/*webpackChunkName: "about"*/ '@/views/About.vue')
      }
    ]
  }
];

const createRouter = () =>
  new VueRouter({
    mode: 'history', // require service support
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

export default router;

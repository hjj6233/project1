import Vue from 'vue';
import Router from 'vue-router';
import Add from './views/Add.vue';
import Home from './views/Home.vue';
import List from './views/List.vue';
import Login from './views/Login.vue';
import User from './views/User.vue';
import Info from './views/Info.vue';
import Component from './views/Component.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'component',
      component: Component,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:'list',
          name:'list',
          component:()=>import('./views/List.vue')
        },
        {
          path:'user',
          name:'user',
          component:()=>import('./views/User.vue')
        },
      ]
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
    },
  ],
});

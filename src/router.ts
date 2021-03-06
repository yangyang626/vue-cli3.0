import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/first',
      name: 'first',
      component: () => import('./views/first.vue')
    },
    {
      path: '/eCharts',
      name: 'eCharts',
      component: () => import('./views/echarts.vue')
    },
    {
      path: '/aplayer',
      name: 'aplayer',
      component: () => import('./views/aplayer.vue')
    },
    {
      path: '/lucktask',
      name: 'lucktask',
      component: () => import('./views/lucktask.vue')
    },
    {
      path: '/viserLine',
      name: 'viserLine',
      component: () => import('./views/viser/index.vue'),
      children: [
        {
          path: 'line',
          name: 'line',
          component: () => import('./views/viser/line.vue')
        },
        {
          path: 'bar',
          name: 'bar',
          component: () => import('./views/viser/bar.vue')
        }
      ]
    },
    {
      path: '/es6',
      name: 'es6',
      component: () => import('./views/es6/index.vue'),
      children: [
        {
          path: 'es6-10',
          name: 'es6-10',
          component: () => import('./views/es6/10-objectNewFunction.vue')
        },
        {
          path: 'async',
          name: 'async',
          component: () => import('./views/es6/19-async.vue')
        }
      ]
    },
    {
      path: '/iviewTheme',
      name: 'iviewTheme',
      component: () => import('./views/iviewTheme/theme.vue')
    },
    {
      path: '/animate',
      name: 'animate',
      component: () => import('./views/animate/home.vue'),
      children: [
        {
          path: 'css2D',
          name: 'css2D',
          component: () => import('./views/animate/cssAnimate.vue')
        },
        {
          path: 'cube',
          name: 'cube',
          component: () => import('./views/animate/cube.vue')
        },
        {
          path: 'ceshi',
          name: 'ceshi',
          component: () => import('./views/animate/ceshi.vue')
        }
      ]
    },
    {
      path: '/code',
      name: 'code',
      component: () => import('./views/code/code.vue')
    },
    {
      path: '/pinYin',
      name: 'pinYin',
      component: () => import('./views/pinYin/index.vue'),
      children: [
        {
          path: 'chinese',
          name: 'chinese',
          component: () => import('./views/pinYin/chinese.vue')
        },
        {
          path: 'fileUpload',
          name: 'fileUpload',
          component: () => import('./views/pinYin/fileUpload.vue')
        }
      ]
    },
    {
      path: '/drag',
      name: 'drag',
      component: () => import('./views/drag/index.vue')
    },
    {
      path: '/ol',
      name: 'openLayer',
      component: () => import('./views/ol/Home.vue'),
      children: [
        {
          path: 'test',
          name: 'test',
          component: () => import('./views/ol/Test.vue')
        },
        {
          path: 'ShiLiangTuCeng',
          name: 'ShiLiangTuCeng',
          component: () => import('./views/ol/ShiLiangTuCeng.vue')
        }
      ]
    },
  ]
})

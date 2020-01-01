import Vue from 'vue'
import Router from 'vue-router'
import Index from './view/Index.vue'
import PcIndex from './view/pchome/Index.vue'
import error from './view/error/404.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      redirect: '/login'
    },
    {
      path: '/student/login',
      name: 'login',
      redirect: '/login'
    },
    {
      path: '*',
      name: '404',
      component: error
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./view/Login.vue')
    },
    {
      path: '/student/pchome',
      name: 'pchome',
      component: PcIndex,
      meta: {
        requireAuth: true,
      },
      children: [{
        path: '/student/pchome',
        name: 'pchome',
        component: () => import('./view/pchome/Pchome.vue')
      },
      {
        path: '/student/pchome/perinfo',
        name: 'pcperinfo',
        component: () => import('./view/pchome/Pcperinfo.vue')
      },
      {
        path: '/student/pchome/score',
        name: 'pcscore',
        component: () => import('./view/pchome/Pcscore.vue')
      },
      {
        path: '/student/pchome/civil',
        name: 'pcscore',
        component: () => import('./view/pchome/Pccivil.vue')
      },
      {
        path: '/student/pchome/join',
        name: 'pcscore',
        component: () => import('./view/pchome/Pcjoin.vue')
      },
      {
        path: '/student/pchome/about',
        name: 'pcscore',
        component: () => import('./view/pchome/Pcabout.vue')
      },
      {
        path: '/student/pchome/qcxbook',
        name: 'pcscore',
        component: () => import('./view/pchome/qcxbook.vue')
      }
      ]

    },
    {
      path: '/student/home',
      name: 'home',
      component: Index,
      meta: {
        requireAuth: true,
      },
      children: [{
        path: '/student/home',
        name: 'home',
        component: () => import('./view/home/Index.vue'),

      },

      {
        path: '/student/profile',
        name: 'profile',
        component: () => import('./view/profile/Index.vue'),

      },
      {
        path: '/student/suggest',
        name: 'profile',
        component: () => import('./view/profile/phoneqcxbook.vue'),

      },
      {
        path: '/student/join',
        name: 'profile',
        component: () => import('./view/profile/join.vue'),

      },
      ],
    }
    // {
    //   path: '/admin/home',
    //   name: 'adminHome',
    //   component: () => import('./view/admin/Index.vue')
    // }
  ]
})

router.beforeEach((to, from, next) => {
  // if (to.meta.requireAuth) {
  //   next({
  //     path: '/login'
  //   })
  // } else {
  //   next()
  // }
  next()
})


export default router
const c1 = () => import(/* webpackChunkName: "page--src--templates--repo-detail-vue" */ "/Users/luohao/Desktop/luohao-blog/src/templates/repoDetail.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--detail-vue" */ "/Users/luohao/Desktop/luohao-blog/src/templates/detail.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--social-vue" */ "/Users/luohao/Desktop/luohao-blog/src/pages/Social.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--project-vue" */ "/Users/luohao/Desktop/luohao-blog/src/pages/Project.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/luohao/Desktop/luohao-blog/src/pages/Blog.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/luohao/Desktop/luohao-blog/node_modules/gridsome/app/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/luohao/Desktop/luohao-blog/src/pages/index.vue")

export default [
  {
    path: "/repo/detail/:id/",
    component: c1
  },
  {
    path: "/blog/detail/:id/",
    component: c2
  },
  {
    path: "/social/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/project/:page(\\d+)?/",
    component: c4
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]

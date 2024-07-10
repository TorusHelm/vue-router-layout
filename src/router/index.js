import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const layoutTabs = [
  {
    path: "/tabs/red",
    title: "red",
  },
  {
    path: "/tabs/green",
    title: "green",
  },
  {
    path: "/tabs/blue",
    title: "blue",
  },
];

const routes = [
  {
    path: "/",
    component: () => import("@/pages/index.vue"),
    meta: {
      title: "Index page",
    }
  },
  {
    path: "/page",
    component: () => import("@/pages/page.vue"),
    meta: {
      title: "Default page",
    },
  },
  {
    path: "/tabs",
    component: () => import("@/layouts/components/stub.vue"),
    redirect: "/tabs/red",
    meta: {
      layout: "tabs",
      layoutTabs,
    },
    children: [
      {
        path: "red",
        component: () => import("@/layouts/components/stub.vue"),
        children: [
          {
            path: "",
            component: () => import("@/pages/tabs/red/index.vue"),
          },
          {
            path: "orange",
            component: () => import("@/pages/tabs/red/pages/orange.vue"),
            meta: {
              layout: "extra"
            },
          },
          {
            path: "tomato",
            component: () => import("@/pages/tabs/red/pages/tomato.vue"),
            meta: {
              layout: "extra"
            },
          }
        ],
      },
      {
        path: "green",
        component: () => import("@/pages/tabs/green.vue"),
      },
      {
        path: "blue",
        component: () => import("@/pages/tabs/blue.vue"),
      }
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

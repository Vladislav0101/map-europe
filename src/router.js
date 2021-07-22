import Vue from "vue";
import VueRouter from 'vue-router'

import Projects from './pages/Projects.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "main",
      path: '/projects',
      component: Projects,
      meta: {
        requiresAuth: true
      }
    },
  ]
});

export default router;
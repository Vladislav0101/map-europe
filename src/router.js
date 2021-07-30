import Vue from "vue";
import VueRouter from 'vue-router'

import Main from './pages/Main.vue'
import Projects from './pages/Projects.vue'

import First from './components/MainHeader/First.vue'
import Second from './components/MainHeader/Second.vue'
import Third from './components/MainHeader/Third.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: "main",
      path: '',
      component: Main,
      children: [
        {
          path: 'first',
          component: First
        },
        {
          path: 'second',
          component: Second
        },
        {
          path: 'third',
          component: Third
        }
      ]
    },
    {
      name: "projects",
      path: '/projects',
      component: Projects,
    },
  ]
});

export default router;
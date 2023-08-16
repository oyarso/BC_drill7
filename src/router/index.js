import Vue from 'vue'
import VueRouter from 'vue-router'
import CursosView from '../views/CursosView.vue';
import AddView from '../views/AddView.vue';
import AddPlusView from '../views/AddPlusView.vue';
import NotFoundComponent from '@/components/NotFoundComponent.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'cursos',
    component: CursosView
  },
  {
    path: '/add',
    name: 'add',
    component: AddView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AddPlusView
  },
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: NotFoundComponent,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router';
import HomeMain from '../views/HomeMain.vue';
const UserDetails = () => import('../views/UserDetails.vue');

const routes = [
  { path: '/', name: 'HomeMain', component: HomeMain },
  { path: '/user/:id', name: 'UserDetails', component: UserDetails, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
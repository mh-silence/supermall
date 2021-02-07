import Vue from 'vue'
import Router from 'vue-router'

const Home = ()=>import('../views/Home.vue');
const Category = ()=>import('../views/Category.vue');
const Cart = ()=>import('../views/Cart.vue');
const Profile = ()=>import('../views/Profile.vue');

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
];

const router = new Router({
  routes,
  mode:'history'
});

export default router;
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 首页
const Home = () => import('views/home/Home')
const Score = () => import('views/score/Score')
const StudentInfo = () => import('views/studentinfo/StudentInfo')

// 购物车
const Cart = () => import('views/cart/Cart')

// 订单
const Order = () => import('views/order/Order')

// 个人空间
const Porfile = () => import('views/profile/Profile')
const Login = () => import('views/login/Login')
const Register = () => import('views/register/Register')

let routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component:Home
    },
    {
        path: '/score',
        component: Score
    },
    {
        path: '/studentinfo',
        component: StudentInfo
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/porfile',
        component: Porfile
    },
    {
        path: '/order',
        component: Order
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
]

const router = new VueRouter({
    routes,
    mode:'history'
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
    if(to.path === '/cart'|| to.path === '/order') {
      let token = localStorage.getItem('token');
      if (token === null || token === '') {
        next('/login');
      } else {
        next();
      }
    } else {
      next ()
    }
  })

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import login from '../views/auth/login'
import register from '../views/auth/register'
import dashboard from '../views/dashboard'
import users from '../views/users'
import user from '../views/users/user'
import accounts from '../views/accounts'
import tellers from '../views/tellers'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        },
        {
            path: '/register',
            name: 'register',
            component: register,
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: dashboard,
        },
        {
            path: '/users',
            name: 'users',
            component: users,
        },
        {
            path: '/users/:id',
            name: 'user',
            component: user,
        },
        {
            path: '/tellers',
            name: 'tellers',
            component: tellers,
        },
        {
            path: '/accounts',
            name: 'accounts',
            component: accounts,
        },
    ],
})
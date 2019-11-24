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
            path: '/admin/dashboard',
            name: 'dashboard',
            component: dashboard,
        },
        {
            path: '/admin/users',
            name: 'users',
            component: users,
        },
        {
            path: '/admin/users/:id',
            name: 'user',
            component: user,
        },
        {
            path: '/admin/tellers',
            name: 'tellers',
            component: tellers,
        },
        {
            path: '/admin/accounts',
            name: 'accounts',
            component: accounts,
        },
    ],
})
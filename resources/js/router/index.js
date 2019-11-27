import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import login from '../views/auth/login'
import dashboard from '../views/dashboard'
import users from '../views/users'
import user from '../views/users/user'

import accounts from '../views/accounts'
import account from '../views/accounts/account'

import tellers from '../views/tellers'
import teller from '../views/tellers/teller'

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
            path: '/dashboard',
            name: 'dashboard',
            component: dashboard,
        },

        // Users
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

        // Tellers
        {
            path: '/tellers',
            name: 'tellers.index',
            component: tellers,
        },
        {
            path: '/tellers/:id',
            name: 'tellers.show',
            component: teller,
        },

        // Accounts
        {
            path: '/accounts',
            name: 'accounts.index',
            component: accounts,
        },
        {
            path: '/accounts/:id',
            name: 'accounts.show',
            component: account,
        },
    ],
})
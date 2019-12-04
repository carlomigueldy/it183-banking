import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Login from '../views/auth/login'
import Dashboard from '../views/dashboard'
import Users from '../views/users'
import User from '../views/users/user'

import Accounts from '../views/accounts'
import Account from '../views/accounts/account'

import Tellers from '../views/tellers'
import Teller from '../views/tellers/teller'

import TransactionWithdraw from '../views/transactions/withdraw'
import TransactionDeposit from '../views/transactions/deposit'
import TransactionLogs from '../views/transactions/logs'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
        },

        // Users
        {
            path: '/users',
            name: 'users',
            component: Users,
        },
        {
            path: '/users/:id',
            name: 'user',
            component: User,
        },

        // Tellers
        {
            path: '/tellers',
            name: 'tellers.index',
            component: Tellers,
        },
        {
            path: '/tellers/:id',
            name: 'tellers.show',
            component: Teller,
        },

        // Accounts
        {
            path: '/accounts',
            name: 'accounts.index',
            component: Accounts,
        },
        {
            path: '/accounts/:id',
            name: 'accounts.show',
            component: Account,
        },
        
        // Transactions
        {
            path: '/logs',
            name: 'transaction.logs',
            component: TransactionLogs,
        },
        {
            path: '/withdraw',
            name: 'transaction.withdraw',
            component: TransactionWithdraw,
        },
        {
            path: '/deposit',
            name: 'transaction.deposit',
            component: TransactionDeposit,
        },
    ],
})
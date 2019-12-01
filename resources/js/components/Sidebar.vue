<template>
    <v-navigation-drawer
        v-model="$store.state.appbar.drawer"
        dark
        app
        overflow
    >
        <v-list-item>
            <v-list-item-content class="text-center">
                <v-list-item-title class="title">
                    Stormwind Bank
                </v-list-item-title>
                <v-list-item-subtitle>
                    The Alliance ultimate banking
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    
        <v-list-item two-line>
            <v-list-item-avatar>
                <img src="/img/default/default.png">
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>{{ auth.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ authRole.name }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list shaped>
            <v-list-item 
                :to="{ name: 'dashboard' }"
                >
                <v-list-item-icon>
                    <v-icon>mdi-view-dashboard-outline</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-group
                no-action
                prepend-icon="mdi-finance"
            >
                <template v-slot:activator>
                    <v-list-item-title>Transactions</v-list-item-title>
                </template>

                <v-list-item 
                    dense
                    v-if="authRole.name === 'Manager' || authRole.name === 'Teller'"
                    :to="{ name: 'transaction.deposit' }"
                    >
                    <v-list-item-icon>
                        <v-icon>mdi-bank-transfer-in</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Deposit</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item 
                    dense
                    v-if="authRole.name === 'Manager' || authRole.name === 'Teller'"
                    :to="{ name: 'transaction.withdraw' }"
                    >
                    <v-list-item-icon>
                        <v-icon>mdi-bank-transfer-out</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Withdraw</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>

            <v-list-item 
                v-if="authRole.name === 'Manager'"
                :to="{ name: 'tellers.index' }"
                >
                <v-list-item-icon>
                    <v-icon>mdi-account-tie-outline</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Tellers</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item 
                v-if="authRole.name === 'Manager' || authRole.name === 'Teller'"
                :to="{ name: 'accounts.index' }"
                >
                <v-list-item-icon>
                    <v-icon>mdi-account-group</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Accounts</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item @click="logout">
                <v-list-item-icon>
                    <v-icon>mdi-logout</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Logout</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Sidebar',
    data: () => ({
        background: window.origin + '/img/sidebar/bfa_alliance.jpg',
    }),

    computed: {
        ...mapGetters(['auth', 'authRole'])
    },

    methods: {
        logout() {
            this.authLogOut()
        },
        
        ...mapActions(['authLogOut'])
    },
}
</script>
<template>
    <v-navigation-drawer
        dark
        app
        permanent
        overflow
    >
        <v-list-item>
            <v-list-item-content class="text-center">
                <v-list-item-title class="title">
                    Stormwind Bank
                </v-list-item-title>
                <v-list-item-subtitle>
                    Subtitle
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

        <v-list>
            <v-list-item 
                v-for="(route, index) in routes" :key="index"
                :to="{ name: route.name }">
                <v-list-item-icon>
                    <v-icon>{{ route.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ route.title }}</v-list-item-title>
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
        routes: [
            {
                name: 'dashboard',
                icon: 'mdi-view-dashboard-outline',
                title: 'Dashboard',
            },
            {
                name: 'tellers',
                icon: 'mdi-account-tie-outline',
                title: 'Tellers',
            },
            {
                name: 'accounts',
                icon: 'mdi-account-group',
                title: 'Accounts',
            },
        ]
    }),

    computed: mapGetters(['auth', 'authRole']),

    methods: {
        logout() {
            this.authLogOut()
        },
        
        ...mapActions(['authLogOut'])
    },
}
</script>
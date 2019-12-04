<template>
    <v-content>
        <v-card>
            <v-card-title>
                <v-icon>mdi-account-group</v-icon> <span class="ml-3">Accounts</span>
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>

                <CreateAccount />
            </v-card-title>

            <v-data-table
                :headers="headers"
                :items="getAccounts"
                :search="search"
            >
                <template v-slot:item.avatar="{ item }">
                    <v-avatar>
                        <img src="/img/default/default.png">
                    </v-avatar>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-row>
                        <v-col>
                            <v-btn-toggle
                                >
                                <v-btn>
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </v-btn-toggle>
                        </v-col>
                    </v-row>
                </template>
            </v-data-table>
        </v-card>

    </v-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CreateAccount from './components/create'

export default {
    name: 'accounts',
    components: { CreateAccount },
    
    data: () => ({
        search: '',
        headers: [
            {
                text: 'Avatar',
                align: 'center',
                sortable: false,
                value: 'avatar',
            },
            {
                text: 'Account Number',
                align: 'left',
                sortable: true,
                value: 'account.account_number',
            },
            {
                text: 'Name',
                align: 'left',
                sortable: true,
                value: 'name',
            },
            {
                text: 'E-mail',
                align: 'left',
                sortable: true,
                value: 'email',
            },
            {
                text: 'Actions',
                align: 'center',
                sortable: false,
                value: 'actions',
            }
        ]
    }),
    
    created() {
        this.fetchAllAccounts()
    },
    
    computed: mapGetters(['getAccounts', 'getAccessToken']),
    
    methods: {
        fetchAllAccounts() {
            const access_token = this.getAccessToken
            this.fetchAccounts(access_token)
        },

        removeAccount(id) {
            console.log('removeAccount()', id)
            this.deleteAccount(id)
        },
        
        ...mapActions(['fetchAccounts', 'deleteAccount']),
    },
}
</script>
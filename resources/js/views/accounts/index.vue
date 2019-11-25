<template>
    <v-content>
        <v-card>
            <v-card-title>
                Accounts
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-search"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
                
                <v-btn color="success">Add Account Holder</v-btn>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="getAccounts"
                :search="search"
            ></v-data-table>
        </v-card>
    </v-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'accounts',
    data: () => ({
        search: '',
        headers: [
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
        
        ...mapActions(['fetchAccounts']),
    },
}
</script>
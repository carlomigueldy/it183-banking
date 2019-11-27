<template>
    <v-content>
        <v-card>
            <v-card-title>
                Accounts
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
                <template v-slot:item.actions="{ item }">
                    <v-row>
                        <v-col>
                            <v-btn-toggle
                                >
                                <v-btn
                                    @click="$router.push({ name: 'accounts.show', params: { id: item.id } })"
                                    >
                                    <v-icon>mdi-eye</v-icon>
                                </v-btn>
                                <v-btn>
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                                <v-btn>
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </v-btn-toggle>
                        </v-col>
                    </v-row>
                </template>
            </v-data-table>
        </v-card>

        <Snackbar />
    </v-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CreateAccount from './components/create'
import Snackbar from './components/snackbar'

export default {
    name: 'accounts',
    components: { CreateAccount, Snackbar },
    
    data: () => ({
        search: '',
        headers: [
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
        
        ...mapActions(['fetchAccounts']),
    },
}
</script>
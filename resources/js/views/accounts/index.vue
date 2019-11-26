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

                <v-btn 
                    class="ml-5 mt-3"
                    color="success">
                    <v-icon>mdi-plus</v-icon>
                    Add Account
                </v-btn>
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
<template>
    <v-content>
        <v-card>
            <v-card-title>
                Tellers
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-search"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
                
                <v-btn color="success">Add Teller</v-btn>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="getTellers"
                :search="search"
            ></v-data-table>
        </v-card>
    </v-content>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'tellers',
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
            },
        ]
    }),

    created() {
        this.fetchAllTellers()
    },

    computed: mapGetters(['getTellers', 'getAccessToken']),

    methods: {
        fetchAllTellers() {
            const access_token = this.getAccessToken
            this.fetchTellers(access_token)
        },

        ...mapActions(['fetchTellers']),
    }
}
</script>
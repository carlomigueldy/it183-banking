<template>
    <v-content>
        <v-card>
            <v-card-title>
                <v-icon>mdi-account-tie-outline</v-icon> <span class="ml-3">Logs</span>
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>

            <v-data-table
                :headers="headers"
                :items="mappedLogs"
                :search="search"
                :items-per-page="50"
            ></v-data-table>
        </v-card>
    </v-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    created() {
        this.fetchLogs()
    },

    data: () => ({
        search: '',
        headers: [
            {
                text: 'Log',
                align: 'left',
                sortable: false,
                value: 'log_message',
            },
        ]
    }),
    
    methods: mapActions(['fetchLogs']),
    
    computed: mapGetters(['getLogs', 'mappedLogs']),
}
</script>
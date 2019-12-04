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

                <CreateTeller />
            </v-card-title>

            <v-data-table
                :headers="headers"
                :items="getLogs"
                :search="search"
            ></v-data-table>
        </v-card>
    </v-content>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: mapGetters(['getLogs']),
}
</script>
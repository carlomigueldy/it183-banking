<template>
    <v-content>
        <v-card>
            <v-card-title>
                <v-icon>mdi-account-tie-outline</v-icon> <span class="ml-3">Tellers</span>
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
                :items="getTellers"
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
                                <v-btn @click="$router.push({ name: 'tellers.show', params: { id: item.id } })">
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
import CreateTeller from './components/create'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'tellers',
    components: { CreateTeller },
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
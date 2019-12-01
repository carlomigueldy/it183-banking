<template>
    <v-content>
        <v-row>
            <v-col cols="4">
                <v-card height="100%">
                    <v-card-text>
                        <div class="text-center">
                            <v-avatar class="mb-3" size="144">
                                <img src="/img/default/default.png">
                            </v-avatar>
                            <div class="headline">{{ getTeller.teller.name }}</div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="8">
                {{ getTeller }}
                <v-data-table
                :headers="headers"
                :items="getTeller.teller.account_transactions"
                :items-per-page="5"
                class="elevation-1"
                ></v-data-table>
            </v-col>
        </v-row>
    </v-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'teller',

    data: () => ({
        headers: [
            {
                text: 'Account Number',
                align: 'left',
                sortable: true,
                value: 'getTeller.teller.account_transactions.account_id',
            },
        ]
    }),

    created() {
        this.fetchTeller(this.$route.params.id)
    },

    computed: mapGetters(['getTeller']),

    methods: {
        ...mapActions(['fetchTeller']),
    }
}
</script>
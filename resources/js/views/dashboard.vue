<template>
    <v-content>
        <v-row>
            <v-col cols="8">
                <v-card height="100%">
                    <v-card-title>
                        <v-icon>mdi-view-dashboard-outline</v-icon> 
                        <span class="ml-3">Dashboard</span>
                    </v-card-title>
                    <v-card-text>Welcome to the Stormwind Banking App, {{ auth.name }}.</v-card-text>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card>
                    <v-card-title><v-icon>mdi-calendar</v-icon> <span class="ml-3">Calendar</span></v-card-title>
                    <v-sheet>
                        <v-calendar
                        type="month"
                        now="2019-01-08"
                        value="2019-01-08"
                        ></v-calendar>
                    </v-sheet>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <app-sparkline
                title="Daily Withdrawals"
                linecolor="rgba(230, 52, 52, .7)"
                prefix="$"
                :value="withdrawals"></app-sparkline>
            </v-col>
            <v-col>
                <app-sparkline
                title="Daily Deposits"
                linecolor="rgba(81, 205, 62, .7)"
                prefix="$"
                :value="deposits"></app-sparkline>
            </v-col>
            <v-col>
                <app-sparkline
                title="New Accounts per Month"
                linecolor="rgba(13, 70, 161, .7)"
                :value="accounts"></app-sparkline>
            </v-col>
        </v-row>
    </v-content>
</template>

<script>
import { mapGetters } from 'vuex'
import sparkline from '../components/Sparkline'

export default {
    name: 'dashboard',
    components: {
        "app-sparkline": sparkline,
    },

    computed: mapGetters(['auth']),

    data: () => ({
        withdrawals: [
            1500, 2500, 300, 200, 2400,
        ],
        deposits: [
            5000, 4500, 15500, 1500, 500
        ],
        accounts: [
            40, 5, 22, 2, 10, 80
        ],
    }),
}
</script>
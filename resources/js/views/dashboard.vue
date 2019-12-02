<template>
    <v-content>
        <div v-if="authRole.name !== 'Account Holder'">
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
        </div>

        <div v-else>
            <v-row>
                <v-col>
                    <v-card>
                        <v-card-title>
                            <v-icon>mdi-view-dashboard-outline</v-icon> 
                            <span class="ml-3">Dashboard</span>
                        </v-card-title>
                        <v-card-text>
                            <div class="text-left">Welcome back, <span class="headline">{{ auth.name }}</span>.</div>
                            <div class="text-center">
                                <div class="headline">
                                    Your current balance is 
                                    <div class="display-3 blue--text">$ {{ auth.account.balance }}</div>
                                </div>
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-text-field
                            label="Withdraw Amount"
                            rounded
                            filled
                            v-model="amount"
                            type="number"
                            min="0"
                            step="0.01"
                            ></v-text-field>
                            <v-btn 
                                @click="withdraw()"
                                depressed 
                                large 
                                rounded>
                                Withdraw
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col lg="3" md="4" sm="6">
                    <v-card height="100%" class="text-center">
                        <v-card-text>
                            <v-icon color="green" size="64">mdi-piggy-bank</v-icon>
                            <div class="headline">Savings</div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col lg="3" md="4" sm="6">
                    <v-card height="100%" class="text-center">
                        <v-card-text>
                            <v-icon color="orange darken-4" size="64">mdi-bitcoin</v-icon>
                            <div class="headline">Bitcoin</div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col lg="3" md="4" sm="6">
                    <v-card height="100%" class="text-center">
                        <v-card-text>
                            <v-icon color="yellow darken-1" size="64">mdi-coins</v-icon>
                            <div class="headline">Coins</div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col lg="3" md="4" sm="6">
                    <v-card height="100%" class="text-center">
                        <v-card-text>
                            <v-icon color="red darken-1" size="64">mdi-finance</v-icon>
                            <div class="headline">Finance</div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import sparkline from '../components/Sparkline'

export default {
    name: 'dashboard',
    components: {
        "app-sparkline": sparkline,
    },

    computed: mapGetters(['auth', 'authRole']),

    data: () => ({
        amount: '',
        withdrawals: [
            1500, 2500, 300, 200, 2400, 200,
        ],
        deposits: [
            5000, 4500, 15500, 1500, 500
        ],
        accounts: [
            40, 5, 22, 2, 10, 80
        ],
    }),

    methods: {
        withdraw() {
            this.userWithdrawCash({
                amount: this.amount,
            })
        },

        ...mapActions(['userWithdrawCash'])
    }
}
</script>
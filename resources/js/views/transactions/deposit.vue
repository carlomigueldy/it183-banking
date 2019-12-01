<template>
    <v-content>
        <v-card>
            <v-card-title>
                <v-icon>mdi-bank-transfer-out</v-icon> <span class="ml-3">Deposit</span>
            </v-card-title>

            <v-card-text>
                <v-row>
                    <v-col cols="5">
                        <v-form>
                            <v-row>
                                <v-col cols="8">
                                    <v-text-field
                                    label="Account Number"
                                    v-model="account_number"
                                    placeholder="e.g., 1574910360"
                                    filled
                                    rounded
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <div class="pt-5">
                                        <v-btn 
                                            depressed
                                            rounded
                                            @click="check">
                                            Check
                                        </v-btn>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-form>
                        <div v-if="getAccount.name">
                            <div>
                                Account Number: <span class="subtitle-2">{{ getAccount.account_number }}</span>
                            </div>
                            <div>
                                Name: <span class="subtitle-2">{{ getAccount.name }}</span>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="7">
                        <div class="text-center">
                            <div>Amount to Deposit</div> 
                            <div class="display-3 font-weight-bold">
                                {{ amount ? `$ ${amount}` : '' }}
                            </div>
                        </div>
                        <v-text-field
                        label="Enter Amount"
                        v-model="amount"
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="Enter an amount"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data: () => ({
        amount: 0.00,
        account_number: '',
    }),

    created() {
        // this.fetchAccounts()
    },

    computed: {
        ...mapGetters(['getAccounts', 'getAccount']),
    },

    methods: {
        check() {
            this.checkAccount(this.account_number)
        },
        
        ...mapActions(['fetchAccounts', 'checkAccount']),
    }
}
</script>
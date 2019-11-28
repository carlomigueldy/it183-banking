<template>
    <v-dialog
        v-model="$store.state.tellers.dialog"
        width="500"
        >
        <template v-slot:activator="{ on }">
            <v-btn 
                v-on="on"
                class="ml-5 mt-3"
                color="success"
            >
                <v-icon>mdi-plus</v-icon>
                Add teller 
            </v-btn>
        </template>

        <v-card>
            <v-card-title
                primary-title
            >
                Add New Teller
            </v-card-title>

            <v-card-text>
                <v-form>
                    <v-container>
                        <v-text-field
                            v-model="teller.name"
                            label="Name"
                            required
                            placeholder="John Doe"
                        ></v-text-field>
                        <v-text-field
                            v-model="teller.email"
                            label="E-Mail Address"
                            required
                            placeholder="john.doe@gmail.com"
                            type="email"
                        ></v-text-field>
                        <v-text-field
                            v-model="teller.password"
                            label="Password"
                            required
                            type="password"
                        ></v-text-field>
                        <v-text-field
                            v-model="teller.password_confirmation"
                            label="Confirm Password"
                            required
                            type="password"
                        ></v-text-field>
                    </v-container>
                </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                @click="submitForm"
            >
                Submit
            </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data: () => ({
        teller: {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        },
    }),

    methods: {
        submitForm() {
            this.addTeller(this.teller)
        },
        
        ...mapActions(['addTeller']),
    },
}
</script>
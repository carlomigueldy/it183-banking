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
                Add Teller 
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
                            v-model="$store.state.tellers.form.name"
                            label="Name"
                            required
                            placeholder="John Doe"
                        ></v-text-field>
                        <v-text-field
                            v-model="$store.state.tellers.form.email"
                            label="E-Mail Address"
                            required
                            placeholder="john.doe@gmail.com"
                            type="email"
                        ></v-text-field>
                        <v-text-field
                            v-model="$store.state.tellers.form.password"
                            label="Password"
                            required
                            type="password"
                        ></v-text-field>
                        <v-text-field
                            v-model="$store.state.tellers.form.password_confirmation"
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
                @click="addTeller"
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
    methods: mapActions(['addTeller']),
}
</script>
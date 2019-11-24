<template>
    <v-content>
        <v-card>
            <v-card-title>Users</v-card-title>
            <v-card-text>
                A listing of all users.
                <v-btn @click="$router.push({ name: 'user', params: { id: '1' } })">go</v-btn>
            </v-card-text>
        </v-card>
    </v-content>
</template>

<script>
export default {

}
</script>
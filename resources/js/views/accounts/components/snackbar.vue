<template>
    <v-snackbar
        v-model="$store.state.accounts.snackbar.toggle"
        right
    >
        {{ $store.state.accounts.snackbar.text }}
        <v-btn
            color="error"
            text
            @click="$store.state.accounts.snackbar.toggle = false"
        >
            Close
        </v-btn>
    </v-snackbar>
</template>

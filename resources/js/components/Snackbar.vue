<template>
    <v-snackbar
        v-model="$store.state.snackbar.toggle"
        right
    >
        {{ $store.state.snackbar.text }}
        <v-btn
            color="error"
            text
        >
            Close
        </v-btn>
    </v-snackbar>
</template>
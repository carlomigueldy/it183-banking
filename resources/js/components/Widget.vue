<template>
    <v-card height="100%" class="text-center">
        <v-card-text>
            <v-icon :color="color" size="64">{{ icon }}</v-icon>
            <div class="headline">{{ title }}</div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        color: String,
        icon: String,
        title: String,
    }
}
</script>
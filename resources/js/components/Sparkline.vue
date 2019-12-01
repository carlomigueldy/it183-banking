<template>
    <v-card
        class="mx-auto text-center"
        height="100%"
    >
        <v-card-text>
            <v-sheet color="white">
                <v-sparkline
                    :value="value"
                    :color="linecolor"
                    height="100"
                    padding="24"
                    stroke-linecap="round"
                >
                <template v-slot:label="item">
                    {{ prefix }} {{ item.value }}
                </template>
                </v-sparkline>
            </v-sheet>
        </v-card-text>

        <v-card-text>
            <div class="headline font-weight-thin">{{ title }}</div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        title: String,
        value: Array,
        prefix: String,
        linecolor: String,
    },
    data: () => ({
      data: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
    }),
  }
</script>
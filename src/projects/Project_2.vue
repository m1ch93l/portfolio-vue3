<template>
<v-card class="mx-auto" max-width="344">
    <v-img src="../assets/stock-card-system.png" height="200px" cover></v-img>

    <v-card-title>
        Stock Card System
    </v-card-title>

    <v-card-subtitle>
        PHP and JS
    </v-card-subtitle>

    <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text" href="https://github.com/m1ch93l/stock-card-invesys">
            Explore
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>

    <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
                A basic system to identifying the amount of items stored in a warehouse.
            </v-card-text>
        </div>
    </v-expand-transition>
</v-card>
</template>

<script>
export default {
    data: () => ({
        show: false,
    }),
}
</script>

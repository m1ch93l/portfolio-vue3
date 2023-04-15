<template>
    <v-footer
        class="bg-indigo-lighten-1 text-center d-flex flex-column"
    >
        <div class="my-5 py-5">
            <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 my-3 border-lg"
                :icon="icon"
                size="x-large"
                variant="text"
            ></v-btn>
        </div>

        <div class="pt-0">
        Connect with me
        </div>

        <v-divider></v-divider>

        <div>
        {{ new Date().getFullYear() }} — <strong>Portfolio</strong>
        </div>
    </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
<template>
  <v-container>
    <Home/>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Home from '../components/Home.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    Home,
  },
});
</script>

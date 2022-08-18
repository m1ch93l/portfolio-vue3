<template>
  <HelloWorld />
  <PortraitViewDivider />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue'
import PortraitViewDivider from '../components/PortraitViewDivider.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld, PortraitViewDivider,
  },
});
</script>

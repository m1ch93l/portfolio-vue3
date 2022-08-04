<template>
  <AboutCom/>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import AboutCom from '../components/AboutCom.vue';

export default defineComponent({
  name: 'AboutView',

  components: {
    AboutCom,
  },
});
</script>

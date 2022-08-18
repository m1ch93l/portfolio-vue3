<template>
  <ProjectCom />
  <CardCom />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import ProjectCom from '../components/ProjectCom.vue'
import CardCom from '../components/CardCom.vue'

export default defineComponent({
  name: 'ProjectView',

  components: {
    ProjectCom, CardCom,
  },
});
</script>
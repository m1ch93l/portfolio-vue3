<template>
  <ProjectCom />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import ProjectCom from '../components/ProjectCom.vue';

export default defineComponent({
  name: 'ProjectView',

  components: {
    ProjectCom,
  },
});
</script>
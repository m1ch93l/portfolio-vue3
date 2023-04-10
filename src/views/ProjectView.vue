<template>
  <ProjectTitle/>
  <CardCom />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import CardCom from '../components/CardCom.vue'
import ProjectTitle from '@/components/ProjectTitle.vue';

export default defineComponent({
  name: 'ProjectView',

  components: {
    CardCom,
    ProjectTitle
},
});
</script>
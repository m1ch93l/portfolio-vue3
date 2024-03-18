<template>
<ProjectTitle />

<v-container>
    <v-row no-gutters>
        <v-col cols="12" sm="4">
            <v-sheet class="ma-2 pa-2">
                <Project1 />
            </v-sheet>
        </v-col>
        <v-col cols="12" sm="4">
            <v-sheet class="ma-2 pa-2">
                <Project2 />
            </v-sheet>
        </v-col>
        <v-col cols="12" sm="4">
            <v-sheet class="ma-2 pa-2">
                <Project3 />
            </v-sheet>
        </v-col>
    </v-row>
</v-container>

</template>

<script>
import {
    defineComponent
} from 'vue';

// Components
//import CardCom from '../components/CardCom.vue'
import ProjectTitle from '@/components/ProjectTitle.vue';
import Project1 from '@/projects/Project_1.vue';
import Project2 from '@/projects/Project_2.vue';
import Project3 from '@/projects/Project_3.vue';

export default defineComponent({
    name: 'ProjectView',

    components: {
        //CardCom,
        ProjectTitle,
        Project1,
        Project2,
        Project3
    },
});
</script>

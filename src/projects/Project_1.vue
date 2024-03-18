<template>
<v-card class="mx-auto" max-width="344">
    <v-img src="../assets/facultyEvaluationSystem.jpg" height="200px" cover></v-img>

    <v-card-title>
        Faculty Evaluation System
    </v-card-title>

    <v-card-subtitle>
        Procedural PHP
    </v-card-subtitle>

    <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text" href="https://github.com/m1ch93l/faculty-evaluation-system-procedural-php">
            Explore
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>

    <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
                The purpose of THE BCC MOBILE AND WEB-BASED FACULTY EVALUATION SYSTEM is to provide an image of the faculty's performance based on feedback from a variety of sources, including clients, subordinates, peers, students, and others, so that the manager or coordinator of the school can make an informed decision. And they can make sound decisions and know how to evaluate employees if their tasks are doing well. This system will assist administrators in determining whether their employees are making appropriate decisions for their assigned assignment and may be evaluated at any moment. From this perspective, performance evaluation fulfills two critical functions: motivation and training.
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

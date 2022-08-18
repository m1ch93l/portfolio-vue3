<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="../assets/facultyEvaluationSystem.jpg"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      Faculty Evaluation System
    </v-card-title>

    <v-card-subtitle>
      Procedural PHP
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
        href="https://github.com/m1ch93l/faculty-evaluation-system-procedural-php"
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          The project overview of THE BCC MOBILE AND WEB-BASED FACULTY EVALUATION SYSTEM. The uses of this system is to provide an image that can see the performance of the faculty from the feedback from multiple sources including clients, subordinates, peers, students, and more, so they accurately use of the manager or the coordinator of the school. And they can make a good decision and know how to evaluate the employee if their task is doing good. This system will be going to help the administrator to identify if their employee is making a good decision that can suite for their assigned task and can evaluate anytime. From this viewpoint, performance evaluation fulfills this important functions, the motivation and training.
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
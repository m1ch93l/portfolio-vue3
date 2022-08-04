<template>
    <v-app-bar>
        <div class="d-flex justify-space-between">
            <v-btn variant="flat">
                <router-link to="/">Home</router-link>
            </v-btn>
            <v-btn variant="flat">
                <router-link :to="{ name: 'about' }">About</router-link>
            </v-btn>
            <v-btn variant="flat">
                <router-link :to="{ name: 'project' }">Project</router-link>
            </v-btn>
        </div>
    </v-app-bar>
</template>

<style scoped>
a{
    text-decoration: none;
}
</style>
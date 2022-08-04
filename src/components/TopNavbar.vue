<template>
    <v-app-bar>
        <div class="d-flex justify-space-between">
            <v-btn
                v-for="route in routes"
                :key="route.name"
                :to="{ name: route.name }"
                :variant="$route.name === route.name ? 'outlined' : 'flat'"
            >
                {{ route.text }}
            </v-btn>
        </div>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'TopNavbar',
        data() {
            return {
                routes: [
                    {
                        text: 'Home',
                        name: 'home'
                    },
                    {
                        text: 'About',
                        name: 'about'
                    },
                    {
                        text: 'Project',
                        name: 'project'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>

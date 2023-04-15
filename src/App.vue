<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <!-- Sidebar content goes here -->
      <PortraitViewDivider />
      <SidebarFooter/>
    </v-navigation-drawer>
    
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Just learning something new every day</v-toolbar-title>
      <TopNavbar/>
    </v-app-bar>
    <v-main>
      <router-view/>
      <!-- Main content goes here -->
      
    </v-main>
  </v-app>
</template>



<script>
import TopNavbar from '@/components/TopNavbar.vue'
import PortraitViewDivider from './components/PortraitViewDivider.vue';
import SidebarFooter from './components/SidebarFooter.vue';

export default {
  name: 'App',
  components: { TopNavbar, PortraitViewDivider, SidebarFooter },

  data: () => ({
    //
    drawer: true,
    
  }),
}
</script>

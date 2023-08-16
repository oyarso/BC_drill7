<template>
  <v-app>
    
   
    <div id="app">
    <NavBar>
      <router-link to="/">Home</router-link> |
    </NavBar>
    <router-view />
    <FooterComponent />
  </div>


  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent,
  }
};
</script>

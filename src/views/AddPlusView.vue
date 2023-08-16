<template>
    <div class="background_app">
      <router-view />
      <AddPlusComponent />
      <hr>
  
  
    </div>
  </template>
          
  <script>
  
  
  import AddPlusComponent from '@/components/AddPlusComponent.vue'
  export default {
    name: 'AddView',
    components: {
      AddPlusComponent,
  
    }
  
  }
  
  </script>
          
  <style scoped></style>
          
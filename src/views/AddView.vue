<template>
  <div class="background_app">
    <router-view />
    <AddComponent />
    <hr>


  </div>
</template>
        
<script>


import AddComponent from '@/components/AddComponent.vue'
export default {
  name: 'AddView',
  components: {
    AddComponent,

  }

}

</script>
        
<style scoped></style>
        
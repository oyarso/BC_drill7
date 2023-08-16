<template>



    <div>
        <nav class="navbar navbar-expand-lg navbar border-bottom bg-purpura">
            
            <div class="container-fluid">
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        
                    </li>
                    <router-link  class="nav-link active text-light" aria-current="page" to="/">Cursos AlfaWeb</router-link>    
                    <router-link  class="nav-link active text-light" aria-current="page" to="/add">Add</router-link>    
                    
              
                </ul>
                
            </div>
      <div class="container text-end">
        
<i class="fa fa-home" style="font-size:25px;color:white"></i>

<router-link  class="fas fa-tools mx-3 nav-link active text-light" aria-current="page" to="/admin"> Admin</router-link> 
    </div></div>

</nav>
  </div>

</template>
      
<script>
export default {
    name: 'NavBarVue',
    data() {
        return {

        }
    },
}
</script>
      
    
      <style scoped>
    .bg-purpura {
    background-color:rgb(115, 42, 150) !important;
}
    </style>
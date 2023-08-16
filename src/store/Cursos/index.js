import axios from 'axios';
const cursos = {
    namespaced: true,
    state:{
        acursos:{}
   
    },
    getters:{},
    mutations:{
        CONSUMIR_DATOS:(state, data)=>{
            state.acursos = data;
        },
       
    },
    actions:{
        consumirDatos:(context)=>{
           
            let url='./recursosJson/curso.json';
            axios.get(url)
                .then((res)=>{
                    res = res.data;
                    context.commit('CONSUMIR_DATOS', res);
                })
                .catch(err=>{
                    console.log(err);
                });

            
        },

        
    },
    modules:{},
};




export default cursos;




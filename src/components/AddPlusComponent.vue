<template>
    <div class="container">

        <h3 class="text-center text-dark">Administración</h3>
        <hr>
        <table class="table">
            <thead>

                <th>Nombre</th>
                <th>Url de la imagen</th>
                <th>Cupos del curso</th>
                <th>Inscritos en el curso</th>
                <th>Duración del curso</th>
                <th>Fecha de registro</th>
                <th>Costo del Curso</th>
                <th>Descripció del curso</th>

                <th></th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="(curso, indice) in cursos" v-bind:key="indice">
                    <td>
                        <span v-if="formUpdate && idUpdate == indice">
                            <input v-model="nombreUpdate" type="text" class="form-control">
                        </span>
                        <span v-else>
                            {{ curso.nombre }}
                        </span>
                    </td>
                    <td>
                        <span v-if="formUpdate && idUpdate == indice">
                            <input v-model="urlUpdate" type="text" class="form-control">
                        </span>
                        <span v-else>
                            {{ curso.url }}
                        </span>
                    </td>

                    <td>
                        <span v-if="formUpdate && idUpdate == indice">
                            <input v-model="cuposUpdate" type="text" class="form-control">
                        </span>
                        <span v-else>
                            {{ curso.cupos }}
                        </span>
                    </td>


                    <td>
                        <span v-if="formUpdate && idUpdate == indice">
                            <input v-model="inscritosUpdate" type="text" class="form-control">
                        </span>
                        <span v-else>

                            {{ curso.inscritos }}
                    </span>
                    </td>


                    <td>
                        <span v-if="formUpdate && idUpdate == indice">
                            <input v-model="duracionUpdate" type="text" class="form-control">
                        </span>
                        <span v-else>
                            {{ curso.duracion }}
                        </span>
                        </td>
                    <td>
                        <span v-if="formUpdate && idUpdate == indice">
                            <input v-model="fechaUpdate" type="text" class="form-control">
                        </span>
                        <span v-else>
                            {{ curso.fecha }}
                        </span>
                    </td>




                    <td>
                        <span v-if="formUpdate && idUpdate == indice">
                            <input v-model="costoUpdate" type="text" class="form-control">
                        </span>
                        <span v-else>
                            {{ curso.costo }}
                        </span>
                    </td>


                    <td>
                        <span v-if="formUpdate && idUpdate == indice">
                            <input v-model="descripcionUpdate" type="text" class="form-control">
                        </span>
                        <span v-else>
                            {{ curso.descripcion }}
                        </span>
                    </td>
                    <td>

                        <span v-if="formUpdate && idUpdate == indice">
                            <button v-on:click="guardar(indice)" class="btn btn-success">Guardar</button>
                        </span>
                        <span v-else>
                            <button v-on:click="verForm(indice)" class="btn btn-warning">
                                <i class="fa-solid fa-pencil"></i></button>

                            <button class="btn btn-danger" v-on:click="eliminar(indice)">
                                <i class="fas fa-trash"></i>

                            </button>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>



    </div>
</template>
  
<script>

import { mapState, mapActions } from "vuex";
export default {
    name: "AddComponent",

    data() {
        return {


            
            cursoss: [],
            form: {
                nombre: '',
                url: '',
                cupos: '',
                inscritos: '',
                duracion: '',
                fecha: '',
                costo: '',
                descripcion: '',
            },
            formUpdate: false,
            idUpdate: -1,
            nombreUpdate: '',
            urlUpdate: '',
            cuposUpdate: '',
            inscritosUpdate: '',
            duracionUpdate: '',
            fechaUpdate: '',
            costoUpdate: '',
            descripcionUpdate: '',




            
      "cursos": [
        {
          "id": 1,
          "img": "https://i.blogs.es/545cf8/es6-logo/450_1000.png",
          "nombre": "JavaScript Avanzado",
          "costo": 30000,
          "duracion": "2 meses",
          "cupos": 20,
          "inscritos": 10,
          "completado": false,
          "fecha_registro": "06/03/2022",
          "descripcion": "Curso con las nuevas actualizaciones de JavaScript"
        },
        {
          "id": 2,
          "img": "https://lineadecodigo.com/wp-content/uploads/2014/04/css.png",
          "nombre": "CSS para principiantes",
          "costo": 10000,
          "duracion": "1 mes",
          "cupos": 35,
          "inscritos": 23,
          "completado": false,
          "fecha_registro": "05/03/2022",
          "descripcion": "Aprendiendo estilos con CSS desde el nivel más básico."
        },
        {
          "id": 3,
          "img": "https://1000marcas.net/wp-content/uploads/2020/11/JavaScript-logo.jpg",
          "nombre": "JavaScript Básico de 0 a 100",
          "costo": 20000,
          "duracion": "2 meses",
          "cupos": 25,
          "inscritos": 0,
          "completado": true,
          "fecha_registro": "05/03/2022",
          "descripcion": "Programando para la web con JavaScript."
        },
        {
          "id": 4,
          "img": "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
          "nombre": "HTML Básico",
          "costo": 10000,
          "duracion": "1 mes",
          "cupos": 35,
          "inscritos": 0,
          "completado": true,
          "fecha_registro": "31/01/2022",
          "descripcion": "Aprende HTML 5 y crea tus primeras páginas web paso a paso con decenas de ejercicios."
        },
        {
          "id": 5,
          "img": "https://logosandtypes.com/wp-content/uploads/2020/08/vue.svg",
          "nombre": "Vue JS de 0 a 100",
          "costo": 85500,
          "duracion": "5 meses",
          "cupos": 35,
          "inscritos": 35,
          "completado": false,
          "fecha_registro": "06/03/2022",
          "descripcion": "Aprende desde cero como usar VueJS, cómo usarlo en aplicaciones pequeñas y ver lo que ofrece el framework."
        },
        {
          "id": 6,
          "img": "https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png",
          "nombre": "Estilos con SASS",
          "costo": 45000,
          "duracion": "1 mes",
          "cupos": 40,
          "inscritos": 35,
          "completado": false,
          "fecha_registro": "06/03/2022",
          "descripcion": "Con SASS aprenderás a escribir mejor código de CSS con todas las funciones necesarias."
        }
      ]


        };
    },
    computed: {
    ...mapState(["cursos"]),
  },
    methods: {

        methods: {
    ...mapActions(["setIdCursoEdit"]),
        addCursos() {
            if (
                this.form.nombre != "" &&
                this.form.url != "" &&
                this.form.cupos != "" &&
                this.form.inscritos != "" &&
                this.form.duracion != "" &&
                this.form.fecha != "" &&
                this.form.costo != "" &&
                this.form.descripcion != ""
            ) {
                let data = { ...this.form };
                this.cursos.push(data);
                this.clean();
            }
        },


     
        "cursos": [
        {
          "id": 1,
          "img": "https://i.blogs.es/545cf8/es6-logo/450_1000.png",
          "nombre": "JavaScript Avanzado",
          "costo": 30000,
          "duracion": "2 meses",
          "cupos": 20,
          "inscritos": 10,
          "completado": false,
          "fecha_registro": "06/03/2022",
          "descripcion": "Curso con las nuevas actualizaciones de JavaScript"
        },
        {
          "id": 2,
          "img": "https://lineadecodigo.com/wp-content/uploads/2014/04/css.png",
          "nombre": "CSS para principiantes",
          "costo": 10000,
          "duracion": "1 mes",
          "cupos": 35,
          "inscritos": 23,
          "completado": false,
          "fecha_registro": "05/03/2022",
          "descripcion": "Aprendiendo estilos con CSS desde el nivel más básico."
        },
        {
          "id": 3,
          "img": "https://1000marcas.net/wp-content/uploads/2020/11/JavaScript-logo.jpg",
          "nombre": "JavaScript Básico de 0 a 100",
          "costo": 20000,
          "duracion": "2 meses",
          "cupos": 25,
          "inscritos": 0,
          "completado": true,
          "fecha_registro": "05/03/2022",
          "descripcion": "Programando para la web con JavaScript."
        },
        {
          "id": 4,
          "img": "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
          "nombre": "HTML Básico",
          "costo": 10000,
          "duracion": "1 mes",
          "cupos": 35,
          "inscritos": 0,
          "completado": true,
          "fecha_registro": "31/01/2022",
          "descripcion": "Aprende HTML 5 y crea tus primeras páginas web paso a paso con decenas de ejercicios."
        },
        {
          "id": 5,
          "img": "https://logosandtypes.com/wp-content/uploads/2020/08/vue.svg",
          "nombre": "Vue JS de 0 a 100",
          "costo": 85500,
          "duracion": "5 meses",
          "cupos": 35,
          "inscritos": 35,
          "completado": false,
          "fecha_registro": "06/03/2022",
          "descripcion": "Aprende desde cero como usar VueJS, cómo usarlo en aplicaciones pequeñas y ver lo que ofrece el framework."
        },
        {
          "id": 6,
          "img": "https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png",
          "nombre": "Estilos con SASS",
          "costo": 45000,
          "duracion": "1 mes",
          "cupos": 40,
          "inscritos": 35,
          "completado": false,
          "fecha_registro": "06/03/2022",
          "descripcion": "Con SASS aprenderás a escribir mejor código de CSS con todas las funciones necesarias."
        }
      ]
,



        clean() {
            this.form.nombre = "";
            this.form.url = "";
            this.form.cupos = "";
            this.form.inscritos = "";
            this.form.duracion = "";
            this.form.fecha = "";
            this.form.costo = "";
            this.form.descripcion = "";
        },
        eliminar(unid) {
            let respuesta = confirm('¿Esta seguro que desea eliminar el producto de la compra?');
            if (respuesta == true) {
                this.cursos.splice(unid, 1);
            }

        },
        verForm(unid) {
            this.formUpdate = true;
            this.idUpdate = unid;
            this.nombreUpdate = this.cursos[unid].nombre;
            this.urlUpdate = this.cursos[unid].url;
            this.cuposUpdate = this.cursos[unid].cupos;
            this.inscritosUpdate = this.cursos[unid].inscritos;
            this.duracionUpdate = this.cursos[unid].duracion;
            this.fechaUpdate = this.cursos[unid].fecha;
            this.costoUpdate = this.cursos[unid].costo;
            this.descripcionUpdate = this.cursos[unid].descripcion;


        },

        guardar(unid) {
            this.cursos[unid].nombre = this.nombreUpdate;
            this.cursos[unid].url = this.urlUpdate;
            this.cursos[unid].cupos = this.cuposUpdate;
            this.cursos[unid].inscritos = this.inscritosUpdate;
            this.cursos[unid].duracion = this.duracionUpdate;
            this.cursos[unid].fecha = this.fechaUpdate;
            this.cursos[unid].costo = this.costoUpdate;
            this.cursos[unid].descripcion = this.descripcionUpdate;
            this.formUpdate = false;
        }

    },

},
}
</script>
  
<style scoped></style>
  
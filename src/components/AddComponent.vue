<template>
    <div class="container">
        <section class="form">
            <div  class="text-center">
            <button class="btn btn-primary" @click="addCursos">Agregar Curso</button>
            </div>
            <div class="mb-3">
                <label for="nombre_input" class="form-label text-dark">Nombre:</label>
                <input type="text" class="form-control" id="nombre_input" v-model="form.nombre" />
            </div>
            <div class="mb-3">
                <label for="url_input" class="form-label text-dark">Url de la imagen:</label>
                <input type="text" class="form-control" id="url_input" v-model="form.url" />
            </div>

            <div class="mb-3">
                <label for="cupos_input" class="form-label text-dark">Cupos:</label>
                <input type="text" class="form-control" id="cupos_input" v-model="form.cupos" />
            </div>

            <div class="mb-3">
                <label for="inscritos_input" class="form-label text-dark">Inscritos en el curso:</label>
                <input type="text" class="form-control" id="inscritos_input" v-model="form.inscritos" />
            </div>

            <div class="mb-3">
                <label for="duracion_input" class="form-label text-dark">Duración del curso:</label>
                <input type="text" class="form-control" id="duracion_input" v-model="form.duracion" />
            </div>

            <div class="mb-3">
                <label for="fecha_input" class="form-label text-dark">Fecha de registro:</label>
                <input type="text" class="form-control" id="fecha_input" v-model="form.fecha" />
            </div>

            <div class="mb-3">
                <label for="costo_input" class="form-label text-dark">Costo del curso:</label>
                <input type="text" class="form-control" id="costo_input" v-model="form.costo" />
            </div>
            <div class="mb-3">
                <label for="descripcion_input" class="form-label text-dark">Descripción del curso:</label>
                <input type="text" class="form-control" id="descripcion_input" v-model="form.descripcion" />
            </div>
        </section>








        <hr>


        <h3 class="text-center text-dark">A continuación podrás ver tu opinión:</h3>
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
export default {
    name: "AddComponent",
    props: ['name'],
    data() {
        return {
            cursos: [],
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

        };
    },
    methods: {

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

};
</script>
  
<style scoped></style>
  
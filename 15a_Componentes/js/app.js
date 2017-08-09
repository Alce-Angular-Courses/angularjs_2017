class MainController {

    $onInit () {
        this.texto = "Texto desde papa";
        this.btn1 = "Send"; //"Enviar"
        this.btn2 = "Delete"; //"Borrar"

    }

   botonEnviar() {
        alert ("Boton 1");
    }

   botonBorrar() {
       alert ("Boton 2");
    }

}

angular.module('appPrueba',[])
.controller("MainController", MainController)


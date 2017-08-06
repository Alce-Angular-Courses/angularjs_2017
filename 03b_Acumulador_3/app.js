class AcumuladorCtrl {
     //código del controlador

    $onInit () {
        this.incremento = 10;
        this.total = this.incremento;
    }
  
    sumar () {
        this.total += parseInt(this.incremento);
    }

    restar () {
        this.total -= parseInt(this.incremento);
    }		    
} // Fin de la clase


angular.module("acumulador", [])
.controller('AcumuladorCtrl', AcumuladorCtrl)

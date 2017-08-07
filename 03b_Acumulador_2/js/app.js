angular.module("acumulador", [])
.controller('AcumuladorCtrl', function($scope){
    //código del controlador
    this.incremento = 10;
    this.total = this.incremento;

    this.sumar = function(){;
        this.total += parseInt(this.incremento);
    }
    this.restar = function(){
        this.total -= parseInt(this.incremento);
    }			
})

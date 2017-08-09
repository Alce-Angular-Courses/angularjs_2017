// Tercera aproximación al formato "1.5"
// Se define el controller como una clase


angular.module('appPrueba')

.directive("addTexto", function () {
    return {
        restrict : "E",       
        templateUrl : 'Directivas/recogeTexto.partial.html',
        controllerAs : "$ctrl",
        //scope : {}
        link : function(scope, elem, atrb) {

            elem[0].onclick = function() {
                elem[0].innerHTML += `<p>Ja ja</p>
                                    <p>Hiciste <b>clic</b></p>`;
            }

            console.log(scope);
            console.dir(elem);
            console.dir(elem[0]);
            console.log(atrb)
        }
    }
})

var oAjax;
(function() {

    // Propieddes privadas
    
    var pMetodo = ''; // Método HTTP empleado
    var pUrl = ''; // Dirección del recurso solicitado
    var pFuncion =  ''; // Función callback que manejará la respuesta del servidor

    // Metodos privados

    function inicializa_xhr() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    }; // fin de la función que instancia el objeto XMLHttpRecuest (Ajax)

    function setPropiedades  () {
        pMetodo = arguments[0];
        pUrl = arguments[1];
        pFuncion = arguments[2];
    }; // fin de la función inicializadora de valores (setter)

    oAjax = {
                
        // Propiedades públicas
        oPeticion: {}, 

        // Método publico (privilefiados)                
    
        cargaContenido: function (metodo, url, funcion) {
            setPropiedades(metodo, url, funcion)
            this.lanzarAjax();
        }, // Fin de la funcion controladora del objeto ( => interfaz)

         lanzarAjax:  function () {

        // Obtener la instancia del objeto XMLHttpRequest
            this.oPeticion = inicializa_xhr();
            if (this.oPeticion) {
                // Preparar la funcion de respuesta
                this.oPeticion.onreadystatechange = pFuncion; //.bind(this);
                // Realizar peticion HTTP
                this.oPeticion.open(pMetodo, pUrl, true);
                this.oPeticion.send(null);
            }
        } // Fin de la función que implementa la consulta al servidor via Ajax          
    };
}());
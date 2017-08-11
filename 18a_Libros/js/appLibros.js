angular.module("appLibros", [])
.controller('AppController', ['$scope', '$http', '$sce', function($scope, $http, $sce){

    $scope.esInicio = true;

    $scope.oImgLibro = {
        url : 'images/submedium.jpg',
        alt: 'Ejemplo de iconografía ciberpunk'
    }    
    $scope.sDatosLibro = ""

    $scope.aLibros = [
        { id :"Software" ,
          title : "Software  (1982)",
          alt : "Portada de la novela Software (1982)"},
        { id :"Neuromante" ,
          title : "Neuromante  (1984)",
          alt : "Portada de la novela Neuromante (1984)"},
        { id :"Hardwired" ,
          title : "Hardwired (1986)",
          alt : "Portada de la novela Hardwired (1986)"},
        { id :"Ambiente" ,
          title : "Ambiente (1987)",
          alt : "Portada de la novela Ambiente (1987)"},
        { id :"Cuando_Falla_La_Gravedad" ,
          title : "Cuando Falla La Gravedad (1987)",
          alt : "Portada de la novela Cuando Falla La Gravedad (1987)"},
        { id :"Islas_en_La_Red" ,
          title : "Islas en La Red (1988)",
          alt : "Portada de la novela Islas en La Red (1988)"},
        { id :"Las_Estaciones_De_La_Marea" ,
          title : "Las Estaciones De La Marea (1991)",
          alt : "Portada de la novela Las Estaciones De La Marea (1991)"},
        { id :"Snow_Crash" ,
          title : "Snow Crash (1992)",
          alt : "Portada de la novela Snow Crash (1992)"}
    ]

    $scope.oUrl = {
    			    path: "datos/", // carpeta de datos (json / jpg)
    			    file: "", // path´+ nombre de los ficheros sin extensión
    			    fullFile: "", // nombre de los ficheros con extensión
    			    //oConexion: Object.create(oAjax), // objeto Ajax
    			};

    $scope.libroClic = function (oEvent) {    
      $scope.esInicio = false;	
    	$scope.oUrl.file = $scope.oUrl.path + oEvent.currentTarget.id; 
    	$scope.oUrl.fullFile = $scope.oUrl.file + ".json";
    	if ($scope.oUrl.fullFile) {

    	    //******************código de la petoicion						
    	    $http( {method : 'GET', 
                    url: $scope.oUrl.fullFile + '?nocache=' + Math.random()})
            .then( function (response, status ) {    
                

            //    try {
            //        if (this.oConexion.oPeticion.status == 200) {

                        let oLibro = response.data;       
                        let sLinea, sHtml;
                        sHtml = "<dl>";
                        for (let i in oLibro) {
                            sLinea = "<dt>" + i + "</dt><dd>" + oLibro[i] + "</dd>";
                            sHtml += sLinea;
                        }
                        sHtml += "</dl>";

                        $scope.sDatosLibro = $sce.trustAsHtml(sHtml);
                        $scope.oImgLibro.url = $scope.oUrl.file + ".jpg";
                        $scope.oImgLibro.alt = "Portada del libro seleccionado";
               //     } else {
               //         throw "Error " + this.oConexion.oPeticion.status + 
               //                 " - " + this.oConexion.oPeticion.statusText;
               //     }                   
            //   }
            //    catch (error) {
            //   }
            }, // Fin de la función success
              function (response, status ) {  

                    $scope.sDatosLibro = $sce.trustAsHtml(response);
                    $scope.oImgLibro.url = 'images/submedium.jpg';
                    $scope.oImgLibro.alt = 'Ejemplo de iconografía ciberpunk';

            }) // Fin de la función error
        };
                					
	}; // fin del manejador del onclick del boton


}]) // fin de la función del controlador	
.directive("dpEnlaceLibro", function (){
    return {
        // restrict: 'E' 
        template: '<a href="#" id ={{oLibro.id}} ng-click=" libroClic($event)"><img ng-src="images/{{oLibro.id}}.min.jpg" title = {{oLibro.title}} alt = {{oLibro.alt}} class="icono"></a>'
    }
}); // fin de la directiva
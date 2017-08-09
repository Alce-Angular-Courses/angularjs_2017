angular.module("appDirectivas", [])
.directive("dpUser", function (){
	
	return {
		restrict: 'E',
		template: "<p><strong>Usuario</strong><br>Nombre: {{oUsuario.nombre.toUpperCase()}}<br>Apellido: {{oUsuario.apellido.toUpperCase()}}</p>"
	}
})
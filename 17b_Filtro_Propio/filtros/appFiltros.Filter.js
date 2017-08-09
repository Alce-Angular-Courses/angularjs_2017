angular.module('appPrueba')
.filter('truncar', function(){
	return function(input, limit){
		return (input.length > limit) ? 
				input.substr(0, limit)+'...' : input;
		};
	})
.filter("capitalizar", function(){
    return function(text) {
        if(text != null){
            return text.substring(0,1).toUpperCase()+text.substring(1);
        }
    };
})

.filter("capitalizarPalabras", function(){
    return function(pTexto) {
		// si no tenemos realmente un string no continuamos
		if (pTexto.length == 0) {
			return pTexto;
		}
		// mediante el método split del objeto wrapper String,
		// obtenemos un array de caracteres correspondiente a la cadena 
		let aCaracteres = pTexto.split("");
		// Mediante el uso del método toUpperCase del objeto  wrapper String, 
		// podremos obtener el carácter en mayúscula del primer elemento 
		aCaracteres[0] = aCaracteres[0].toUpperCase();
		// Analizamos el resto de la cadena, recorriendo todo el array
		// el -2 es para evitar una excepción al salirnos del array
		for (let i = 0; i < aCaracteres.length - 2; i++) {
			// Si es fin de 'palabra'
			if (aCaracteres[i] == ' ' || aCaracteres[i] == '.' || aCaracteres[i] == ','){
				// Reemplazamos el siguiente elemento por su mayúscula
				aCaracteres[i + 1] = aCaracteres[i + 1].toUpperCase();
			}
		}
		// Finalmente, retornamos el string creado a partir del array 
		// con el método join del objeto Array
		return aCaracteres.join("");
	}
});



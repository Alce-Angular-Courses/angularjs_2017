	function main () {

			const READY_STATE_UNINITIALIZED = 0;
			const READY_STATE_LOADING = 1;
			const READY_STATE_LOADED = 2;
			const READY_STATE_INTERACTIVE = 3;
			const READY_STATE_COMPLETE = 4;

			var 

 

			} // Fin del objeto oFormulario


	        var nItems = document.getElementsByClassName('icono').length;
	        for (var i = 0; i < nItems; i++) {
	            document.getElementsByClassName('icono')[i].onclick = 
                    oFormulario.libroClic.bind(oFormulario);
	        };

		};//fin de la  función main

		window.onload = main;
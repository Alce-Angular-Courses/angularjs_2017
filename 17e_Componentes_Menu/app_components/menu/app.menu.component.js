class AppMenu {

    constructor () {
    }

    $onInit () {
        this.menuTitle = "Desarrollo Web";
        this.aOpciones = [
            {label: "", path: "", esActivo : false},
            {label: "HTML", path: "html", esActivo : false},
            {label: "CSS", path: "css", esActivo : false},
            {label: "JS", path : "js", esActivo : false}
        ];
    }

} // Fin de la clase AppMenu


angular.module('appMenuComponentes')
.component("appMenu", {
    //require: {'parent' : 'MainController'},
    templateUrl : 'app_components/menu/app.menu.templ.html',
    controller : AppMenu,
})
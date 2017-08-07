angular.module("app", [])
.controller("AppMain", AppMain)

function AppMain () {

    this.data = {
        a: numAzar(),
        b: numAzar()
    }

    function numAzar () {
        return Math.random()*10
    }

}



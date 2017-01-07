angular.module('appweather', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('cuadro', {
                url: '/cuadro',
                templateUrl: 'views/cuadro.html',
                controller: 'ctrlCuadro'
            })
            .state('historico', {
                url: '/historico',
                templateUrl: 'views/historico.html',
                controller: 'ctrlHistorico'
            });
        $urlRouterProvider.otherwise('cuadro');
    })
    .factory('common', function($http) {
        var common = {};
        common.clima = {};
        common.get = function($ciudad){
            /*
            La funcion urlweather($city) está difinida el en archivo urlweather.js y devuelve un string con
            la URL del API del tiempo (la variable $appid se obtiene al registrarse en el sitio). Ejemplo:
                "http://api.openweathermap.org/data/2.5/weather?q=" + $city + "&appid=" + $appid + "&lang=es"
            */
            var mydata = get_json(urlweather($ciudad), function(data) {
                if (data.cod == "200") {
                    angular.copy(data, common.clima);
                    common.clima.main.temp = parseFloat(common.clima.main.temp) - 273.15;
                    common.clima.dt = timeConverter(parseInt(common.clima.dt));
                    return common.clima;
                } else {
                    alert("ERROR " + data.cod + ".\n" + data.message);
                }
            })
        }
        return common;
    })
    .controller('ctrlCuadro', function($scope, $state, common) {
        $scope.climas = {};
        $scope.comenzar = function() {
            $scope.climas = new Array();
            common.get($scope.ciudad);
            $scope.climas = [common.clima];
        }
    })
    .controller('ctrlHistorico', function($scope, $state, common) {
    })

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
        common.getAll = function($ciudad){
            return url($ciudad);
        }
    })
    .controller('ctrlCuadro', function($scope, $state, common) {
        $scope.comenzar = function() {
            alert(common.getAll('Sangolqui'));
        }
    })
    .controller('ctrlHistorico', function($scope, $state, common) {
    })

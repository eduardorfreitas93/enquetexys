angular.module('enqueteApp').controller('AdminCreateController', function ($scope, cadastroDeEnquete, $window) {
        'use strict';

        $scope.inputCounter = 0;
        $scope.enquete = {};
        $scope.itens = [];

        /**
         * Adiciono opções de resposta
         */
        $scope.addResposta = function () {
            $scope.inputTemplate = {
                id: 'input-' + $scope.inputCounter
            };

            $scope.inputCounter += 1;
            $scope.itens.push($scope.inputTemplate);
        };

        /**
         * submeto o formulario para gravar a enquete
         */
        $scope.submeter = function () {
            if ($scope.formulario.$valid) {

                cadastroDeEnquete.cadastrar($scope.enquete)
                    .then(function (dados) {
                        var url = "http://" + $window.location.host + '/app_dev.php/admin/';
                        $window.location.href = url;

                    })
                    .catch(function (erro) {
                        $scope.mensagem = erro.mensagem;
                    });
            }

        };
    });
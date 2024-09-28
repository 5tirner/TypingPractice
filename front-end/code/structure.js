const angularApp = angular.module('elements', []);
angularApp.controller
(
    'cntrl',
    function($scope)
    {
        $scope.creatorInfo = "Created By Zasabri";
        $scope.welcomeWord = "WELCOME TO TYPING...PRACTICE";
        $scope.data = "";
    }
);

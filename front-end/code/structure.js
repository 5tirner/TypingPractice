const angApp = angular.module("projectApp", []);
angApp.controller
(
    'projectController',
    function($scope)
    {
        $scope.welcoming = "Welcome To TYPING...PRACTICE";
        $scope.derictedBy = "zasabri";
        $scope.Data = "";
    }
)
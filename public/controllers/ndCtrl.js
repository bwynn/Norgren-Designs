ndApp.controller("ndCtrl", function($scope, $http) {

  $http.get("public/data/data.json").
    success(function(response) {
      $scope.data = response;
    }).
    error(function(err) {
      $log.error(err);
    });

})

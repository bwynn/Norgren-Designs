// public/js/admin/services/AdminService.js
angular.module('AdminService', [])
  .factory('adminService', ['$http', function($http) {
    return {
      logIn: function(loginData) {
        return $http.post('/api/admin/login', loginData);
      },
      logOut: function() {
        console.log("logOUt method called");
        return $http.get('/api/admin/logout');
      }
    };
  }]);

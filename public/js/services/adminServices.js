// public/js/services/adminServices.js
angular.module("adminService", [])
  .factory("Admin", ['$http', function($http) {
    return {
      // get employee model data
      getEmployees: function() {
        return $http.get('/api/employees');
      },
      // put employee model data
      // post employee model data
      // delete employee model data

      // get home model data
      getMain: function() {
        return $http.get('/api/main');
      },
      // put home model data

      // get services model data
      getServices: function() {
        return $http.get('/api/services');
      }
      // post services model data
      // put services model data
    };
  }]);

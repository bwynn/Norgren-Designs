// public/js/services/adminServices.js
angular.module("adminService", [])
  .factory("Admin", ['$http', function($http) {
    return {
      // EMPLOYEES
      // get employee model data
      getEmployees: function() {
        return $http.get('/api/employees');
      },
      // put employee model data
      addEmployee: function(data) {
        return $http.post('/api/employees', data);
      },
      // post employee model data
      updateEmployee: function(data) {
        return $http.put('/api/employees', data);
      },
      // delete employee model data
      deleteEmployee: function(data) {
        console.log(data);
        return $http.put('/api/delete_employees', data);
      },

      // MAIN
      // get home model data
      getMain: function() {
        return $http.get('/api/main');
      },
      // put home model data
      updateMain: function(mainData) {
        return $http.put('/api/main', mainData);
      },
      // post home model
      sendMain: function(mainData) {
        return $http.post('/api/main', mainData);
      },
      // delete home section
      deleteMainSection: function(mainData) {
        return $http.put('/api/delete_main', mainData);
      },

      // SERVICES
      // get services model data
      getServices: function() {
        return $http.get('/api/services');
      },
      // post services model data
      addService: function() {
        return $http.post('/api/services');
      },
      // put services model data
      addServiceItem: function() {
        return $http.put('/api/services/items');
      },
      // delete services model data
      deleteService: function() {
        return $http.put('/api/delete_services');
      },

      // MESSAGES
      getMessages: function() {
        return $http.get('/api/messages');
      },

      submitMessage: function(messageData) {
        return $http.post('/api/messages', messageData);
      },

      deleteMessage: function(messageData) {
        console.log(messageData);
        return $http.put('/api/messages', messageData);
      }
    };
  }]);

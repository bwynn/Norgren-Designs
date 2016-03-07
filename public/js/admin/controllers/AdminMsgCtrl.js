// public/js/admin/controllers/AdminMsgCtrl.js
angular.module("AdminMsgCtrl", [])
  .controller('AdminMessagesController', ['$scope', 'Admin', function($scope, Admin) {

    function getData() {
      Admin.getMessages().then(function(messages) {
        console.log(messages);
        $scope.messages = messages.data;
        $scope.msgCount = $scope.messages.length;
      });
    }

    $scope.deleteMessage = function(recordId) {

      console.log(recordId);
      //console.log(typeof recordId);

      Admin.deleteMessage({
        id: recordId
      }).then(function() {
        getData();
      })
    };

    getData();
  }]);

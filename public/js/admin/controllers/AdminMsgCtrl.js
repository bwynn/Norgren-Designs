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

    $scope.deleteMessage = function(recordID) {
      console.log(recordID);

      Admin.deleteMessage({
        id: recordID
      }).then(function() {
        getData();
      })
    };

    getData();
  }]);

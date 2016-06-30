// public/js/admin/controllers/AdminMsgCtrl.js
angular.module("AdminMsgCtrl", [])
  .controller('AdminMessagesController', ['$scope', 'Admin', function($scope, Admin) {

    function getData() {
      Admin.getMessages().then(function(messages) {
        console.log(messages);
        $scope.messages = messages.data;
        $scope.msgCount = $scope.messages.length;

        console.log($scope.messages);
      });
    }

    $scope.deleteMessage = function(_id) {

      Admin.getMessages().then(function(err, messages) {
        Admin.deleteMessage({
          "id": _id
        }).then(function(data) {
          getData();
        });
      });
    };

    getData();
  }]);

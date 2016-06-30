angular.module("ndAdminApp", ['ngRoute', 'ui', "angular-filepicker", 'AppRoutes', 'adminService', 'AdminService', 'LoginController', 'MainCtrl', 'AdminMsgCtrl', 'AdminAboutCtrl', 'AdminMainCtrl', 'AdminSrvCtrl'])
  .config(function(filepickerProvider) {
    filepickerProvider.setKey('	AAwSFfRr1QDO1B5X3lqFTz');
  });

angular.module("ndApp", [])
  .controller("employeeCtrl", function( $scope ) {
    $scope.employees = [
      {
        "class" : "erik",
        "name" : "Erik Norgren",
        "title" : "CEO & Founder",
        "bio" : "Erik comes from a family with multiple generations of creative engineers - engineering is in his blood. He has a Masters in Mechanical Engineering from the University of Colorado, Boulder, and 15+ years' experience designing mechatronic systems from the ground up. Robotics and mechanism design are his specialties. He has a proven ability to create successful products from primitive concepts. He enjoys rock climbing and hiking in his spare time."
      },
      {
        "class" : "default",
        "name" : "Interested?",
        "title" : "Find out More",
        "bio" : "If you think you would be a good fit, I'd like to hear from you."
      }
    ]
  })
  .controller("formCtrl", function( $scope ) {
    $scope.addUser = function( userDetails ) {
      alert("Thanks " + userDetails.name + ", we'll be in touch shortly.");
    }
  });

KAppRegistration.controller('RegistrationController', ['$scope', '$log', '$http', '$window', 'RegisterFactory', function($scope, $log, $http, $window, RegisterFactory){
  $scope.username_register;
  $scope.password_register;

  $scope.submit =function(username, password){
    console.log("Register Button Works");
    RegisterFactory.postData(username,password);
  }
}]);

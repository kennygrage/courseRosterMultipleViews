courseRoster.controller('CoursesCtrl', function CoursesCtrl($scope, CoursesFactory) {
  $scope.courses = CoursesFactory.courses;
  $scope.CoursesFactory = CoursesFactory;

  $scope.logChore = function(chore) {
    alert(chore + " is done!");
  }

  $scope.callHome = function(message_text) {
    alert(message_text);
  }

  $scope.ctrlSoda = "blackberry";
});

courseRoster.directive("hometext", function() {
  return {
    template: "Back to the beginning"
  }
});

courseRoster.directive("changeClass", function() {
  return function (scope, element, attrs) {
    element.bind("click", function () {
      element.toggleClass(attrs.changeClass);
    });
  }
});

courseRoster.directive("kid", function () {
  return {
    restrict: "E",
    scope: {
      done: "&"
    },
    template: '<div id="chore_text"><input type ="text" ng-model="chore">' +
      ' {{chore}}</div>' +
      ' <div class="btn btn-info" id="chore_button" ng-click="done({chore:chore})">I\'m done!</div>'
  }
});

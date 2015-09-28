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

courseRoster.directive("kid", function() {
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

courseRoster.directive("phone", function() {
  return {
    scope: {
      dial: "&"
    },
    template: '<input id="dial_text" type="text" ng-model="value">' +
      '<div class="btn btn-info" id="dial_button" ng-click="dial({message:value})">Call home!</div>'
  }
});

courseRoster.directive("drink", function() {
  return {
    scope: {
      flavor: "="
    },
    template: '<div id="flavor">{{flavor}}</div>'
  }
});

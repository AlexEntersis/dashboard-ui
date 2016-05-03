export class NewOpeningController {
  constructor ($scope) {
    'ngInject';

    $scope.formData = {};

    $scope.processForm = function() {
        alert('awesome!');
        $scope.formData = {};
    };
  }
}

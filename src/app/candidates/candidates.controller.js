export class CandidatesController {
  constructor ($scope, $http) {
    'ngInject';
    this.profiles = $http;

 $http.get("http://127.0.0.1:5000/")
    .then(function(response) {
        $scope.profiles = response.data;
    }, function(response){
        alert(response.status);
    });
  }
}

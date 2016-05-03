export class NewCandidateController {
  constructor ($scope, $http) {
    'ngInject';
    $scope.fields = [];
    $scope.notFoundShown = true;
    $scope.someMethod = function(){
    	$scope.notFoundShown = false;
    	$scope.fields.push(
    	{
    		type: "text", 
    		placeholder: "Name",
    		icon: ""
    	},
    	{
    		type: "text",
    		placeholder: "Title",
    		icon: "fa fa-user"
    	},
    	{
    		type: "text", 
    		placeholder: "Company",
    		icon: "fa fa-building-o"
    	},
    	{
    		type: "email", 
    		placeholder: "Email",
    		icon: "fa fa-envelope"
    	},
    	{
    		type: "text", 
    		placeholder: "Phone",
    		icon: "fa fa-phone"
    	},
    	{
    		type: "text", 
    		placeholder: "Linked Account Link",
    		icon: "fa fa-linkedin"
    	},
    	{
      		type: "text", 
    		placeholder: "Location",
    		icon: "fa fa-location-arrow"
    	},
    	{
       		type: "text", 
    		placeholder: "Visa Status",
    		icon: "fa fa-globe"	
    	},
    	{
       		type: "text", 
    		placeholder: "Notice Period",
    		icon: "fa fa-clock-o"
    	}
    	);
    };
  };
};


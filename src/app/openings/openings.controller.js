export class OpeningsController {
  constructor ($scope) {
    'ngInject';
    this.hello = "Hello";
    $scope.class = "column is-3";


    $scope.positions = [{
    	"position_title" : ".NET Lead Developer",
    	"position_company": "EPAM",
     	"position_location": "Kiev"
     },
    {"position_title" : "Java Lead Developer",
     "position_company": "Luxoft",
     "position_location": "Kiev"
 	},
 	{"position_title" : "Python Lead Developer",
     "position_company": "Skein",
     "position_location": "Kiev"
 	},
 	{"position_title" : "JS Lead Developer",
     "position_company": "Playtech",
     "position_location": "Kiev"
 	},
 	{"position_title" : "DevOps",
     "position_company": "Forest Tec.",
     "position_location": "Kiev"
 	}
    ];
  }
}
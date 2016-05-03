export function routerConfig ($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('candidates', {
      url: '/candidates',  
      templateUrl: 'app/candidates/candidates.html',
      controller: 'CandidatesController',
      controllerAs: 'candidates'
    })
    .state('new-candidate', {
      url: '/new-candidate',  
      templateUrl: 'app/candidates/new-candidate.html',
      controller: 'NewCandidateController',
      controllerAs: 'new-candidate'
    })
    .state('openings', {
      url: '/openings',  
      templateUrl: 'app/openings/openings.html',
      controller: 'OpeningsController',
      controllerAs: 'openings'
    })
    .state('new-opening', {
      url: '/new-opening',  
      templateUrl: 'app/openings/new-opening.html',
      controller: 'NewOpeningController',
      controllerAs: 'new-opening'
    })
    .state('new-opening.stepOne', {
      url: '/stepOne',  
      templateUrl: 'app/openings/new-opening-stepOne.html'
    })
    .state('new-opening.stepTwo', {
      url: '/stepTwo',  
      templateUrl: 'app/openings/new-opening-stepTwo.html'
    });

  $urlRouterProvider.otherwise('/');
}

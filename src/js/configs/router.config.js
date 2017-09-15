angular
  .module('portfolio')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('work', {
    url: '/work',
    templateUrl: '/js/views/work.html'
  })
  .state('proj1', {
    url: '/proj1',
    templateUrl: '/js/views/proj1.html'
  })
  .state('proj2', {
    url: '/proj2',
    templateUrl: '/js/views/proj2.html'
  })
  .state('proj3', {
    url: '/proj3',
    templateUrl: '/js/views/proj3.html'
  })
  .state('proj4', {
    url: '/proj4',
    templateUrl: '/js/views/proj4.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: '/js/views/about.html'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: '/js/views/contact.html'
  });

  $urlRouterProvider.otherwise('/');
}

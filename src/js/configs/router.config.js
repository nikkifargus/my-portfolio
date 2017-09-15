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

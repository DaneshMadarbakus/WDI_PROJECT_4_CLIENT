angular
  .module('rent-a-suit')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('measureyourself', {
    url: '/measureyourself',
    templateUrl: '/js/views/measureyourself.html'
  })
  .state('measureyoursuit', {
    url: '/measureyoursuit',
    templateUrl: '/js/views/measureyoursuit.html'
  })
  .state('aboutus', {
    url: '/aboutus',
    templateUrl: '/js/views/aboutus.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl',
    controllerAs: 'usersIndex'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl',
    controllerAs: 'usersShow'
  })
  .state('usersUpdate', {
    url: '/users/:id/update',
    templateUrl: '/js/views/users/update.html',
    controller: 'UsersUpdateCtrl',
    controllerAs: 'usersUpdate'
  })
  .state('suitsIndex', {
    url: '/suits',
    templateUrl: 'js/views/suits/index.html',
    controller: 'SuitsIndexCtrl',
    controllerAs: 'suitsIndex'
  })
  .state('suitsNew', {
    url: '/suits/new',
    templateUrl: '/js/views/suits/new.html',
    controller: 'SuitsNewCtrl',
    controllerAs: 'suitsNew'
  })
  .state('suitsShow', {
    url: '/suits/:id',
    templateUrl: '/js/views/suits/show.html',
    controller: 'SuitsShowCtrl',
    controllerAs: 'suitsShow'
  })
  .state('suitsUpdate', {
    url: '/suits/:id/update',
    templateUrl: '/js/views/suits/update.html',
    controller: 'SuitsUpdateCtrl',
    controllerAs: 'suitsUpdate'
  });

  $urlRouterProvider.otherwise('/');
}

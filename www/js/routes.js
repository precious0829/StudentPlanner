angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('signup', {
    url: '/page3',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tasks', {
    url: '/page6',
    templateUrl: 'templates/tasks.html',
    controller: 'tasksCtrl'
  })

  .state('newTask', {
    url: '/page7',
    templateUrl: 'templates/newTask.html',
    controller: 'newTaskCtrl'
  })

$urlRouterProvider.otherwise('/page5')

  

});
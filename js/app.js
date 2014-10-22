var myRSS = angular.module('myRSS',['ui.router'])
myRSS.config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider,$stateProvider){
	 $urlRouterProvider.otherwise('/home');
 $stateProvider
			 .state('home',
							{
								url:'/home',
								templateUrl:'views/partials/home.html',
								controller:'myRSSController'
							
								})

			  .state('about',
							{
								url:'/about',
								templateUrl:'views/partials/about.html',
								controller:'myRSSController'


							})
			   .state('services',
							{
								url:'/services',
								templateUrl:'views/partials/services.html',
								controller:'myRSSController'


							})
			    .state('work',
							{
								url:'/work',
								templateUrl:'views/partials/work.html',
								controller:'myRSSController'


							})
			     .state('contact',
							{
								url:'/contact',
								templateUrl:'views/partials/contact.html',
								controller:'myRSSController'


							})

}]);
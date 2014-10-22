myRSS.controller('myRSSController',['$scope','rSSFactory', function($scope,rSSFactory){
	$scope.person = rSSFactory.person;
}]);
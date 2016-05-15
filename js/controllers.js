
var ChatControllers = angular.module('ChatControllers', ['ngAnimate']);

//HERE WE DID THIS MODULE AND WE OUT IT IN A VAR SO THEN WE GO TO THE APP.JS IN THE MY APP AND WE USE THIS MODULE 
//MVC BIYAG :D

//HTTP SERVICE

//we are going to use HTTP SERVICE TO HANDLE THE DATA FROM THE SERVER  EL DATA ELY GODWA EL SCOPE VARIABLE 

ChatControllers.controller('ListController',['$scope', '$http', function($scope, $http){
    
//    WE USE SCOPE variable TO PASS THINGS FROM THE JAVASCRIPT AND VISE VERSA
    
//    ITS LIKE AN OBJECT 
    
//    GET FOR ME THE DATE FROM THIS FILE CALLED data.json AND THEN ITS SUCESS HA SO DO A FUNCTION GET THE DATA 
 $http.get('js/data.json').success(function(data){ 
//     GRAB THE DATA AND PUT IT IN THAT VARIABLE 
          $scope.chats = data;
     
//     BEC WHEN I WAS DOING THE OPTION I FOUND THAT IT WAS BLANK NOTHIGN IN IT SO I DECIDED TO DO THIS IN ORDER TO SHOW SOMEHTING
     $scope.chatsOrder = 'name';
//     and it doesnt work :((
 });
 
    
    
    
}]);


ChatControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.chats = data;
    $scope.whichItem = $routeParams.itemId;
  });
}]);











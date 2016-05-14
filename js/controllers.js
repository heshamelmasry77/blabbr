var myApp = angular.module('myApp',[]);

//HTTP SERVICE

//we are going to use HTTP SERVICE TO HANDLE THE DATA FROM THE SERVER  EL DATA ELY GODWA EL SCOPE VARIABLE 

myApp.controller('MyController', function MyController($scope, $http){
    
//    WE USE SCOPE variable TO PASS THINGS FROM THE JAVASCRIPT AND VISE VERSA
    
//    ITS LIKE AN OBJECT 
    
//    GET FOR ME THE DATE FROM THIS FILE CALLED data.json AND THEN ITS SUCESS HA SO DO A FUNCTION GET THE DATA 
 $http.get('js/data.json').success(function(data){ 
//     GRAB THE DATA AND PUT IT IN THAT VARIABLE 
          $scope.artists = data;
     
//     BEC WHEN I WAS DOING THE OPTION I FOUND THAT IT WAS BLANK NOTHIGN IN IT SO I DECIDED TO DO THIS IN ORDER TO SHOW SOMEHTING
//     $scope.artistOrder = 'name';
//     and it doesnt work :((
 });
 
    
    
    
});





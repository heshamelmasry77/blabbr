var myApp = angular.module('myApp', [
    'ngRoute',
    'ChatControllers'
//    HERE WE ARE USING THE MODULE CHAT CONTROLLER AND ALSO THE NGROUTE LEL ROUTING WE KEDA ELY HAN3MLO TA7T 
    
]);

//ROUTE PROVIDE IS A SERVICE 
//TELL ANGULAR THAT IAM USING ROUTE PROVIDER ITS A SERVICE 
myApp.config(['$routeProvider', function($routeProvider){
    
    $routeProvider.
    when('/list', {
        
        templateUrl:'partials/list.html',
        controller:'ListController'
        
    }).
    when('/details/:itemId',{
        
        templateUrl:'partials/detail.html',
        controller:'DetailsController'
        
        
    }).
//    WHAT WILL HAPPEN WHEN SOMEBODY GO TO OTHER PLACE IN THE WEBSITE
    
    otherwise({
        redirectTo: '/list'
        
        
    });
}]);
/**
 * Created by Alex.W on 2016/10/3.
 */
//app1.run(function($rootScope) {
//    $rootScope.rootProperty = "root";
//});
//app1.controller('directiveCtrl',function($scope) {
//    $scope.num = {};
//    $scope.change= function() {
//        $scope.num.print = 'The result is ' + (parseInt($scope.num.x )+ 2)
//    }
//});
//app1.controller('paC',function($scope) {
//    $scope.paPro = 'parent';
//});
//app1.controller('chC',function($scope) {
//    $scope.chPro = 'child';
//    $scope.full = "total is " + $scope.rootProperty + " and "
//    + $scope.paPro + " and " + $scope.chPro
//});
//app1.directive('myDire',function() {
//    return {
//        restrict :'AE',
//        replace:true,
//        template: '<a href="{{myUrl}}">{{myText}}</a>'
//
//    }
//})


//app1.directive('myDire',function() {
//    return {
//        restrict:'AE',
//        replace:true,
//        scope: {
//            myUrl:'=haha',
//            myText:'@'
//        },
//        template:'<a href="{{myUrl}}">{{myText}}</a>'
//    }
//})

//app1.directive('myDire',function() {
//    return {
//        restrict: 'AE',
//        replace: true,
//        scope: {
//            myUrl: '=change',
//            myText: '@'
//        },
//        template: '<div><input type="text" ng-model="myUrl">'+
//            '<a href="{{myUrl}}">{{myText}}</a> </div>'
//    }
//});


//10.2.2

//angular.module('myAng',[])
//.controller('mainCtrl',function($scope) {
//
//})
//.directive('myDire',function(){
//    return{
//        restrict: 'AE',
//        scope:{},
//        priority:100,
//        template:'<div>inside myDirective {{myProperty}}</div>'
//    }
//})

//angular.module('myAng',[])
//.controller('bindCtrl',function($scope){})
//.directive('sidetitle',function() {
//    return {
//        restrict:'AE',
//        scope: {
//            title :'@'
//        },
//        transclude: true,
//        template: '<div class="sidebox"><div class="content"><h2 class="header">{{title}}</h2>' +
//        '<span class="content" ng-transclude></span></div> </div>'
//    }
//})

//angular.module('myAng',[])
//.directive('myDi',function() {
//    return {
//        restrict:'AE',
//        template:'<h4>ju</h4>'
//    }
//})


//*********************************************
//learn angularjs custom directive
//*********************************************

var injectParams = ['$scope'];

app1.controller('customerCtrl',function($scope) {
    var counter = 0;
    $scope.tasks = [{title:'Task 1'}];
    $scope.customer = {
        name:'Jack',
        street:'90 Holmes St.'
    };

    $scope.customers = [
        {
            name:'Jack',
            street:'90 Holmes St.',
            age:25,
            url:'book.html'
        },
        {
            name:'Yulin',
            street:'25 saint denis St.',
            age:29,
            url:'book.html'
        },
        {
            name:'Billy',
            street:'2144 Park St.',
            age:26,
            url:'book.html'
        },
        {
            name:'Ann',
            street:'3495 Dominic St.',
            age:28,
            url:'book.html'
        }
    ];

    $scope.addCustomer = function(name) {
        console.log(name);
        counter ++;
        $scope.customers.push({
            name:(name)?name: 'New Customer' + counter,
            street: counter + ' Cedar Point St.',
            age: counter
        });
    };

    $scope.changeData = function() {
        counter ++;
        $scope.customer = {
            name:'Lenard',
            street:counter + ' Cedar Point St.'
        }
    };

    //customerCtrl.$inject = injectParams;


})
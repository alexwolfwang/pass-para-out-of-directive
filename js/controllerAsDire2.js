/**
 * Created by Alex.W on 2016/10/10.
 */
(function() {
    app1.directive('withController2',function() {
        var template = '<button ng-click="vm.addItem()">Add Item</button>' +
            '<li ng-repeat="item in vm.items">{{item.name}}</li> ';

        var controller = function() {
            var vm = this;
            function init() {
                vm.items = angular.copy(vm.datasrc);
            };
            init();

            vm.addItem = function() {
                var id = 'this is the name of Dire 2';
                vm.add({name:id});
                vm.items.push({
                    name: id
                })

            }
        };

        return {
            restrict: 'AE',
            scope: {
                datasrc: '=',
                add: '&'
            },
            controller: controller,
            controllerAs: 'vm',
            bindToController: true,
            template:template

        }
    })
}());
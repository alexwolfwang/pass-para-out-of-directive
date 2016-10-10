/**
 * Created by Alex.W on 2016/10/10.
 */
(function() {
    app1.directive('withController1', function() {

        var template = '<button ng-click="vm.addItem()">Adda Item</button>' +
            '<li ng-repeat="item in vm.items">{{::item.name}}</li> ';

        var controller = function() {
            var vm = this;
            function init() {
                vm.items = angular.copy(vm.datasrc);
            }
            init();

            vm.addItem = function() {
                var name = 'new directive controller item';
                //Call external scope's function
                vm.add()(name);

                //Add new item to directive scope
                vm.items.push({
                    name:name
                });
            }
        };




        return {
            restrict: 'AE',
            scope: {
                datasrc:'=',
                add: '&'
            },
            controller: controller,
            controllerAs: 'vm',
            bindToController: true,
            template: template
        }
    });

}());
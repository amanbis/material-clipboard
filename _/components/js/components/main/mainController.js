(function () {
	'use strict';

	angular
		.module('app')
		.controller('MainController', MainController)

	MainController.$inject = ['dataservice'];

	function MainController (dataservice) {
		var vm = this

		vm.selected = null
		vm.list = []
		vm.selectList = selectList

		dataservice
			.loadList()
			.then(function(list) {
				vm.list.push.apply(vm.list, list)
				console.log(vm.list)
				vm.selected = list[0];
				console.log(vm.selected)
			})

		function selectList(list) {
			vm.selected = list
		}
	}

})();
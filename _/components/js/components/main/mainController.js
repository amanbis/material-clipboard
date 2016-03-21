(function () {
	'use strict';

	angular
		.module('app')
		.controller('MainController', MainController)

	MainController.$inject = ['dataService'];

	function MainController (dataService) {
		var vm = this

		vm.selected = null
		vm.list = []
		vm.displayList = displayList
		vm.selectList = selectList

		function activate() {
			return dataService
				.loadList()
				.then(function(list) {
					vm.list.push.apply(vm.list, list)
					console.log(vm.list)
					vm.selected = list[0];
					return vm.list
				})
			console.log('hello')
		}

		function displayList() {
			return vm.list.length === 0 
				? activate() 
				: vm.list
		}

		function selectList(list) {
			vm.selected = list
		}
	}



})();
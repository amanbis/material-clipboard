(function () {
	'use strict';

	angular
		.module('app')
		.controller('MainController', MainController)

	MainController.$inject = ['dataService'];

	function MainController (dataService) {
		var vm = this

		vm.selected = null
		vm.newTask = ''
		vm.selectTask = {}
		vm.list = []

		vm.displayList = displayList
		vm.selectList = selectList
		vm.addTask = addTask
		vm.completeTask = completeTask

		function activate() {
			return dataService
				.loadList()
				.then(function(list) {
					vm.list.push.apply(vm.list, list)
					console.log(vm.list)
					vm.selected = list[0];
					console.log(vm.selected)
					return vm.list
				})
		}

		function displayList() {
			return vm.list.length === 0 
				? activate() 
				: vm.list
		}

		function selectList(list) {
			vm.selected = list
		}

		function addTask() {
			vm.selected.tasks.push(vm.newTask)
			vm.newTask = ''
		}

		function completeTask() {
			console.log(vm.selectTask)
		}
	}

})();
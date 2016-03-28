(function () {
	'use strict';

	angular
		.module('app')
		.controller('MainController', MainController)

	MainController.$inject = ['dataService', '$mdDialog', '$mdMedia'];

	function MainController (dataService, $mdDialog, $mdMedia) {
		var vm = this

		vm.selected = null
		vm.newTask = ''
		vm.selectTask = {}
		vm.list = []
		var taskID = 6

		vm.displayList = displayList
		vm.selectList = selectList
		vm.listPrompt = listPrompt
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

		function listPrompt(e) {
			var confirm = $mdDialog.prompt()
	          .title('Would you like to add a new list?')
	          .placeholder('New list title')
	          .ariaLabel('Dog name')
	          .targetEvent(e)
	          .ok('Add')
	          .cancel('Cancel')

		    $mdDialog.show(confirm).then(function(result) {
		    	addList(result)
		    }, function() {
		    	console.log('You didn\'t name your dog.')
		    })
		}

		function addList(title) {
			var newList = {
				title: title,
				tasks: []
			}

			return vm.list.push(newList)
		}

		function addTask() {
			taskID++
			vm.selected.tasks.push({id: taskID, desc: vm.newTask})
			vm.newTask = ''
		}

		function completeTask() {
			console.log(vm.selectTask)
		}
	}

})();
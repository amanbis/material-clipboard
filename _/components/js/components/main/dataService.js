(function() {
	'use strict';

	angular
		.module('app')
		.factory('dataService', dataService)

	dataService.$inject = ['$q']

	function dataService($q) {
		var list = [
			{
				title: 'Books',
				tasks: [
					'East of Eden',
					'Blood Meridian',
					'The Name of the Rose'
				]
			},
			{
				title: 'Films',
				tasks: [
					'Spotlight',
					'Hail Caesar!',
					'Room'
				]
			}
		]
		
		return {
			loadList: loadList
		}

		function loadList() {
			return $q.when(list)
		}
	}
})();
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
					{ id: 1, desc: 'East of Eden' },
					{ id: 2, desc: 'Blood Meridian' },
					{ id: 3, desc: 'The Name of the Rose' }
				]
			},
			{
				title: 'Films',
				tasks: [
					{ id: 4, desc: 'Spotlight' },
					{ id: 5, desc: 'Hail Caesar!' },
					{ id: 6, desc: 'Room' }
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
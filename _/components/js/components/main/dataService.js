(function() {
	'use strict';

	angular
		.module('app')
		.factory('dataservice', dataservice)

	dataservice.$inject = ['$q']

	function dataservice($q) {
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
angular.module('eventApp')
.controller('formCtrl', ['eventFactory',  function (eventFactory) {

	this.event = eventFactory.getAllEvents();

	this.categories = [{id:1, name:'Music', group:'Main'},{id:2, name:'Cinema', group:'Main'},
	{id:3, name:'Games', group:'Second'},{id:4, name:'Race', group:'Second'}];

	this.submitForm = function(form){

		eventFactory.createEvent(angular.copy(form), this.event);

		//console.log($scope.event);
		
	}

}])
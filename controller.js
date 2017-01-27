angular.module('eventApp')
.controller('formCtrl', ['eventFactory',  function (eventFactory) {

	this.event = eventFactory.getAllEvents();

	this.categories = [{id:1, name:'Music'},{id:2, name:'Cinema'},
	{id:3, name:'Games'},{id:4, name:'Race'}];

	this.selectedOption = {id:1, name:'Music'};

	this.submitForm = function(form){

		form.category = this.selectedOption.id;
		eventFactory.createEvent(angular.copy(form), this.event);

		//console.log($scope.event);
		
	}

}])
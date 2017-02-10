angular.module('eventApp')
.controller("classifiedsCtrl", function($scope){

    	$scope.name2 = "!!!!Ezequiel!!!!";

    })
.controller('formCtrl', ['eventFactory',  function (eventFactory, $scope) {

	var self = this;
	

	this.event = eventFactory.getAllEvents();

	this.categories = [{id:1, name:'Music'},{id:2, name:'Cinema'},
	{id:3, name:'Games'},{id:4, name:'Race'}];

	this.selectedOption = {id:1, name:'Music'};

	this.specialEvent = 'true';

	this.specialValue ={id:1, value:'somethingSpecial'};

	//Initialize Special types checkboxes

	this.specialType = [{name: 'Age Restricted', checked: false},{name: 'Luxury', checked: false}];


	this.selectAllTypes = function(){
		var toggleStatus = self.bothSelected;
		angular.forEach(self.specialType, function(itm) {
			itm.checked = toggleStatus;
		})
	}


	this.optionToggled = function() {
		self.bothSelected = self.specialType.every(function(itm){
			return itm.checked;
		})
	}	






	


	this.submitForm = function(form){

		form.category = this.selectedOption.id;
		eventFactory.createEvent(angular.copy(form), this.event);

		//console.log($scope.event);
		
	}

}])
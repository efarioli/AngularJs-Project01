angular.module('eventApp')
.controller('formCtrl', ['eventFactory',  function (eventFactory) {

	var self = this;

	this.event = eventFactory.getAllEvents();

	this.categories = [{id:1, name:'Music'},{id:2, name:'Cinema'},
	{id:3, name:'Games'},{id:4, name:'Race'}];

	this.selectedOption = {id:1, name:'Music'};

	this.specialEvent = true;

	this.specialValue ={id:1, value:'somethingSpecial'};

	//Initialize Special types checkboxes

	this.specialType = [{name: 'Age Restricted', checked: false},{name: 'Luxury', checked: false}];

	this.selectAllTypes = function (){

		if (self.bothSelected){
			self.bothSelected = true;
		} else {
			self.bothSelected = false;
		}

		angular.forEach(this.specialType, function(item){

			item.checked = self.bothSelected;
		})

		}






	/*	var big;
if (x > 10) {
    big = true;
}
else {
    big = false;
}

var big = (x > 10) ? true : false;

	};*/

	this.submitForm = function(form){

		form.category = this.selectedOption.id;
		eventFactory.createEvent(angular.copy(form), this.event);

		//console.log($scope.event);
		
	}

}])
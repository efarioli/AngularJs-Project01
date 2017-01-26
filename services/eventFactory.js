angular.module('eventApp')
.factory('eventFactory', function (){

    var eventFactory = {};
	
	

	eventFactory.createEvent = function(event, eventList)
	{

		eventList.push(event);
		return eventList;

	}

	return eventFactory;
})
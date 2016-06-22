import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		let data = [
			{
				"id": 		"1",
				"name": 	"Tammy"
			},
			{
				"id": 		"2",
				"name": 	"Lenny"
			},
			{
				"id": 		"3",
				"name": 	"Maria"
			},
			{
				"id": 		"4",
				"name": 	"Jose"
			},
		];
		return data
	}
});

//prototypal inheritance

var human = {
	species: "human",
	create: function(values) {
		var instance = Object.create(this);
		Object.keys(values).forEach(function(key){
			instance[key] = values[key];
		});                                //create function can now be applied 
		return instance;				   //to any other object to create new
	},									   //**names,speices, etc.
	saySpecies: function() {
		console.log(this.species);
	},
	sayName:  function() {
		console.log(this.name);
	}
};

var ron = human.create("Ron");

// var musician = Object.create(human);
// musician.playInstrument = function() {
// 	console.log("play..." + this.instrument);
// };

var ron = Object.create(musician);
ron.name = "ron";
ron.instrument = "Cello";
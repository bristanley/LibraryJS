//prototypal inheritance

var human = {
	species: "human",
	create: function(name) {
		var instance = Object.create(this);
		instance.name = name;
		return instance;
	},
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
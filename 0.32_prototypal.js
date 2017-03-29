//classical inheritance

// function person(){

// }

// var brad = new person();

//prototypal inheritance

var human = {
	species: "human",
	saySpecies: function() {
		console.log(this.species);
	},
	sayName:  function() {
		console.log(this.name);
	}
};

var musician = Object.create(human);
musician.playInstrument = function() {
	console.log("play..." + this.instrument);
};

var ron = Object.create(musician);
ron.name = "ron";
ron.instrument = "Cello";




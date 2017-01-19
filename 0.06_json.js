// JSON is an acronym for JavaScript Object Notation
// Nested arrays

var  names = [["George", "John", "Abraham"], ["Howard", "Bill", "Ronald"]];
//console.log(names[0][0]);

var items = [
	{
		"id": 1,
		"name": "Green Door",
		"price": 12.50,
		"tags": ["home", "green", "vinyl"]
	},

	{
		"id": 2,
		"name": "Red Door",
		"price": 12.50,
		"tags": ["home", "red", "cheap wood"]
	},

	{
		"id": 3,
		"name": "Pink Door",
		"price": 12.50,
		"tags": ["home", "pink", "plastic"]
	}


];

//console log items
console.log(items[0]);
console.log(items[0].id);
console.log(items[0].tags[1]);
console.log(items[1].tags[2]);

//can you create a for loop that console logs each object's name

for(var i = 0; i < items.length; i++){
	console.log([i].name);
}


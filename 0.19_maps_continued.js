//Map


// var myMap = new Map();

// // myMap.set('Brian', 'Bridget');
// // myMap.set(function() {
// // 	console.log("Maps are cool.")
// // }, 'bro')

// myMap.set(13, 'bar');


// console.log(myMap.size);

// // console.log(myMap.get('Brian')); 

// console.log(myMap.get(13));


//TODO still have questions on maps. can i set more  than 2? call more than 2?
//Maps continued

var map = new Map()
map.set(new Date(), function today() {}) //functions can be set as keys
map.set({ pony: 'foo'}) 
map.set(Symbol('items'), [1, 2])

console.log(map);

console.log(map.size);


var map2 = new Map([
[new Date(), function(){
	console.log("today")
}],
[() => 'key', { pony: 'foo'}],
[Symbol('items'), [1, 2]]
])

console.log(map2);

console.log(map.size);

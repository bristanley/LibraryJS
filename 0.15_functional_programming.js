// var name = "Brian";
// function greet() {
// 	console.log("Hello, I am " + name);
// }

// greet();
//Not pure function


// function greet(name) {
// 	return "Hello, I am " + name;
// };

// greet("ben");

// console.log(greet("ben"));
//pure function

function makeFoodGood(food) {
	return function(string) {
		return food + "" + string;
	};
}

var myFood = makeFoodGood("This is good ");

myFood("kale ");

console.log(myFood("kale"));
console.log(myFood("ocra"));
console.log(myFood("eggplant"));

//Higher order function returning function
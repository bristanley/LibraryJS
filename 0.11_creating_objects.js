var myArray = new Array();

myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();

myCar.maxSpeed = 50;

myCar.driver = "John";

// console.log(myCar.driver);

// myString.length;

myCar.drive = function() {
	console.log("now driving");
}

var myVar = "hey";

console.log(myCar.drive());
myCar.drive();


var myCar2 = {

	maxSpeed: 50,
	driver: "Brian",
	drive: function() {
		console.log("now driving");
	}
}

console.log(myCar2.maxSpeed);
myCar2.drive();

var myCar2 = {

	maxSpeed: 50,
	driver: "Brian",
	drive: function(speed, time) {
		console.log(speed * time);
	}
}

myCar2.drive(50, 3);
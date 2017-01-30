//this keyword refers to whatever object occupies that space

console.log(this);




// var myCar2 = {
	
// 	maxSpeed : 70,
// 	driver 	 : "Brian",
// 	drive    : function(speed, time) {
// 		console.log(speed * time);
// 	},
// 	test : function() {
// 		console.log(this);
// 	}
// };



// var myCar3 = {
	
// 	maxSpeed : 70,
// 	driver 	 : "Ben",
// 	drive    : function(speed, time) {
// 		console.log(speed * time);
// 	},
// 	test : function() {
// 		console.log(this);
// 	}
// };

var myCar2 = {
	
	maxSpeed : 70,
	driver 	 : "Brian",
	drive    : function(speed, time) {
		console.log(speed * time);
	},
	logDriver : function() {
		console.log("driver name is " + this.driver);
	}
};

myCar2.logDriver();

// myCar2.test();
// myCar3.test();
// console.log(myCar2.maxSpeed);
// myCar2.drive(50, 3);



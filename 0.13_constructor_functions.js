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

var Car = function(maxSpeed, driver) {

	this.maxSpeed = maxSpeed; //property
	this.driver = driver;	  //property	
	this.drive = function(speed, time) {  //method
		console.log(speed * time);		  //method
	};
	this.logDriver = function() {
		console.log("driver name is " + this.driver);
	};

}

var myCar = new Car(70, "Steve");
var myCar2 = new Car(60, "Donald");
var myCar3 = new Car(50, "Ronald");
var myCar4 = new Car(40, "George");


myCar.drive(30, 5);
myCar3.logDriver();

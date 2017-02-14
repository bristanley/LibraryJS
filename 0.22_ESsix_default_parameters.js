// function log(num){

// 	console.log(num);
// }

// log(5);
// log();

//default parameter to function something is logged if nothing is passed through

// function log(num=10){

// 	console.log(num);
// }

// log(20);  //when parameter is passed through it overrides default parameter 


function logMan(name= "Dante", age="33", brostatus="broMontana") {
	console.log("My name is " + name + " and I am " + age + " years old." + "I am a " + brostatus);
}

// logMan("Craig", "28", "broham");
// logMan();
logMan("Gavin", 45);

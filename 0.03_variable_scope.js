function getAverage (a,b) {
	var average = (a + b) / 2; //local variable
	console.log(average);
	return average;
}

var myResult = getAverage(7,11);   //global variable
console.log("the average is " + myResult);

//console.log(average); //not defined outside the function


function logResult() {
	console.log("the average is " + myResult + " inside the function");
}

logResult(); //works because variable is defined outside the function
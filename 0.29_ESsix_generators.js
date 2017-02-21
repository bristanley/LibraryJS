

function* gen(){    //*turns function into generator
		yield "pear"; //pauses the function
		yield "banana";
		yield "apple";
		return "all done";
	}


var myGen = gen();

console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next()); //done is true because generator has not reached endpoint

//8:05 minutes
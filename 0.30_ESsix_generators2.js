function* gen(){    //*turns function into generator
		var x = yield "pear"; //pauses the function
		var y = yield "banana";
		var z = yield "apple";
		return x + y + z;
	}


var myGen = gen();

console.log(myGen.next());
console.log(myGen.next(10));
console.log(myGen.next(5));
console.log(myGen.next(3)); //done is true because generator has not reached endpoint



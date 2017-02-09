function let(){

	var x = 10;

	if(x > 5){
		let x = 5;     //local scale that is only inside the code block
						// is not overriding global variable above
		console.log("inside: " + x)
	}	

	console.log("outside: " + x);
}

let();


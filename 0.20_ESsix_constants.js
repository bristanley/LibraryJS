
// function constant() {
// 	const pi =3.14;   //cannot be reassigned globally 
// 	console.log(pi);
// }

// constant();

function constant() {
	const pi =3.14;

	function calcArea(r) {
	const pi = 10;         ///can be reassigned locally
	console.log("The area is: " + pi * r * r );
	}


	calcArea(5);
}

constant();


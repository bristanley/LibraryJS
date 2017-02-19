function sets() {

	var names =  new Set();
								//does not display duplicates
	names.add("Brian").add("Bridget").add("George").add("Bridget"); 

	names.delete("Brian"); //returns a boolean. so cannot chain like .add

	// names.clear(); //clears everthing, therefore needs no parameter

	console.log(names.has("George"));// returns boolean

	console.log(names.size);

	console.log(names);

}

sets();

function sets2() {

	var bros = ["Gavin", "Walker", "Tunner", "Gavin", "Walker"];

	var refinedBros = new Set(bros);

	console.log(refinedBros);

	bros = [...refinedBros];
}

sets2();

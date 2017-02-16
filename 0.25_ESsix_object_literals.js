function object() {

	var name = "bob";

	var hair = "black";

	var man = {
		name: name,
		hair: hair,
		ran(x){
			console.log(`he walked ${x} miles`);
		}
	};

	// console.log(man.name);
	// console.log(man.hair);

	console.log(man.ran(500));
};

object();

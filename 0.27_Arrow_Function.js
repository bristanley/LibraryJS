// function arrow(){

// 	var greeting = name => {  //works as function
// 		console.log(`${name} says heyo`);
// 	};

// 	greeting("Brian");
// };

// arrow();

function arrow2(){

	var man = {
		name: "The Dude",
		bros(x){
			var_this = this;
			window.setInterval(function(){
				if(x > 0){
					console.log(this.name + " brod the dude");
					x--;
				}

			}, 1000);
		}
	}
arrow2.bros(5);
};

console.log(arrow2());




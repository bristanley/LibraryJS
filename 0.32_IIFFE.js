
(function(){


var sirs = function(){

	var dudeCount = 0;

	var dude1 = function(){
		dudeCount += 1;
		console.log('dude1 ' + dudeCount);
	};

	var dude2 = function(){
		dudeCount += 1;
		console.log('dude2 ' + dudeCount);
	};


	return {
		gentleman1: dude1, 
		gentleman2: dude2  

	};
};


var sir = sirs();

// sir.dude1(); cannot be invoked 

sir.gentleman1();
sir.gentleman2();
sir.gentleman2();
sir.gentleman2();

}());

//using IFFE no longer have globally defined variables 
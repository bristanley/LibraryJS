

var sirs = function(){

	var dudeCount = 0; //find out how many times dude1 and dude2 are invoked

	var dude1 = function(){
		dudeCount += 1;
		console.log('dude1 ' + dudeCount);
	};

	var dude2 = function(){
		dudeCount += 1;
		console.log('dude2 ' + dudeCount);
	};


	return {
		gentleman1: dude1, //gentleman1 points to dude1
		gentleman2: dude2  //gentleman2 points to dude2
		//defining public API
	};
};

var sir = sirs();

sir.gentleman1();
sir.gentleman2();
sir.gentleman2();
sir.gentleman2();

//a means to allias things
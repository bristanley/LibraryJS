// function person(name) {
// 	this.name = name;
// }

// var me = new person("Obi");

// me.name

// function person(name){
// 	var name = name;     //only exists in scope of person
// }

// me.name   //returns with person obj but not attribute name


function person(pName){
	var _name = pName;          //var _ is a naming convention for indicating a private variable

	this.getName = function(){
		return _name;
	};
}

var me = new person("Obi")


function isRightTriangle(side,base,hypo){
	if(side * side + base * base === hypo * hypo) {
		console.log('true');
	} else {
		console.log('false');
	}
}

isRightTriangle(5,6,7);
//take array and spread into individual elements

// function mySpread(){

// 	var beans = ['garbonzo', 'pinto', 'kidney'];

// 	console.log(...beans);

// }

// mySpread();

// function mySpread(){

// 	var nums1 = [1, 2, 3];
// 	var nums2 = [...nums1, 4, 5, 6];

// 	console.log(nums2);

// } //can put an array into an array but using spread will turn into single array

// mySpread();

var nums = [3, 5, 7];

function addNums(a, b , c){

	console.log(a+b+c);

}

addNums(...nums);

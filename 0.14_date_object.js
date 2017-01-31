// var myDate = new Date();

// console.log(myDate);
// 						//year.month.day.hour.minutes.seconds
// var myPastDate = new Date(1545, 11, 2, 10, 30, 15);
// var myFutureDate = new Date(2515, 0, 31);

// console.log(myPastDate);
// console.log(myFutureDate);

var birthday = new Date(1985, 0, 11, 15, 25);
var birthday2 = new Date(1985, 0, 11, 15, 25);

//get the month of the date (0-11)
console.log(birthday.getMonth());

console.log(birthday.getFullYear());

console.log(birthday.getDay());

console.log(birthday.getHours());

console.log(birthday.getTime());

if(birthday == birthday2) {

	console.log("birthdays are equal");

} else {
	console.log("birthdays are not equal");
}
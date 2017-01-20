// var myString = 'I\'m a "fun" foo';

// console.log(myString);

// console.log(myString.length);

// console.log(myString.toUpperCase());

// console.log(myString.toLowerCase());

// console.log(myString.indexOf("foo"));

// if (myString.indexOf("foo") === -1) {

// 	console.log("the word foo is not in the string");
// } else {
// 	console.log("the word ninja starts at position" + myString.indexOf("foo"));
// }

// var string1 = "abc";

// var string2 = "Bcd";

// console.log(string1.toLowerCase() === string2.toLowerCase());
// //capital letters are greater than lower case letters
// console.log(string1 < string2);



var sum = 0;
for (var i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log('Sum: ' + sum);



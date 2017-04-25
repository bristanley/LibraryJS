//Ajax for VJS and jQuery

// Vanilla Javascript method
// window.onload = function() {
//
//   var http = new XMLHttpRequest();
//
//   http.onreadystatechange = function() {
//     if (http.readyState == 4 && http.status == 200) {
//       // console.log(JSON.parse(http.response));
//       //will return tweets in JS Obj format
//     }
//   };
//
//   //      type of req   where        asynchronus or not
//   http.open("GET", "./data/tweets.json", true);
//   http.send(); //go get data
//
//
//   //jQuery method

//   $.get("data/tweets.json", function(data){
//     console.log(data);
//   })
//
// };




//synchronous callback
// window.onload = function() {
//
//   function callback(val) {
//     console.log(val);
//   }
//
//   var fruit = {"banana", "apple", "pear"};
//
//   fruit.forEach(callback);
//   console.log("done");
//
// };



//asychronous callback bcus of the $.get
window.onload = function() {

  $.get("data/tweets.json", function (data) {
    console.log(data);
  });
  console.log("test");
};

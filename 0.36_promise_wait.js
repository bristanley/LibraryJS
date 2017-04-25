// const wait = time => new Promise((resolve) => setTimeout(resolve,time));


// wait(3000).then(() => console.log('Hello!'));

// wait2(4000).then(() => console.log("It's me."));

// wait3(5000).then(() => console.log("I was wondering if after all these years you'd like to meet"));

// wait(3000).then(() => console.log("Hello") wait2(4000).then(() => console.log("It's me.")));

const wait = time => 
	new Promise((resolve) => 
		setTimeout(resolve,time));

wait(3000).then(() => {
	console.log("Hello");
	wait(4000).then(() => {
		console.log("It's me");
		return new Promise(resolve);
			wait(5000).then(() => {
				console.log("I was wondering if after all these years you'd like to meet")
			})
	})
});



	




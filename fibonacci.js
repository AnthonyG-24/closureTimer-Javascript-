//fibonacci.js

function fibonacci2n(n) {
	//Original Fibonacci where sequence is 1, 2, 3, ..., 21, 34, 55, ...
  	//Expects to be called with n>=1
  	//TODO: Add error checking for n<1
  	//Complexity is O(2^n)
  	if (n <= 1)
  	{
    	return 1;
  	}
  	else
  	{
    	return fibonacci2n(n - 1) + fibonacci2n(n - 2);
  	}
}


function fibonaccin(n) {
	//Original Fibonacci where sequence is 1, 2, 3, ..., 21, 34, 55, ...
 	//Expects to be called with n>=1
 	//TODO: Add error checking for n<1
 	//Complexity is O(n)
  	let num1 = 1;
  	let num2 = 1;
  	let temp = 0;

 	for(let ct = 1; ct <= n; ct++){
    	temp = num1;
    	num1 = num1 + num2;
    	num2 = temp;
 	}

  	return num2;
}


function MyTimer() {

	var startTime, lastElapsedTime;

  	function start() {
		startTime = Date.now();
		lastElapsedTime = startTime;
    }

	function elapsed() {
		let result = Date.now() - lastElapsedTime;
		lastElapsedTime = Date.now();
		return result;
	}

	function getTime() {
		return Date.now() - startTime;
	}

	var closure = {
		start: start,
		elapsed: elapsed,
		getTime: getTime
	};

	return closure;
}


//DriverCode
var num = process.argv[3];

let appTimer1 = MyTimer();
let appTimer2 = MyTimer();
//console.log("Elapsed: ", appTimer1.elapsed());
//console.log("Total Time: ", appTimer1.getTime());


var UserInput = process.argv[2];
switch(UserInput) {
	case "--recursive":
  	case "-r":
		appTimer1.start(); 
		fibonacci2n(num);
		console.log("Time to do first sum: ", appTimer1.getTime());
		appTimer2.start();
		fibonacci2n(num);
		console.log("Time to do second sum: ", appTimer2.getTime());
		console.log("Timer one time is now: ", appTimer1.getTime());
		break;
  	case "--iterative":
  	case "-i":
		appTimer1.start();
		fibonaccin(num); 
		console.log("Time to do first sum: ", appTimer1.getTime());
		appTimer2.start();
		fibonaccin(num);
		console.log("Time to do second sum: ", appTimer2.getTime());
		console.log("Timer one time is now: ", appTimer1.getTime());
		break;
  	case "--help":
  	case "h":
		console.log(" ")
		console.log("ENTER AN OPERATION")
		console.log("Recursive:", "--recursive, -r")
		console.log("Iterative:", "--iterative, -i")
		console.log(" ");
		process.exit(0);
		break;
}

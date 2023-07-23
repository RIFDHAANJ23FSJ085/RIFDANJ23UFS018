window.onload = initAll;

function initAll() {
	var ans = prompt("Enter a positive integer greater than 1","10");
	try {
		if (!ans || isNaN(ans) || ans <= 0 || Math.round(ans) != ans) {
			throw new Error("Not a valid number");
		}
		// call function here
		calculatePrimes(ans);
		
	}
	catch (errMsg) {
		alert(errMsg.message);
	}
}
function calculatePrimes(maxNumber){
	var primeString="";
	for (var testing=2; testing<=maxNumber;testing++){
		if(testForPrime(testing)){
		primeString+=testing+" , ";
	}
}
var lastCommaIndex = primeString.lastIndexOf(",");
if (lastCommaIndex != -1) {
primeString = primeString.substring(0, lastCommaIndex);
}
displayPrimes(maxNumber, primeString);}


function testForPrime(numberToTest){
	var modval=Math.ceil(Math.sqrt(numberToTest));
	for(;modval>1;modval--){
		if(numberToTest % modval == 0){
			return false;
		}
	}
	return true;
}

function displayPrimes(maxNumber, primeString) {
	document.write("Your maximum to check for primes was: " +
	maxNumber + "<br/>");
	// check if there are any primes
	if (primeString.length == 0) {
	document.write(
	"There are no prime numbers within your maximum");
	}
	else {
	document.write("The prime numbers up to your maximum are: " +
	primeString);
	}
	}





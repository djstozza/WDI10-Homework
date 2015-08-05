/*
The Calculator
Part 1

Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
Bonus: Round the result so there are only two digits after the decimal.
*/

var squareNumber = function (number) {
	var squareResult = number*number;
	console.log ("The result of squaring the number " + number + " is " + squareResult);
	return squareResult;
}

squareNumber(3);

var halfNumber = function (number) {
	var halfNumberResult = number/2;
	console.log ("Half of number " + number + " is " + halfNumberResult);
	return halfNumberResult;
}

halfNumber(5);

var percentOf = function (number1, number2) {
	var percentOfResult = number1 / number2 * 100;
	percentOfResult = Number(Math.round(percentOfResult + 'e2')+'e-2'); //not sure why but part2 seems to come up with undefined when .toFixed2 for percentageOfResult
	console.log(number1 + " is " + percentOfResult+ "% of " + number2);
	return percentOfResult;
}

percentOf(2,4);

var areaOfCircle = function (number) {
	var areaOfCircleResult = (Math.PI * number * number).toFixed(2);
	console.log ("The area of a circle with radius " + number + " is " + areaOfCircleResult);
	return areaOfCircleResult;
}

areaOfCircle(5);

/*
Part 2

Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).
*/

var calculator = function (number){
	var result1 = halfNumber(number);
	var result2 = squareNumber(result1);
	var result3 = areaOfCircle(result2);
	var result4 = percentOf(result2, result3);
	console.log(result4);
}
calculator(5);

/*
DrEvil

Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
*/

var DrEvil = function (dollars) {
	if (dollars === 1000000){
		return dollars + " dollars (pinky)";
	}
	else{
		return dollars + " dollars";
	}
}
console.log (DrEvil(10));
console.log (DrEvil(1000000));

/*
MixUp

Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/


var mixUp = function (str1, str2){
	if ((str1.length >=3) && (str2.length >=3)){
		console.log(str2.slice(0,2)+str1.slice(2) + " " + str1.slice(0,2) + str2.slice(2));
	}
	else {null}
}

mixUp("mix", "pod")

/*
FixStart

Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

fixStart('babble'): 'ba**le'
*/


var fixStart = function (string) {
	if (string.length >1 ){
		var sliceString = string.slice(1); //slices string at second letter
		var firstLetterOfString = string[0]; //defines the first letter of the string, which has been sliced off from the rest of the string as the first letter i.e. [0]
		var remainderOfString = sliceString.replace(new RegExp(firstLetterOfString, 'g'), '*');
		/*
		RegExp = regular expression - an object that describes a pattern of changes. Regular expressions used to perform pattern matching and "search-and-replace" functions on text. Coupled with a modifier: 'i' for case-sensitive matching, 'g' for global matching, 'm' for multiline matching.
		*/
		console.log(firstLetterOfString + remainderOfString);
		return firstLetterOfString + remainderOfString;
	} else {return string}
}

fixStart("babble");
fixStart("arkansas");
fixStart("sassy");

/*Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:*/
//word.length        slice(-3)

var verbing = function (word) {
  if (word.length < 3) {
  	return word;
  }
 else if (word.slice(-3) === 'ing') {
    return word + 'ly';
  } else {
    return word + 'ing';
  }
};

console.log(verbing('jump'));
console.log(verbing('swimming'));
console.log('go');

/*
Not Bad

Create a function called notBad that takes a single argument, a string.

It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'
*/



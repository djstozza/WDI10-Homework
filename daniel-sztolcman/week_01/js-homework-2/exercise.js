
// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// */

var array = [1, 5];
var maxOfTwoNumbers = function (array){
	if (array[0] > array[1]){
		console.log (array[0] + " is greater than " + array[1]);
	} else {
		console.log (array[1] + " is greater than " + array[0]);
	}
}

maxOfTwoNumbers(array);
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

var array = [400, 200, 5];
var maxOfThree = function (array){
	return Math.max.apply( Math, array ); //Math.max.apply( Math, array ) will evaluate which value in the array is the biggest
}

console.log("The biggest value is " + maxOfThree(array));

//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "o", "i", "u"];
 for (var i = 0; i <alphabet.length; i++){
 	if (alphabet[i] === "a" || alphabet[i] === "e" || alphabet [i] === "i" || alphabet[i] === "o" || alphabet[i] === "u"){
 		console.log(alphabet[i] + " is a vowel");
 	}
 	else {console.log (alphabet[i] + " is a consonant");
 	}
 }

//Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

var arr = [1,2,3,4];
var sumArray = function(arr){
	var total = 0; 
 	for (var i = 0; i <arr.length; i++){
    total += arr[i];
 	} 
 	console.log(total);
}
sumArray(arr);

var arr = [1,2,3,4];
var multiplyArray = function(arr){
	var total = 1;
 	for (var i = 0; i <arr.length; i++){
    total = total * arr[i];
 	} 
 	console.log(total);
}
multiplyArray(arr);

//Bonus

//Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

var arr = ["j", "a", "g", " ", "t", "e", "s", "t", "a", "r"];

var reverseString = function(arr){
	console.log(arr.reverse());
}
reverseString(arr);
/*
var reverseString = function (str){
	for (var i = str.length -1 ; i>= 0; i--){
		var reversedCharacters = str.charAt(i); // breaks up the string into individual characters
		//var reversedStr = reversedCharacters.join("");
	}

}

reverseString("jag testar");

//Write a function findLongestWord that takes an array of words and returns the length of the longest one.

var arr = ["hello", "goodbye", "afternoon", "battleship"];

var findLongestWord = function (arr){
	var longest = 0;
	var word = "";
	for (var i = 0; i <arr.length; i++){
		if (longest < arr[i].length){
			longest = arr[i].length;
			word = arr[i];
		}	
	}
	return word;
}
console.log("The longest word in the array is: " + findLongestWord(arr));
/*
Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
Raw  js-homework-3.md
*/

var arr = ["lion", "tiger", "elephant", "kangaroo"];
var filterLongWords = function (arr, i){
	var newArr = [];
	for (var j = 0; j < arr.length ; j ++){
		if (arr[j].length > i){
			newArr.push(arr[j]);
		} else {null;}
		
	} 
	console.log(newArr);
};
filterLongWords(arr, 5);
/*
Homework: The Word Guesser
You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
*/

/*
Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
*/



/*
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.

If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.

It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
*/

var word = []; // Declares an empty array called word
var guessedWord = [];
var guessedLetters = [];

var setWord = function ( string ) {
	word = string.split(""); //Splits a string into an array
	
	for (var i = 0; i < word.length; i++) {
	guessedWord.push("*"); // Pushes "*" into an array for the length of the word that needs to be guessed
	
	}
}

var guessLetter = function ( letter ) {
	// Does the letter that you gest already exist in the guessedLetters array?
	if (guessedLetters.indexOf ( letter ) >=  0) {
		console.log ( " You have already guessed that!" );
		// >=0 means true so it means that the letter has already been guessed
	} else {
		guessedLetters.push ( letter );
		console.log ( guessedLetters );
		var guessedIndex = word.indexOf( letter );
		// Does the guessed letter exist in the original word (i.e. the word that was set)

		if ( guessedIndex >= 0 ) {
			// if we found a letter that was guessed in a word (>=0 means true)
			guessedWord[guessedIndex] = letter;
			// puts the guessed letter into the correct place in the guessedWord array in correlation to the original word
			console.log ( guessedWord );
			if (guessedWord.indexOf("*") < 0 ) {
				return alert( "You Won !" );
			} 
		}
	}
	guessLetter(prompt("What is your guess?"))
}

setWord(prompt("What word do you want to play wit?");)

/*
var word = [];
var str;

var wordGuesser = 
var inputWord = function (word){
	prompt("Please choose the word for someone to guess");
	return word;
};


var userInput = function (letter){
	prompt("Guess the word by typing in a letter");
	return letter;
};

var userInterface = function (blankArr){
	var str = inputWord();
	for (i = 0; i < str.length ; i++){
		var blankArr = [];
		blankArr.push("*");
		
	}
	console.log(blankArr);
	return blankArr;
};

userInterface();

/*
var word = ["f", "o" , "x"];
var userInterface = ['*','*','*'];

var wordsLeftToGuess = word.length-1;

 var guessLetter = function (guess){
	while (wordsLeftToGuess > 0){

		if (guess === word[i]){
			console.log("Hooray, you gessed correctly!");
			wordsLeftToGuess--;
			userInterface[i] = word[i]
			console.log(userInterface);
			guessLetter(prompt("Guess a word"));
 		} else if (guess !== word[i]){
 			console.log("Whoops! That's not correct... Guess Again!");
 		}

	}
 }
guessLetter(prompt("Guess a word")); */
// 	/*
// 	var guess = false;
// 	var blanksRemaining = true;

// 	var moreToGuess = true;
// 	for (var i = 0; i<word.length; i++){
// 		if (guess == word[i]){
// 			userInterface[i] = word[i];
// 			console.log(userInterface);
// 			guess = true;
// 			prompt(guess);
// 		} else {guess = false;}
// 	}
// 	if (guess = true){
// 			console.log("Hooray, you guessed correctly! Keep it up!");
// 		} else {
// 			console.log("Whoops! That's not correct... Guess again!");
// 		}
// 	if (blanksRemaining === true){
// 		return prompt(guess);
// 	} else if (blanksRemaining === false){
// 		console.log("Hooray! You've won the game!");
// 	}
// }

// var guess = prompt(console.log("Let's see if you can guess the mystery word. Type a letter into the box below to see if reveals a letter."));
// guessLetter(guess);

// /*
// Bonus: Make it more like Wheel of Fortune:

// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
// Bonus: Make it like Hangman:

// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

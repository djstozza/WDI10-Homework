/*Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
var rectangle = {
  length: 4,
  width: 4
}; */

// area returns the area of the rectangle
//perimeter - returns the perimeter

var rectangle = {
	length: 4,
	width: 4,
}

var isSquare = function (shape) {
	if (shape.length === shape.width) {
		
		return " This shape is a square ";
	} else {
		return " This shape is not a square ";
	}
}

console.log( isSquare ( rectangle ) );

var area = function (shape) {
	return shape.width * shape.length
}

console.log( area ( rectangle ) );

// Part 2, Triangle

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// var triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

var triangle = {
	sideA: 3,
	sideB: 4,
	sideC: 4,
}

var shape;
var isEquilateral = function ( shape ) {
	if ( shape.sideA === shape.sideB && shape.sideA === shape.sideC && shape.sideB === shape.sideC ) {
		return " This triangle is an equilateral triangle  ";
	} else {
		return " This triangle is not an equilateral triangle ";
	}
}

console.log ( isEquilateral ( triangle ) );

var isIsosceles = function ( shape ) {
	if (shape.sideA === shape.sideB && shape.sideA === shape.sideC) {
	} else if (!isEquilateral(shape) && (shape.sideA === shape.sideB || shape.sideA === shape.sideC || shape.sideB === shape.sideC)){
		return " This triangle is an isosceles triangle ";
	} else {
		return " This triangle is not an isosceles triangle " ;
	}
}

console.log ( isIsosceles ( triangle ) );

var isObtuse = function (shape){
	var angleA = Math.acos( ( ( shape.sideB * shape.sideB ) + ( shape.sideC * shape.sideC ) - ( shape.sideA * shape.sideA ) ) / 2 * shape.sideB * shape.sideC );
	var angleB = Math.acos( ( ( shape.sideA * shape.sideA ) + ( shape.sideC * shape.sideC ) - ( shape.sideB * shape.sideB ) ) / 2 * shape.sideA * shape.sideC );
	var angleC = 180 - angleA - angleB;

	if ( angleA > 90 || angleB > 90 || angleC > 90) {
		return " This triangle is an obtuse triangle ";
	} else {
		return " This triangle is not an obtuse triangle ";
	}
}

console.log ( isObtuse( triangle ) );



var triangleArea = function ( shape ) {
	var semiPerimiter = ( ( shape.sideA + shape.sideB + shape.sideC ) / 2 );
	var area = Math.sqrt( semiPerimiter * ( semiPerimiter - shape.sideA ) * ( semiPerimiter - shape.sideB ) * (semiPerimiter - shape.sideC));
	return " The triangle's area is " + area;
}

console.log( triangleArea ( triangle ) );

// Thank you Mr. Herron

/*
Bank

There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality
*/


//bank accounts with account-name and balance as common features



var bankAccount = [
	{ 	accountName: "Daniel",
		balance: 1005	},
	{ 	accountName: "Adrian",
		balance: 1000 	},
	{	accountName: "Vivian",
		balance: 2000	},
	{	accountName: "Gemma",
		balance: 1500	},
	{	accountName: "Vivienne",
		balance: 1300	}];



var totalSum = function(accounts){
	var total = 0;
 	for (var i = 0; i <accounts.length; i++){
    total += accounts[i].balance;
 	} 
 	return total;
}

console.log ( totalSum(bankAccount) );

var newAccount = function (newAccountName, newBalance) {
	var accountName = bankAccount.push({accountName: newAccountName, balance: newBalance});
}

newAccount("John", 1962);
newAccount("Paul", 1962);
newAccount("George", 1962);
newAccount("Ringo", 1962);
newAccount("Pete", 1962);
console.log(bankAccount);



var depositAmount = function (accountName, deposit){
    //loop through bank, for loop i less than bank array, if the current elements name is equal to name when depositing 
    for (var i = 0; i < bankAccount.length; i ++){
        if (bankAccount[i].accountName === accountName) {
            return bankAccount[i].balance += deposit;
        }
    }
};

depositAmount("Daniel", 5000);
console.log(bankAccount)

var withdrawalAmount = function (accountName, withdrawal){
    //loop through bank, for loop i less than bank array, if the current elements name is equal to name when depositing 
    var withdrawal;
    for (var i = 0; i < bankAccount.length; i ++) {
    	if ( 	bankAccount[i].accountName === accountName ) {
    			bankAccount[i].balance -= withdrawal;
    		if (bankAccount[i].balance > withdrawal){
    			return bankAccount[i].balance -= withdrawal;
    		} else {
    			return 
    		}
    	} 
    }
}


console.log(withdrawalAmount ("Pete", 2000)); 



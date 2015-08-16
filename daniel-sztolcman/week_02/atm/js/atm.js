/*
have an atm
need to keep track of two accounts: cheque and savings
cheque and savings have two accounts: deposit and withdrawal
depositing adds to the total of the account while withdrawal removes
a balance would be the combination of the two



*/
// this makes the value in the cheque console a value






















var atm = {
  chequeBalance: 0,
  chequeRecord: [this.chequeBalance,],
  savingsBalance: 0,
  savingsRecord: [this.savingsBalance,],
  	
  	validateChequeDeposit: function () {
  		this.chequeRecord[0] = 0;
  		var depositAmount = parseFloat($('#cheque-amount').val());
  		if (depositAmount > 0 ){
  			this.chequeDepositAmount();
  		} else {
  			alert('A bank deals in money, not in chickens and goats...');
	  		this.chequeRecord.pop(this.chequeBalance);
	  		this.chequeBalance = this.chequeRecord[this.chequeRecord.length-1];
  		}
  	},

  	chequeDepositAmount: function () {
	  	var depositAmount = parseFloat($('#cheque-amount').val());
	  	this.chequeBalance += depositAmount;
	  	this.chequeRecord.push(this.chequeBalance);
	  	return $('#cheque-balance').text('$' + this.chequeBalance);
  	},

  	validateChequeWithdrawal: function () {
  		this.chequeRecord[0] = 0;
  		var withdrawalAmount = parseFloat($('#cheque-amount').val());
  		if (withdrawalAmount > 0 ){
  			this.chequeWithdrawalAmount();
  			this.overDrawn();
  			this.redZero();
  		} else {
  			alert('A bank deals in money, not in chickens and goats...');
	  		this.chequeRecord.pop(this.chequeBalance);
	  		this.chequeBalance = this.chequeRecord[this.chequeRecord.length-1];
  		}
  	},

  	chequeWithdrawalAmount: function () {
	  	var withdrawalAmount = parseFloat($('#cheque-amount').val());
	  	this.chequeBalance -= withdrawalAmount;
	  	this.chequeRecord.push(this.chequeBalance);
	  	return $('#cheque-balance').text('$' + this.chequeBalance);
  	},

  	validateSavingsDeposit: function () {
  		this.savingsRecord[0] = 0;
  		var depositAmount = parseFloat($('#savings-amount').val());
  		if (depositAmount > 0 ){
  			this.savingsDepositAmount();
  		} else {
  			alert('A bank deals in money, not in chickens and goats...');
	  		this.savingsRecord.pop(this.savingsBalance);
	  		this.savingsBalance = this.savingsRecord[this.savingsRecord.length-1];
  		}
  	},

  	savingsDepositAmount: function () {
	  	var depositAmount = parseFloat($('#savings-amount').val());
	  	this.savingsBalance += depositAmount;
	  	this.savingsRecord.push(this.savingsBalance);
	  	return $('#savings-balance').text('$' + this.savingsBalance);
  	},

  	validateSavingsWithdrawal: function () {
  		this.savingsRecord[0] = 0;
  		var withdrawalAmount = parseFloat($('#savings-amount').val());
  		if (withdrawalAmount > 0 ){
  			this.savingsWithdrawalAmount();
  			this.overDrawn();
  			this.redZero();
  		} else {
  			alert('A bank deals in money, not in chickens and goats...');
	  		this.savingsRecord.pop(this.savingsBalance);
	  		this.savingsBalance = this.savingsRecord[this.savingsRecord.length-1];
  		}
  	},

  	savingsWithdrawalAmount: function () {
	  	var withdrawalAmount = parseFloat($('#savings-amount').val());
	  	this.savingsBalance -= withdrawalAmount;
	  	this.savingsRecord.push(this.savingsBalance);
	  	return $('#savings-balance').text('$' + this.savingsBalance);
  	},
  	


  	overDrawn: function () {
  		if (this.chequeBalance < 0 && this.savingsBalance <= 0) {
  			alert('A bank is not a charity...');
  			this.chequeRecord.pop(this.chequeBalance);
  			this.chequeBalance = this.chequeRecord[this.chequeRecord.length-1];
  			return $('#cheque-balance').text('$' + this.chequeBalance);
  		}

  		if (this.savingsBalance < 0 && this.chequeBalance === 0) {
  			alert('A bank is not a charity...');
  			this.savingsRecord.pop(this.savingsBalance);
  			this.savingsBalance = this.savingsRecord[this.savingsRecord.length-1];
  			return $('#savings-balance').text('$' + this.savingsBalance);
  		}

  		if (this.savingsBalance < 0){
  			this.chequeBalance += this.savingsBalance;
  			this.savingsBalance = 0;
  			return $('#savings-balance').text('$' + this.savingsBalance), $('#cheque-balance').text('$' + this.chequeBalance);
  		}

  		if (this.chequeBalance < 0) {
  			this.savingsBalance += this.chequeBalance;
  			this.chequeBalance = 0;
  			return $('#savings-balance').text('$' + this.savingsBalance), $('#cheque-balance').text('$' + this.chequeBalance);
  		}

  		if (this.savingsBalance === 0 && this.chequeBalance < 0) {
  			alert('A bank is not a charity...');
  		}
  	},

  	redZero : function () {
  		if (this.savingsBalance === 0) {
  			$('#savings-balance.balance').css('background-color', 'red');
  		} else if (this.savingsBalance > 0 ) {
  			$('#savings-balance.balance').removeAttr('background-color', 'initial');
  		}



  		

  		if (this.chequeBalance === 0) {
  			$('#cheque-balance.balance').css('background-color', 'red');
  		}

  		if (this.chequeBalance > 0) {
  			$('#cheque-balance.balance').css('background-color', '#E3E3E3');
  		}
  	},



  	init: function () {
     // jQuery stuff goes here
	     $('#cheque-deposit').on('click', function (e) {
	     	e.preventDefault;
	     	atm.validateChequeDeposit();
     	});

	     $('#cheque-withdraw').on('click', function (e) {
	     	e.preventDefault;
	     	atm.validateChequeWithdrawal();
     	});

	     $('#savings-deposit').on('click', function (e) {
	     	e.preventDefault;
	     	atm.validateSavingsDeposit();
     	});

	     $('#savings-withdraw').on('click', function (e) {
	     	e.preventDefault;
	     	atm.validateSavingsWithdrawal();
     	});


   }
}


// then a minimal document ready:

$(document).ready(function () {
    atm.init();
});

	// getDepositAmount: function(){
	// var depositAmount = 0;
	// //var depositAmount = ($('#cheque-amount').val());
	// this.chequeBalance += parseInt(this.depositAmount);
	// $('#cheque-balance').text('$' + this.chequeBalance);
	// 	this.chequeBalance = parseFloat(this.chequeBalance) + depositAmount;
	// 	return $('#cheque-balance').text('$' + this.chequeBalance);
		

	// 	// // $('#cheque-deposit').click(function (e){
	// 	// // 	depositAmount;
	// 	// // });
	// 	// this.chequeBalance = this.chequeBalance + depositAmount;
	// 	// $('#cheque-balance').text('$' + atm.chequeBalance);
		
	// 	// if ((depositAmount < 0)|| (depositAmount === NaN)) {
	// 	// 	return alert('We deal in money here, not chickens and goats!');
	// 	// } else {
	// 	// 	this.chequeBalance += depositAmount;
	// 	// 	return $('#cheque-balance').text('$' + this.chequeBalance);
	// 	// }
		
	//},


	// chequeDeposit: function () {	
	//   	this.chequeBalance += this.getDepositAmount();
	//   	return this.chequeBalance;
 //  	},

	// getWithdrawalAmount: function(){
	// 	var withdrawalAmount = parseFloat($('#cheque-amount').val());
	// 	$('#cheque-withdraw').click(function (e){
	// 		withdrawalAmount;
	// 	});

	// 	if (withdrawalAmount > 0) {
	// 		return withdrawalAmount;
	// 	} else {
	// 		return alert('We deal in money here, not chickens and goats!');
	// 	}
	
	// },

	// chequeWithdraw: function () {	
	//   	this.chequeBalance -= this.getWithdrawalAmount();
	  	
	//   	if (this.chequeBalance < 0 ){
	//   		return alert("We're not a charity here...");
	//   	} else {
	//   		return this.chequeBalance;
	//   	}
	// },



// var amountString = $('#cheque-balance.balance').text();
// var amount = parseFloat(amountString.substr(1, (amountString.length-1)));






// need to change the text input on the cheque console to reflect the value that has been deposited. 





// $('#cheque-deposit').click(function (e){
// 	console.log('clicked');
// 	amount += parseFloat($('#cheque-amount').val());
// })


//need to make sure that the value is a number before it is submitted.


//keep track of various amounts in an array 

// $('input#cheque-deposit').click(function (e){
// 	e.preventDefault();
// 	console.log($('input#cheque-deposit').submit('placeholder'));
// })


// var atm = {
//   chequeBalance: 0,
//   savingsBalance: 0,

//   // .. other code here..

// depositcheque: function () {
// 	var depostAmount = parseInt($('#cheque-amount').val());
// 	var atm.chequeBalance += depositAmount;
// 	$('#cheque-balance').html('$'+ atm.savingsBalance);
// }


//   init: function () {
//     // jQuery stuff goes here
//     //$('button').on('click', whatever);
//   }
// }

// // then a minimal document ready:

// $(document).ready(function () {
//     atm.init();
// });

// that way you'll still be able to access the atm object even after the document is ready

// that way you'll still be able to access the atm object even after the document is ready



 // var atm = {
 // 	cheque: [ depositTotal, withdrawalTotal ],
 // 	savings: [depositTotal, withdrawalTotal ],

 // 	getWithdrawalAmount: function (e) {

 // 	},


// 	deposit: function (depositAmount) {
// 		this.depositTotal = 0;
// 		return depositTotal += parseInt(depositAmount);
// 	},

// 	withdrawal: function (withdrawalAmount) {
// 		this.withdrawalTotal = 0;
// 		return withdrawalTotal += parseInt(withdrawalAmount);
// 	}, 

// 	totalBalance: function () {
// 		this.balance = depositTotal - withdrawalTotal;
// 		return balance;
// 	},


// 	overDrawn: function () {
// 		 if ( depositTotal < withdrawalTotal ) {
// 		 	var message = "You do not have the funds to do that";
// 		 	return message;
// 		 }
// 	}


//}




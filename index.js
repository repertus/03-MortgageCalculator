
$("#buttonPaymentCalculation").click(function() {
	// Loan balance
	var loanBalance = $('#loanBalance').val();

	// Annual interest rate
	var interestRate = $('#interestRate').val();

	//Loan term for a period of years 
	var loanTerm = $('#loanTerm').val();

	// Period is 1 for monthly, 0.5 for bi-monthly
	var periodSelection = $('#periodSelection option:selected').val();

	console.log(loanBalance);

	//If then to insure user enters all fields
	if (loanBalance == "" || interestRate == "" || loanTerm == "") {
		alert("You must fill all fields!");

	} else {

	// 	//Number of monthly or bi-monthly payments
		var numberOfMonths = loanTerm * periodSelection;

	// 	// Monthly interest rate
		var monthlyInterestRate = (interestRate/100) / periodSelection;

	// 	//Compounded interest rate
		var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfMonths);

	// 	//Interest quotient
		var interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

	// 	//Final calculation rounded to two decimal places
		var monthlyPayment = Math.round((loanBalance * interestQuotient) * 100) / 100;

	// 	//Monthly payment output for the user
		$('#monthlyPaymentOutput').text('Your monthly estimated mortgage payment is $'+ monthlyPayment);

		//Re-sets form
		$('#loanBalance').val("");
		$('#interestRate').val("");
		$('#loanTerm').val("");
		$('#periodSelection').val(12);
	}


});
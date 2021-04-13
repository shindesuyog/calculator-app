function computeLoan(){
    var amount = document.getElementById('amount').value;
	var interest_rate = document.getElementById('interest_rate').value;
	var months = document.getElementById('months').value;
	var interest = (amount * (interest_rate * .01)) / months;
	var payment = ((amount / months) + interest).toFixed(2);       //to fixed is used to fix the decimal to 2 decimal point value
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	
	document.getElementById('payment').innerHTML = "Monthly Payment = $"+payment;

}
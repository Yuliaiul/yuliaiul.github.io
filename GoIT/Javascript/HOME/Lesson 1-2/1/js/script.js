	var iNum = +prompt('Enter your number!', '');
	
	var n = +prompt('Enter the power to rase your number!', '');
	
	function power (iNum,n) {
    var iResult = 1;
    for (var i = 1; i < n; i++) {
    	iResult *= iNum
    }
    	return iResult;
	}
	var powerResult = power (iNum,n);
	
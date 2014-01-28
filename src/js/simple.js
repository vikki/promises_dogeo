function divide(x, y, onSuccess, onFail) {
	if (y <=1 ){
		onFail('div by zero');
		return;
	}
	onSuccess(x / y);
}
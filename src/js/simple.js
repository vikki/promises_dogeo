function divide(x, y) {
	var dfd = Q.defer();

	if (y <=1 ){
		dfd.reject('div by zero');
	}
	dfd.resolve(x / y);

	return dfd.promise;
}
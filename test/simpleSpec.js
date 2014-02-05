describe('simple', function() {
	describe('divide', function(done) {
		it('resolves promise when division possible', function() {
			var promise = divide(8,2);
			return expect(promise).to.be.fulfilled;
		});

		it('resolves promise with answer when division possible', function() {
			var promise = divide(8,2);
			return expect(promise).to.eventually.equal(4);
		});

		it('rejects promise with error when division not possible', function() {
			var promise = divide(8,0);
			return expect(promise).to.be.rejectedWith('div by zero');
		});
	})
	
})
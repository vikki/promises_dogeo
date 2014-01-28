function do_doge() {
	var words = [];

	requestRandomWord()
	   .then(function(word1) {
	   		console.log('get word 1');
	   		words.push(word1);
	   		return requestRandomWord();
	   })
	   .then(function(word2) {
	   		console.log('get word 2');
	   		words.push(word2);
	   		//throw new Error("ergh");
	   		return requestRandomWord();
	   })
	   .then(function(word3) {
	   		console.log('get word 3');
   			words.push(word3);
			getDogrImg(words);
		})
	   .catch(function(e) {
	   	  console.log('it broke' + e);
	   })
}

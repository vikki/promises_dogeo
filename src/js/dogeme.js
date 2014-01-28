var words = [];

// yeah you can write both of these more functionally 
// with bind but i was trying not to be too confusing
function itWorked() {
	getDogrImg(words);
}

function itFailed() {
	getDogrImg(getDogeErrorInputs());
}

function do_doge(iMakeItFail) {
	requestRandomWord()
	   .then(function(word1) {
	   		words.push(word1);
	   		return requestRandomWord();
	   })
	   .then(function(word2) {
	   		words.push(word2);
	   		if (iMakeItFail) {
	   			throw new Error("this is supposed to happen. ya rly.");	
	   		}
	   		
	   		return chooseRandomWord();
	   })
	   .then(function(word3) {
   			words.push(word3);
		})
	   .done(itWorked, itFailed);
}

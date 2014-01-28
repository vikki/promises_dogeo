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
	requestRandomWord(function(word1) {
	   		words.push(word1);
	   		return chooseRandomWord(function(word2) {
		   		words.push(word2);

		   		try {
		   			if (window.location.search.match(/throwErrorInHandler=true/) !== null) {
			   			throw new Error("fulfillment handler fails");	
			   		}
		   		} catch(e) {
		   			 itFailed();
		   			 return;
		   		}
		   		
		   		return requestRandomWord(function(word3) {
		   			words.push(word3);
		   			itWorked();
				},
				itFailed);
		   },
		   itFailed);
	   }, 
	   itFailed);
}

function do_doge() {
	var words = [];

	requestRandomWord()
	   .then(function(word1) {
	   		words.push(word1);
	   		return requestRandomWord();
	   })
	   .then(function(word2) {
	   		words.push(word2);
	   		return requestRandomWord();
	   })
	   .then(function(word3) {
   			words.push(word3);
			getDogrImg(words);
		});
}

function getDogrImg(dogeInputs) {
	var dogrUrl = getDogrUrl(dogeInputs);
	addImageToPage(dogrUrl);
}

function addImageToPage(url) {
	var img = new Image();
	img.onload = function() {
		document.body.appendChild(img);
	}
	img.src = url;
}

function getDogrUrl(dogeInputs) {
	var dogrUrl = "http://dogr.io/wow/such{0}/much{1}/very{2}.png";
	if (typeof dogeInputs !== 'object' || dogeInputs.length != 3) {
		dogeInputs = ["sad", "invalid", "indexexception"];
	}

	dogeInputs.forEach(function(val, i) {
		dogrUrl = dogrUrl.replace('{' + i +'}', val);
	});

	return dogrUrl;
}

function requestRandomWord() {
	var dfd = Q.defer();

	$.ajax({
		url: 'http://randomword.setgetgo.com/get.php', 
		success: function(e) {
			dfd.resolve(e.Word);
		},
		dataType: 'jsonp'
	});
	
	return dfd.promise;
}

do_doge();
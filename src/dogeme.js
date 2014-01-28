function do_doge() {
	requestRandomWord(function(word1) {
		requestRandomWord(function(word2) {
			requestRandomWord(function(word3) {
				var words = [].concat(word1, word2, word3);
				console.dir(words);
				getDogrImg(words);
			});
		});
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

function requestRandomWord(callback) {
	$.ajax({
		url: 'http://randomword.setgetgo.com/get.php', 
		success: function(e) {
			callback(e.Word);
		},
		dataType: 'jsonp'
	});
}

do_doge();
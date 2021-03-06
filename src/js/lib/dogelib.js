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

function getDogeErrorInputs() {
	return ["sad", "invalid", "indexexception"];
}

function getDogrUrl(dogeInputs) {
	var dogrUrl = "http://dogr.io/wow/such{0}/much{1}/very{2}.png";
	if (typeof dogeInputs !== 'object' || dogeInputs.length != 3) {
		dogeInputs = getDogeErrorInputs();
	}

	dogeInputs.forEach(function(val, i) {
		dogrUrl = dogrUrl.replace('{' + i +'}', val);
	});

	return dogrUrl;
}

function requestRandomWord(onSuccess, onError) {
	var url = 'http://randomword.setgetgo.com/get.php';
	if (window.location.search.match(/errorHandler=true/) !== null) {
		url = 'http://www.blabla.com/';
	}

	$.ajax({
		url: url, 
		success: function(e) {
			onSuccess(e.Word);
		},
		error: function(error) {
			onError(error);
		},
		dataType: 'jsonp'
	});
}

function chooseRandomWord(onSuccess, onError) {
	var choiceOfWords = ['rectangle', 'america', 'megaphone', 'monday', 'butthole'],
		randomIndex;

	if (window.location.search.match(/throwErrorInCaller=true/) !== null) {
		onError('promise has chucked a big error');
		return;
	}

	randomIndex = Math.round(Math.random() * (choiceOfWords.length-1));

	onSuccess(choiceOfWords[randomIndex]);
}

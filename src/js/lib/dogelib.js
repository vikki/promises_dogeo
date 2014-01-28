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

function chooseRandomWord() {
	var dfd = Q.defer(),
		choiceOfWords = ['rectangle', 'america', 'megaphone', 'monday', 'butthole'],
		randomIndex;

	if (makeItFail) {
		throw new Error('borked');
	}

	randomIndex = Math.round(Math.random() * (choiceOfWords.length-1));

	dfd.resolve(choiceOfWords[randomIndex]);
	
	return dfd.promise;
}

function before (before, fn) {
  return function () {
    before.apply(this, arguments);
    return fn.apply(this, arguments);
  };
};

function logFunc(fn) {
	window[fn] = before(function() {
		console.info('%crunning ' + fn, 'color:magenta');
	}, window[fn]);
}
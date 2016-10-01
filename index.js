var watson = require('watson-developer-cloud');
console.log(watson);
var auth = require('./auth.js');

var tone_analyzer = watson.tone_analyzer(auth.tone_analyzer);

var mytext = "greetings";
tone_analyzer.tone({text: mytext},function(err,result) {
	if (err) {
		return console.log(err);
	}
	console.log(JSON.stringify(result , null, 2));
});
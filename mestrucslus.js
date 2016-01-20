console.log("Mes trus lus");
var textract = require('textract');


var filePath = "/Users/pierrejuliencazaux/Desktop/Dictionnaire\ perso.rtf";
var config = {
	preserveLineBreaks: true
};

textract.fromFileWithPath(filePath, config, function( error, text ) {
	if(error) {
		console.log(error);
	} else {
		//console.log(text);
		var t = text.split("\n");
		console.log(t.length);
		var linegap = 0;
		for (var p of t) {
			if(p == "") {linegap++}
			else if(p == " ") {linegap++}
			else if(p.length == 1) {
				console.log("#############", p);
			}
			console.log(p);
			if(linegap == 1) {

				console.log("---");
			}
			linegap = 0;

		}
	}
});
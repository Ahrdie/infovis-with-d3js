/**
 * Created by letty on 30.05.17.
 */

var fs = require('fs');
var d3 = require('d3');

fs.readFile('landings.csv', 'utf-8', function (error, data) {
	if (error) console.log(error);
	// console.log(data);
	data = d3.csvParse(data);

	var data_reduced = [];
	data.forEach(function (d){
		if (+d.reclat !=  0.0 && +d.reclong != 0.0) {
			data_reduced.push(d);
		}
	});

	fs.writeFile('landings_reduced.json', JSON.stringify(data, null, '\t'), function (err){
		if (err) throw err;
				console.log('The file has been saved!');
	})

});
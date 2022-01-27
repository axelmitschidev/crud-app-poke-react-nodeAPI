const mongoose = require('mongoose');

mongoose.connect(
	"mongodb+srv://axelmitschidev:06mdkN3jKgUXVj8W@axelcluster.cpi62.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	err => {
		if (err) console.error(err);
		else console.log('MongoDB connexion success !');
	}
);
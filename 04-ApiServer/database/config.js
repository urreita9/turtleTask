const mongoose = require('mongoose');

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_CNN, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log('Db online');
	} catch (error) {
		console.log(error);
		throw new Error('Error initializing Database');
	}
};

module.exports = dbConnection;

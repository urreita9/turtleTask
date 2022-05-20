// const r = { name, dial, id, img };
const { Schema, model } = require('mongoose');

const RadioSchema = Schema({
	name: {
		type: String,
		required: [true, 'Name is required'],
	},
	img: {
		type: String,
		required: [true, 'Img is required'],
	},
	dial: {
		type: Number,
		required: [true, 'Dial is required'],
		unique: true,
	},
	active: {
		type: Boolean,
		default: true,
	},
});

module.exports = model('Radio', RadioSchema);

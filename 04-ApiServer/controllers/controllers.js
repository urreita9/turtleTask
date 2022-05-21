const Radio = require('../models/radio');

const getRadios = async (req, res) => {
	res.json({ msg: 'get radios' });
};

const createRadio = async (req, res) => {
	const body = req.body;

	try {
		const radio = await new Radio({ ...body });

		console.log(radio);
		await radio.save();

		res.json({
			ok: true,
			radio,
		});
	} catch (error) {
		console.log(error);
		res.status(404).json({ ok: false, error });
	}
};

const updateRadio = async (req, res) => {
	res.json({ msg: 'put radio' });
};

const deleteRadio = async (req, res) => {
	res.json({ msg: 'delete radio' });
};

module.exports = {
	getRadios,
	createRadio,
	updateRadio,
	deleteRadio,
};

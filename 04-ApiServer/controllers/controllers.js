const Radio = require('../models/radio');

const getRadios = async (req, res) => {
	try {
		const radios = await Radio.find({ active: true });

		const mappedRadiosId = radios.map((radio) => ({
			name: radio.name,
			id: radio._id,
			dial: radio.dial,
			img: radio.img,
		}));

		res.json({ ok: true, radios: mappedRadiosId });
	} catch (error) {
		res.status(400).json({ ok: false, error });
	}
};

const createRadio = async (req, res) => {
	const body = req.body;

	try {
		const alreadyExists = await Radio.findOne({ dial: body.dial });

		if (alreadyExists)
			return res
				.status(400)
				.json({ ok: false, msg: 'Radio dial already exists' });

		const radio = await new Radio({ ...body });

		await radio.save();

		res.json({
			ok: true,
			radio: {
				id: radio._id,
				name: radio.name,
				dial: radio.dial,
				img: radio.img,
			},
		});
	} catch (error) {
		res.status(500).json({ ok: false, error });
	}
};

const updateRadio = async (req, res) => {
	const body = req.body;
	const { id } = req.params;

	try {
		const radio = await Radio.findByIdAndUpdate(id, { ...body }, { new: true });

		if (!radio)
			return res.status(400).json({ ok: false, msg: "Radio doesn't exist" });

		res.json({
			ok: true,
			radio: {
				id: radio._id,
				name: radio.name,
				dial: radio.dial,
				img: radio.img,
			},
		});
	} catch (error) {
		res.status(400).json({ ok: false, error });
	}
};

const deleteRadio = async (req, res) => {
	const { id } = req.params;

	try {
		const radio = await Radio.findByIdAndUpdate(
			id,
			{ active: false },
			{ new: true }
		);

		if (!radio)
			return res.status(400).json({ ok: false, msg: "Radio doesn't exist" });

		res.json({
			ok: true,
			radio: {
				id: radio._id,
				name: radio.name,
				dial: radio.dial,
				img: radio.img,
			},
		});
	} catch (error) {
		res.status(400).json({ ok: false, error });
	}
};

module.exports = {
	getRadios,
	createRadio,
	updateRadio,
	deleteRadio,
};

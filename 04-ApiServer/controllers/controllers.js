const getRadios = async (req, res) => {
	res.json({ msg: 'get radios' });
};

const createRadio = async (req, res) => {
	const data = req.body;
	console.log(data);
	res.json({ msg: 'post radio' });
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

const { Router } = require('express');
const {
	getRadios,
	createRadio,
	updateRadio,
	deleteRadio,
} = require('../controllers/controllers');

const router = Router();

router.get('/api/radios', getRadios);
router.post('/api/radio', createRadio);
router.put('/api/radio/:id', updateRadio);
router.delete('/api/radios/:id', deleteRadio);

module.exports = router;

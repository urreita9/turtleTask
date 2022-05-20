const { Router } = require('express');
const {
	getRadios,
	createRadio,
	updateRadio,
	deleteRadio,
} = require('../controllers/controllers');
const jwtCheck = require('../validations/jwtCheck');

const router = Router();

router.get('/api/radios', getRadios);
router.post('/api/radio', jwtCheck, createRadio);
router.put('/api/radio/:id', jwtCheck, updateRadio);
router.delete('/api/radio/:id', jwtCheck, deleteRadio);

module.exports = router;

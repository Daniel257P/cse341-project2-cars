const express = require('express');
const router = express.Router();

const carController = require('../controllers/cars');
const validation = require('../middleware/validateCar');
const validateId = require('../middleware/validateId');
const {isAuthenticated} = require('../middleware/authenticate');

router.get('/', carController.getAll);
router.get('/:id', validateId, carController.getSingle);
router.post('/', isAuthenticated, validation.saveCar, carController.createCar);
router.put('/:id', isAuthenticated, validateId, validation.saveCar, carController.updateCar);
router.delete('/:id', isAuthenticated, validateId, carController.deleteCar);

module.exports = router;

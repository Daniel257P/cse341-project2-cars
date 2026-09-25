const express = require('express');
const router = express.Router();

const manufacturerController = require('../controllers/manufacturers');
const validation = require('../middleware/validateManufacturer');
const validateId = require('../middleware/validateId');
const {isAuthenticated} = require('../middleware/authenticate');

router.get('/', manufacturerController.getAll);
router.get('/:id', validateId, manufacturerController.getSingle);
router.post('/', isAuthenticated, validation.saveManufacturer, manufacturerController.createManufacturer);
router.put('/:id', isAuthenticated, validateId, validation.saveManufacturer, manufacturerController.updateManufacturer);
router.delete('/:id', isAuthenticated, validateId, manufacturerController.deleteManufacturer);

module.exports = router;

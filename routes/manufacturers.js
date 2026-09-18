const express = require('express');
const router = express.Router();

const manufacturerController = require('../controllers/manufacturers');
const validation = require('../middleware/validateManufacturer');
const validateId = require('../middleware/validateId');

router.get('/', manufacturerController.getAll);
router.get('/:id', validateId, manufacturerController.getSingle);
router.post('/', validation.saveManufacturer, manufacturerController.createManufacturer);
router.put('/:id', validateId, validation.saveManufacturer, manufacturerController.updateManufacturer);
router.delete('/:id', validateId, manufacturerController.deleteManufacturer);

module.exports = router;
